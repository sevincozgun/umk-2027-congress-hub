import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/konu-basliklari")({
  head: () => ({
    meta: [
      { title: "Konu Başlıkları — UMK 2027" },
      { name: "description", content: "25. Ulusal Mekanik Kongresi'nde ele alınacak konu başlıkları." },
    ],
  }),
  component: TopicsPage,
});

const topics = [
  "Sürekli Ortamlar Mekaniği",
  "Katı Cisimler Mekaniği",
  "Akışkanlar Mekaniği",
  "Yapı ve Malzeme Mekaniği",
  "Termodinamik, Isı Transferi",
  "Kontrol Teorisi",
  "Uygulamalı Matematik",
  "Etkileşim Problemleri",
  "Hesaplamalı Mekanikte Makine Öğrenmesi",
  "Yerel Olmayan ve Ağsız Yöntemler",
];

function TopicsPage() {
  return (
    <div>
      <PageHero title="Konu Başlıkları" subtitle="25. Ulusal Mekanik Kongresi'nin konu kapsamı" />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <ul className="grid gap-4 sm:grid-cols-2">
            {topics.map((t) => (
              <li key={t} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                <span className="font-medium">{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Kapsam dışında kaldığını düşündüğünüz çalışmalarınız için kongre sekretaryası ile iletişime geçebilirsiniz.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
