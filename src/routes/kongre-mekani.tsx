import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { MapPin, Plane, Hotel, Utensils } from "lucide-react";

export const Route = createFileRoute("/kongre-mekani")({
  head: () => ({
    meta: [
      { title: "Kongre Mekanı — UMK 2027" },
      { name: "description", content: "Gaziantep Üniversitesi ve konaklama bilgileri." },
    ],
  }),
  component: VenuePage,
});

const info = [
  { icon: MapPin, title: "Mekan", text: "Gaziantep Üniversitesi Kongre ve Kültür Merkezi, Şehitkamil / Gaziantep" },
  { icon: Plane, title: "Ulaşım", text: "Gaziantep Havalimanı'na (GZT) İstanbul ve Ankara'dan günlük çok sayıda direkt sefer bulunmaktadır." },
  { icon: Hotel, title: "Konaklama", text: "Şehir merkezinde çeşitli kategorilerde konaklama seçenekleri mevcuttur. Anlaşmalı oteller ileride duyurulacaktır." },
  { icon: Utensils, title: "Gastronomi", text: "Gaziantep, UNESCO Yaratıcı Şehirler Ağı'nda gastronomi şehri olarak yer almaktadır. Eşsiz lezzetleri keşfedin." },
];

function VenuePage() {
  return (
    <div>
      <PageHero title="Kongre Mekanı" subtitle="Gaziantep — Tarihin ve lezzetin başkenti" />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-2 sm:px-6">
          {info.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
