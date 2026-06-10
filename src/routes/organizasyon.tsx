import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/organizasyon")({
  head: () => ({
    meta: [
      { title: "Organizasyon — UMK 2027" },
      { name: "description", content: "UMK 2027 düzenleme kurulu, bilim kurulu ve organizasyon komitesi." },
    ],
  }),
  component: OrganizasyonPage,
});

const committees = [
  {
    title: "Onursal Kurul",
    members: ["İsim Soyisim — Gaziantep Üniversitesi Rektörü", "İsim Soyisim — İTÜ Rektörü", "İsim Soyisim — TÜMTMK Başkanı"],
  },
  {
    title: "Düzenleme Kurulu",
    members: ["Prof. Dr. İsim Soyisim (Başkan)", "Prof. Dr. İsim Soyisim", "Doç. Dr. İsim Soyisim", "Dr. İsim Soyisim"],
  },
  {
    title: "Bilim Kurulu",
    members: ["Üyeler ileride duyurulacaktır."],
  },
];

function OrganizasyonPage() {
  return (
    <div>
      <PageHero title="Organizasyon" subtitle="Kongremizi düzenleyen kurullar ve komiteler" />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
          {committees.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="font-display text-xl font-semibold text-primary">{c.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {c.members.map((m) => <li key={m}>• {m}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
