import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, Info, Landmark } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/kayit-bilgileri")({
  head: () => ({
    meta: [
      { title: "Kayıt Bilgileri — UMK 2027" },
      { name: "description", content: "UMK 2027 kayıt ücretleri, ödeme koşulları ve kayıt formu." },
    ],
  }),
  component: RegistrationPage,
});

const fees = [
  { type: "Katılımcı*", price: "$150" },
  { type: "Öğrenci**", price: "$50" },
  { type: "Çevrimiçi Katılımcı*", price: "$75" },
  { type: "Çevrimiçi Öğrenci**", price: "$25" },
  { type: "Sunumsuz Katılım*", price: "$150" },
];

function RegistrationPage() {
  return (
    <div>
      <PageHero title="Kayıt Bilgileri" subtitle="Kayıt ücretleri ve ödeme koşulları" />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="font-display text-xl font-semibold">Kayıt</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tüm kayıt başvuruları kongre web sitesi üzerinden alınacaktır. Kongreye katılmak
              için aşağıdaki kayıt formunu doldurmanız gerekmektedir. Kayıt yaptıran belirli
              sayıda lisansüstü öğrenci, doktora sonrası araştırmacı ve kariyerinin başındaki
              öğretim üyesine destek sağlanması planlanmaktadır.
            </p>
            <a
              href="#"
              className="mt-5 inline-block rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow transition-transform hover:scale-105"
            >
              Kayıt Formu
            </a>
            <p className="mt-2 text-xs text-muted-foreground">Kayıt formu ileri bir tarihte aktif olacaktır.</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Info className="h-6 w-6 text-accent" />
              <h3 className="font-display text-lg font-semibold">Birden Fazla Sunumu Olan Yazarlar İçin Önemli Not</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Her kayıt kapsamında en fazla iki bildiri sunulabilir. İkiden fazla bildiri sunmak
              isteyen yazarların ek bir kayıt yaptırmaları gerekmektedir.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <CreditCard className="h-6 w-6 text-accent" />
              <h2 className="font-display text-xl font-semibold">Kayıt Ücretleri</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Ücretlere kongreye erişimin yanı sıra kahve molaları ve öğle yemekleri dahildir.
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-border shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Kategori</th>
                    <th className="px-6 py-4 text-right font-semibold">Kayıt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {fees.map((f) => (
                    <tr key={f.type} className="odd:bg-secondary/40">
                      <td className="px-6 py-4">{f.type}</td>
                      <td className="px-6 py-4 text-right font-semibold">{f.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 space-y-2 text-xs text-muted-foreground">
              <p>* Kayıt formunuzu gönderirken lütfen ödeme belgenizi de ekleyiniz.</p>
              <p>
                ** Öğrenci ücretinden yararlanabilmek için tam zamanlı (lisans, yüksek lisans veya
                doktora) kayıtlı olmak gerekmektedir. Kayıt formunuzla birlikte resmi öğrenci
                belgenizi de iletiniz.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Landmark className="h-6 w-6 text-accent" />
              <h3 className="font-display text-lg font-semibold">Banka Havalesi Detayları</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Havale açıklamasında katılımcının adının ve özet numarasının açıkça belirtilmesi
              gerekmektedir. Tutarın tamamı havale edilmeli, işlem ücretleri katılımcı
              tarafından karşılanmalıdır. Hesap bilgileri ileri bir tarihte duyurulacaktır.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
