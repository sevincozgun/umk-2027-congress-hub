import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin, Users, FileText, Mic, BookOpen } from "lucide-react";
import heroGate from "@/assets/hero.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UMK 2027 — 25. Ulusal Mekanik Kongresi" },
      { name: "description", content: "25. Ulusal Mekanik Kongresi, Mayıs 2027, Gaziantep Üniversitesi ev sahipliğinde düzenlenecektir." },
    ],
  }),
  component: HomePage,
});

const importantDates = [
  { label: "Özet Gönderimi Başlangıcı", date: "Eylül 2026" },
  { label: "Özet Gönderimi Son Tarih", date: "Aralık 2026" },
  { label: "Kabul İlanı", date: "Ocak 2027" },
  { label: "Erken Kayıt Son Tarih", date: "Şubat 2027" },
  { label: "Kongre Tarihleri", date: "Mayıs 2027" },
];

const highlights = [
  { icon: Mic, title: "Davetli Konuşmacılar", desc: "Alanında öncü akademisyenler ve araştırmacılar." },
  { icon: FileText, title: "Bildiri Sunumları", desc: "Sözlü ve poster sunum oturumları." },
  { icon: BookOpen, title: "Dergi Destekleri", desc: "Seçilen bildiriler hakemli dergilerde yayın imkânı." },
  { icon: Users, title: "Sosyal Program", desc: "Gaziantep'in tarihi ve kültürel zenginliklerini keşfedin." },
];

function HomePage() {
  return (
    <div>
      <section className="relative isolate min-h-screen overflow-hidden text-primary-foreground">
        <img
          src={heroGate}
          alt="Gaziantep Üniversitesi"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-overlay)" }} />

        <SiteHeader />

        <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 pb-32 text-center sm:px-6 sm:pb-40 lg:pb-52">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Gaziantep Üniversitesi ev sahipliğinde
          </div>
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            25. Ulusal<br />Mekanik Kongresi
          </h1>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base sm:text-lg">
            <span className="inline-flex items-center gap-2"><Calendar className="h-5 w-5 text-accent" /> Mayıs 2027</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-5 w-5 text-accent" /> Gaziantep, Türkiye</span>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/konu-basliklari"
              className="rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-primary-foreground/20"
            >
              Konu Başlıkları
            </Link>
            <Link
              to="/ozet-gonder"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105"
            >
              Özet Gönder
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Hoş Geldiniz</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Mekanik biliminin ulusal buluşma noktası
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Türk Milli Teorik ve Uygulamalı Mekanik Komitesi (TÜMTMK) tarafından iki yılda bir
            düzenlenen Ulusal Mekanik Kongresi'nin 25.'si, 2027 yılında Gaziantep Üniversitesi
            ev sahipliğinde gerçekleştirilecektir. Akademisyenleri, araştırmacıları ve
            sanayi temsilcilerini bir araya getiren bu önemli bilimsel etkinliğe siz değerli
            katılımcılarımızı davet etmekten büyük mutluluk duyuyoruz.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Önemli Tarihler</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Takviminizi Hazırlayın</h2>
          </div>
          <ul className="mt-12 divide-y divide-border rounded-xl border border-border bg-card">
            {importantDates.map((d) => (
              <li key={d.label} className="flex items-center justify-between px-6 py-4">
                <span className="font-medium">{d.label}</span>
                <span className="rounded-md bg-secondary px-3 py-1 text-sm font-semibold text-primary">{d.date}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            * Tarihler güncellenebilir. Kesin tarihler ileri bir aşamada duyurulacaktır.
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-primary py-20 text-primary-foreground">
        <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Bildirinizi Şimdi Hazırlamaya Başlayın</h2>
          <p className="mt-4 opacity-90">Özet gönderim takvimi ve şablonlar için duyuruları takip ediniz.</p>
          <Link
            to="/ozet-gonder"
            className="mt-8 inline-block rounded-md bg-accent px-8 py-3 font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105"
          >
            Özet Gönder
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
