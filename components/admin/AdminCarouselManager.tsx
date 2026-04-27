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
import type { CarouselImage } from "@/lib/types";
import ImageUploadZone from "./ImageUploadZone";
import ConfirmDialog from "./ConfirmDialog";

function SortableImageCard({
  image,
  onUpdate,
  onDelete,
}: {
  image: CarouselImage;
  onUpdate: (id: string, updates: Partial<CarouselImage>) => void;
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
      <div className="relative aspect-video">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
      <div className="p-3">
        <input
          type="text"
          value={image.alt}
          onChange={(e) => onUpdate(image.id, { alt: e.target.value })}
          onBlur={() => onUpdate(image.id, { alt: image.alt })}
          className="w-full text-sm border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none focus:border-brand"
          placeholder="Alt text"
        />
      </div>
    </div>
  );
}

export default function AdminCarouselManager() {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const fetchImages = useCallback(async () => {
    const res = await fetch("/api/admin/carousel");
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
    for (const url of urls) {
      const res = await fetch("/api/admin/carousel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ src: url, alt: "Hero carousel image" }),
      });
      if (res.ok) {
        const newImage = await res.json();
        setImages((prev) => [...prev, newImage]);
      }
    }
  };

  const handleUpdate = async (id: string, updates: Partial<CarouselImage>) => {
    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, ...updates } : img))
    );

    setSaving(true);
    await fetch(`/api/admin/carousel/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    await fetch(`/api/admin/carousel/${deleteTarget}`, { method: "DELETE" });
    setImages((prev) => prev.filter((img) => img.id !== deleteTarget));
    setDeleteTarget(null);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = images.findIndex((img) => img.id === active.id);
    const newIndex = images.findIndex((img) => img.id === over.id);
    const reordered = arrayMove(images, oldIndex, newIndex);
    setImages(reordered);

    const items = reordered.map((img, i) => ({ id: img.id, sort_order: i }));
    await fetch("/api/admin/carousel/reorder", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });
  };

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
        <h1 className="text-2xl font-bold text-gray-900">
          Hero Carousel ({images.length} images)
        </h1>
        {saving && (
          <span className="text-sm text-gray-500">Saving...</span>
        )}
      </div>

      <ImageUploadZone onUploadComplete={handleUploadComplete} />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={images.map((img) => img.id)}
          strategy={rectSortingStrategy}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
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

      {images.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          No carousel images yet. Upload some above!
        </p>
      )}

      <ConfirmDialog
        open={!!deleteTarget}
        title="Delete Image"
        message="Are you sure you want to delete this carousel image? This action cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
