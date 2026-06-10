import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/konu-basliklari")({
  head: () => ({
    meta: [
      { title: "Konu Başlıkları — UMK 2027" },
      { name: "description", content: "UMK 2027 kongresinde ele alınacak konu başlıkları." },
    ],
  }),
  component: TopicsPage,
});

const topics = [
  "Katı Cisimler Mekaniği",
  "Akışkanlar Mekaniği",
  "Mühendislik Mekaniği",
  "Hesaplamalı Mekanik",
  "Deneysel Mekanik",
  "Biyomekanik",
  "Kompozit Malzemeler Mekaniği",
  "Kırılma ve Hasar Mekaniği",
  "Titreşim ve Dinamik",
  "Kontrol ve Robotik",
  "Sürekli Ortamlar Mekaniği",
  "Mikro/Nano Mekanik",
  "Termomekanik",
  "Akıllı Malzemeler ve Yapılar",
  "Mekanik Eğitimi",
];

function TopicsPage() {
  return (
    <div>
      <PageHero title="Konu Başlıkları" subtitle="Kongremizde ele alınacak araştırma alanları" />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => (
              <li key={t} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm">
                <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
