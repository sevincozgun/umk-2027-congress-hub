import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim — UMK 2027" },
      { name: "description", content: "UMK 2027 sekretarya ve iletişim bilgileri." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <PageHero title="İletişim" subtitle="Sorularınız için bizimle iletişime geçin" />
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-4xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <Mail className="mx-auto h-8 w-8 text-accent" />
            <h3 className="mt-3 font-display font-semibold">E-posta</h3>
            <p className="mt-1 text-sm text-muted-foreground">info@umk2027.org</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <Phone className="mx-auto h-8 w-8 text-accent" />
            <h3 className="mt-3 font-display font-semibold">Telefon</h3>
            <p className="mt-1 text-sm text-muted-foreground">+90 (xxx) xxx xx xx</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <MapPin className="mx-auto h-8 w-8 text-accent" />
            <h3 className="mt-3 font-display font-semibold">Adres</h3>
            <p className="mt-1 text-sm text-muted-foreground">Gaziantep Üniversitesi, Şehitkamil / Gaziantep</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
