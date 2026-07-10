import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim — UMK 2027" },
      { name: "description", content: "UMK 2027 yerel komite ve sekretarya iletişim bilgileri." },
    ],
  }),
  component: ContactPage,
});

const contacts = [
  {
    role: "Başkan",
    note: null,
    people: [{ name: "Prof. Dr. Nildem Tayşi", tel: "+90 (342) xxx xx xx", email: "eklenecek@gantep.edu.tr" }],
  },
  {
    role: "Teknik Yönetici",
    note: "Makale ve video yükleme işlemlerinden sorumlu",
    people: [{ name: "Doç. Dr. Mehmet Tolga Göğüş", tel: "+90 (342) xxx xx xx", email: "eklenecek@gantep.edu.tr" }],
  },
  {
    role: "Sekreterya",
    note: "Otel ve rezervasyon konularından sorumlu",
    people: [{ name: "İleride duyurulacaktır", tel: null, email: null }],
  },
  {
    role: "Finansal İşlemler",
    note: null,
    people: [{ name: "İleride duyurulacaktır", tel: null, email: null }],
  },
];

function ContactPage() {
  return (
    <div>
      <PageHero title="İletişim Bilgileri" subtitle="Sorularınız için bizimle iletişime geçin" />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6">
          <h2 className="text-center font-display text-2xl font-bold text-primary">
            Yerel Komite İletişim Bilgileri
          </h2>

          <div className="space-y-6">
            {contacts.map((c) => (
              <div key={c.role} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold underline decoration-accent decoration-2 underline-offset-4">
                  {c.role}
                </h3>
                {c.note && <p className="mt-1 text-sm italic text-muted-foreground">{c.note}</p>}
                {c.people.map((p) => (
                  <div key={p.name} className="mt-3">
                    <p className="font-medium">{p.name}</p>
                    {(p.tel || p.email) && (
                      <div className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                        {p.tel && (
                          <span className="inline-flex items-center gap-2">
                            <Phone className="h-4 w-4 text-accent" /> {p.tel}
                          </span>
                        )}
                        {p.email && (
                          <span className="inline-flex items-center gap-2">
                            <Mail className="h-4 w-4 text-accent" /> {p.email}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold underline decoration-accent decoration-2 underline-offset-4">
              Organizasyon Komitesi Başkanı
            </h3>
            <p className="mt-3 font-medium">Prof. Dr. Mehmet H. Omurtag</p>
            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
              <p className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                İstanbul Medipol Üniversitesi, Mühendislik ve Doğa Bilimleri Fakültesi, İnşaat
                Mühendisliği Bölümü, Beykoz, 34810, İstanbul, Türkiye
              </p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
