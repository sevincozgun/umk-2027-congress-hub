import { createFileRoute } from "@tanstack/react-router";
import { Mic } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/davetli-konusmacilar")({
  head: () => ({
    meta: [
      { title: "Davetli Konuşmacılar — UMK 2027" },
      { name: "description", content: "UMK 2027 davetli konuşmacıları." },
    ],
  }),
  component: SpeakersPage,
});

function SpeakersPage() {
  return (
    <div>
      <PageHero title="Davetli Konuşmacılar" subtitle="Alanında öncü araştırmacılar UMK 2027'de" />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center shadow-sm">
            <Mic className="mx-auto h-10 w-10 text-accent" />
            <h2 className="mt-4 font-display text-xl font-semibold">Davetli konuşmacılar ileride duyurulacaktır</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Kongremizde sunum yapacak davetli konuşmacılar kesinleştikçe bu sayfada paylaşılacaktır.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
