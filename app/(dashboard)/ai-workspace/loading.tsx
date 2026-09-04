"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex h-[calc(100vh-4rem)] gap-0">
      <Skeleton className="w-64 shrink-0 hidden lg:block rounded-r-xl" />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-24 rounded-xl" />
          ))}
        </div>
        <Skeleton className="h-20 rounded-none" />
      </div>
    </div>
  );
}
