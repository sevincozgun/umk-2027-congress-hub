import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/kayit-bilgileri")({
  head: () => ({
    meta: [
      { title: "Kayıt Bilgileri — UMK 2027" },
      { name: "description", content: "UMK 2027 kayıt ücretleri, banka bilgileri ve kayıt koşulları." },
    ],
  }),
  component: RegistrationPage,
});

const fees = [
  { type: "Akademisyen — Erken Kayıt", price: "TBA" },
  { type: "Akademisyen — Geç Kayıt", price: "TBA" },
  { type: "Lisansüstü Öğrenci — Erken Kayıt", price: "TBA" },
  { type: "Lisansüstü Öğrenci — Geç Kayıt", price: "TBA" },
  { type: "Refakatçi", price: "TBA" },
];

function RegistrationPage() {
  return (
    <div>
      <PageHero title="Kayıt Bilgileri" subtitle="Kayıt ücretleri ve ödeme koşulları" />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Katılımcı Tipi</th>
                  <th className="px-6 py-4 text-right font-semibold">Ücret</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {fees.map((f) => (
                  <tr key={f.type}>
                    <td className="px-6 py-4">{f.type}</td>
                    <td className="px-6 py-4 text-right font-semibold text-accent">{f.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 rounded-xl bg-secondary p-6 text-sm text-secondary-foreground">
            <h3 className="font-display text-lg font-semibold">Önemli Notlar</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Kayıt ücretleri, kongre çantası, kahve molaları ve sosyal program dahildir.</li>
              <li>Banka havalesi bilgileri ileri bir aşamada duyurulacaktır.</li>
              <li>Her kabul edilen bildirinin en az bir yazarının kayıt yaptırması zorunludur.</li>
            </ul>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
