import type { Metadata } from "next";
import { PricingSection } from "@/components/landing/pricing-section";
import { FAQSection } from "@/components/landing/faq-section";
import { FinalCTASection } from "@/components/landing/final-cta-section";
import { Footer } from "@/components/landing/footer";
import { AnnouncementBar } from "@/components/landing/announcement-bar";
import { Navbar } from "@/components/landing/navbar";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for every team. Start free, scale when ready.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        {/* Page header */}
        <section className="pt-24 pb-12 text-center">
          <div className="mx-auto max-w-2xl px-4">
            <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-3">
              Pricing
            </p>
            <h1
              className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-[var(--foreground-muted)]">
              No hidden fees. No surprises. Cancel anytime. All plans include a 14-day money-back guarantee.
            </p>
          </div>
        </section>
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
