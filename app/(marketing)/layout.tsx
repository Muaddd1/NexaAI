import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "NexaAI — AI that works at the speed of your ideas",
  description:
    "NexaAI helps teams create, analyze, automate, and scale their work using advanced AI.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      {children}
    </TooltipProvider>
  );
}
