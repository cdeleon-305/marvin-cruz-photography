"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { PortfolioImage } from "@/lib/types";
import ImageUploadZone from "./ImageUploadZone";
import ConfirmDialog from "./ConfirmDialog";

const categories = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  { id: "weddings", label: "Weddings" },
  { id: "portraits", label: "Portraits" },
  { id: "sports", label: "Sports" },
];

const categoryOptions = categories.filter((c) => c.id !== "all");

function SortableImageCard({
  image,
  onUpdate,
  onDelete,
}: {
  image: PortfolioImage;
  onUpdate: (id: string, updates: Partial<PortfolioImage>) => void;
  onDelete: (id: string) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: image.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
    >
      <div className="relative aspect-square">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <button
          {...attributes}
          {...listeners}
          className="absolute top-2 left-2 bg-white/90 rounded-lg p-1.5 cursor-grab active:cursor-grabbing shadow-sm"
          title="Drag to reorder"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </button>
        <button
          onClick={() => onDelete(image.id)}
          className="absolute top-2 right-2 bg-red-500/90 text-white rounded-lg p-1.5 hover:bg-red-600 shadow-sm"
          title="Delete image"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-3 space-y-2">
        <input
          type="text"
          value={image.alt}
          onChange={(e) => onUpdate(image.id, { alt: e.target.value })}
          onBlur={() => onUpdate(image.id, { alt: image.alt })}
          className="w-full text-sm border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:border-brand"
          placeholder="Alt text"
        />
        <select
          value={image.category}
          onChange={(e) =>
            onUpdate(image.id, {
              category: e.target.value as PortfolioImage["category"],
            })
          }
          className="w-full text-sm border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:border-brand"
        >
          {categoryOptions.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default function AdminPortfolioManager() {
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const fetchImages = useCallback(async () => {
    const res = await fetch("/api/admin/portfolio");
    if (res.ok) {
      const data = await res.json();
      setImages(data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleUploadComplete = async (urls: string[]) => {
    const category = filter !== "all" ? filter : "events";
    for (const url of urls) {
      const res = await fetch("/api/admin/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ src: url, alt: "New photo", category }),
      });
      if (res.ok) {
        const newImage = await res.json();
        setImages((prev) => [...prev, newImage]);
      }
    }
  };

  const handleUpdate = async (id: string, updates: Partial<PortfolioImage>) => {
    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, ...updates } : img))
    );

    setSaving(true);
    await fetch(`/api/admin/portfolio/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    await fetch(`/api/admin/portfolio/${deleteTarget}`, { method: "DELETE" });
    setImages((prev) => prev.filter((img) => img.id !== deleteTarget));
    setDeleteTarget(null);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const displayedImages = filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

    const oldIndex = displayedImages.findIndex((img) => img.id === active.id);
    const newIndex = displayedImages.findIndex((img) => img.id === over.id);
    const reordered = arrayMove(displayedImages, oldIndex, newIndex);

    // If filtered, merge back with full list maintaining positions
    if (filter !== "all") {
      const otherImages = images.filter((img) => img.category !== filter);
      const merged = [...otherImages, ...reordered];
      setImages(merged);
    } else {
      setImages(reordered);
    }

    const items = reordered.map((img, i) => ({ id: img.id, sort_order: i }));
    await fetch("/api/admin/portfolio/reorder", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });
  };

  const displayedImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Portfolio Images</h1>
        {saving && (
          <span className="text-sm text-gray-500">Saving...</span>
        )}
      </div>

      <ImageUploadZone onUploadComplete={handleUploadComplete} />

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === c.id
                ? "bg-brand text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {c.label}
            {c.id === "all"
              ? ` (${images.length})`
              : ` (${images.filter((img) => img.category === c.id).length})`}
          </button>
        ))}
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={displayedImages.map((img) => img.id)}
          strategy={rectSortingStrategy}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedImages.map((image) => (
              <SortableImageCard
                key={image.id}
                image={image}
                onUpdate={handleUpdate}
                onDelete={(id) => setDeleteTarget(id)}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {displayedImages.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          No images in this category. Upload some above!
        </p>
      )}

      <ConfirmDialog
        open={!!deleteTarget}
        title="Delete Image"
        message="Are you sure you want to delete this image? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
