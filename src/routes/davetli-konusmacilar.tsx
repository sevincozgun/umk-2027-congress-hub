import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/davetli-konusmacilar")({
  head: () => ({
    meta: [
      { title: "Davetli Konuşmacılar — UMK 2027" },
      { name: "description", content: "UMK 2027 davetli konuşmacıları ve özgeçmişleri." },
    ],
  }),
  component: SpeakersPage,
});

const speakers = [
  { name: "Davetli Konuşmacı 1", title: "Profesör, Üniversite Adı", topic: "Konuşma başlığı buraya gelecek." },
  { name: "Davetli Konuşmacı 2", title: "Profesör, Üniversite Adı", topic: "Konuşma başlığı buraya gelecek." },
  { name: "Davetli Konuşmacı 3", title: "Profesör, Üniversite Adı", topic: "Konuşma başlığı buraya gelecek." },
  { name: "Davetli Konuşmacı 4", title: "Profesör, Üniversite Adı", topic: "Konuşma başlığı buraya gelecek." },
];

function SpeakersPage() {
  return (
    <div>
      <PageHero title="Davetli Konuşmacılar" subtitle="Alanında öncü araştırmacılar UMK 2027'de" />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-2">
          {speakers.map((s) => (
            <div key={s.name} className="flex gap-5 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="h-20 w-20 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent" />
              <div>
                <h3 className="font-display text-lg font-semibold">{s.name}</h3>
                <p className="text-sm text-muted-foreground">{s.title}</p>
                <p className="mt-3 text-sm">{s.topic}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl px-4 text-center text-sm text-muted-foreground">
          Davetli konuşmacı listesi ve özgeçmişleri ilerleyen aylarda güncellenecektir.
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
