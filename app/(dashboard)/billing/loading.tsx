"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6 max-w-4xl">
      <Skeleton className="h-8 w-48 mb-1" />
      <Skeleton className="h-4 w-64 mb-6" />
      <Skeleton className="h-40 rounded-xl" />
      <Skeleton className="h-20 rounded-xl" />
      <Skeleton className="h-40 rounded-xl" />
    </div>
  );
}
