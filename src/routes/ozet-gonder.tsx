import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { Download, Upload, FileText } from "lucide-react";

export const Route = createFileRoute("/ozet-gonder")({
  head: () => ({
    meta: [
      { title: "Özet Gönder — UMK 2027" },
      { name: "description", content: "UMK 2027 bildiri özeti gönderim bilgileri ve şablonlar." },
    ],
  }),
  component: SubmitPage,
});

function SubmitPage() {
  return (
    <div>
      <PageHero title="Özet Gönder" subtitle="Bildiri özeti gönderim takvimi ve şablonları" />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-accent" />
              <h3 className="font-display text-lg font-semibold">Yazım Kuralları</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Bildiri özetleri Türkçe veya İngilizce olarak hazırlanmalı, en fazla 300 kelime
              olmalı ve sağlanan şablona uygun biçimde yüklenmelidir.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Download className="h-6 w-6 text-accent" />
              <h3 className="font-display text-lg font-semibold">Şablonlar</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Özet ve tam metin şablonları ileri bir tarihte burada paylaşılacaktır.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-md border border-border px-4 py-2 text-sm text-muted-foreground">Özet Şablonu (Yakında)</span>
              <span className="rounded-md border border-border px-4 py-2 text-sm text-muted-foreground">Tam Metin Şablonu (Yakında)</span>
            </div>
          </div>

          <div className="rounded-xl bg-primary p-6 text-center text-primary-foreground shadow-lg">
            <Upload className="mx-auto h-8 w-8 text-accent" />
            <h3 className="mt-3 font-display text-xl font-semibold">Gönderim Sistemi</h3>
            <p className="mt-2 text-sm opacity-90">
              Özet gönderim sistemi Eylül 2026 itibarıyla aktif olacaktır.
            </p>
            <button
              disabled
              className="mt-5 cursor-not-allowed rounded-md bg-accent/60 px-6 py-3 text-sm font-semibold text-accent-foreground"
            >
              Yakında Açılacak
            </button>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
