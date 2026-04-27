"use client";

import { useState, useRef, useCallback } from "react";

interface ImageUploadZoneProps {
  onUploadComplete: (urls: string[]) => void;
}

export default function ImageUploadZone({ onUploadComplete }: ImageUploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadFiles = useCallback(async (files: FileList | File[]) => {
    const fileArray = Array.from(files).filter((f) =>
      f.type.startsWith("image/")
    );
    if (fileArray.length === 0) return;

    setUploading(true);
    setProgress({ done: 0, total: fileArray.length });

    const urls: string[] = [];

    for (let i = 0; i < fileArray.length; i++) {
      const formData = new FormData();
      formData.append("file", fileArray[i]);

      try {
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });
        if (res.ok) {
          const data = await res.json();
          urls.push(data.url);
        }
      } catch {
        // skip failed uploads
      }

      setProgress({ done: i + 1, total: fileArray.length });
    }

    setUploading(false);
    setProgress(null);

    if (urls.length > 0) {
      onUploadComplete(urls);
    }
  }, [onUploadComplete]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    uploadFiles(e.dataTransfer.files);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
        isDragging
          ? "border-brand bg-brand/5"
          : "border-gray-300 hover:border-gray-400"
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={(e) => e.target.files && uploadFiles(e.target.files)}
      />

      {uploading && progress ? (
        <div>
          <p className="text-gray-600 font-medium">
            Uploading {progress.done} of {progress.total}...
          </p>
          <div className="mt-3 w-48 mx-auto bg-gray-200 rounded-full h-2">
            <div
              className="bg-brand h-2 rounded-full transition-all"
              style={{ width: `${(progress.done / progress.total) * 100}%` }}
            />
          </div>
        </div>
      ) : (
        <div>
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 16v-8m0 0l-3 3m3-3l3 3M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1"
            />
          </svg>
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-medium text-brand">Click to upload</span> or
            drag and drop
          </p>
          <p className="mt-1 text-xs text-gray-500">
            PNG, JPG, WebP up to 10MB each
          </p>
        </div>
      )}
    </div>
  );
}
