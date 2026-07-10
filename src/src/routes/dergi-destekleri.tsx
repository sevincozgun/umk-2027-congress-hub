import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/dergi-destekleri")({
  head: () => ({
    meta: [
      { title: "Dergi Destekleri — UMK 2027" },
      { name: "description", content: "UMK 2027 kapsamında destek veren hakemli dergiler." },
    ],
  }),
  component: JournalsPage,
});

const journals = [
  "Turkish Journal of Civil Engineering",
  "Journal of Structural Engineering & Applied Mechanics",
];

function JournalsPage() {
  return (
    <div>
      <PageHero title="Dergi Destekleri" subtitle="Kongremize destek veren hakemli dergiler" />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ul className="space-y-4">
            {journals.map((j) => (
              <li key={j} className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <BookOpen className="h-6 w-6" />
                </div>
                <span className="font-display text-lg font-semibold">{j}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Seçilen bildirilerin genişletilmiş versiyonları, destek veren dergilerde hakem
            sürecine alınmak üzere değerlendirilebilecektir. Dergi listesi güncellendikçe bu
            sayfada duyurulacaktır.
          </p>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
