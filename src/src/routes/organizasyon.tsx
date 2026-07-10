import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/organizasyon")({
  head: () => ({
    meta: [
      { title: "Organizasyon — UMK 2027" },
      { name: "description", content: "UMK 2027 organizasyon komitesi, yerel komite ve ulusal bilimsel komite." },
    ],
  }),
  component: OrganizasyonPage,
});

type Member = { name: string; affiliation: string };

const organizationCommittee: Member[] = [
  { name: "Mehmet Hakkı OMURTAG", affiliation: "TÜMTMK Başkanı, İstanbul Medipol Üniversitesi" },
  { name: "Abdullah AVEY", affiliation: "TÜMTMK Başkan Yardımcısı, İstanbul Ticaret Üniversitesi" },
  { name: "Nihal ERATLI", affiliation: "TÜMTMK Genel Sekreteri, İstanbul Teknik Üniversitesi" },
  { name: "İsim Soyisim", affiliation: "Gaziantep Üniversitesi Rektörü" },
  { name: "Nildem TAYŞİ", affiliation: "Yerel Komite Başkanı, Gaziantep Üniversitesi" },
];

const localCommittee: Member[] = [
  { name: "Prof. Dr. Nildem TAYŞİ (Başkan)", affiliation: "Gaziantep Üniversitesi" },
  { name: "Doç. Dr. Mehmet Tolga GÖĞÜŞ (Teknik Yönetici)", affiliation: "Gaziantep Üniversitesi" },
];

const scientificCommittee: Member[] = [
  { name: "Ünal ALDEMİR", affiliation: "İstanbul Teknik Üniversitesi" },
  { name: "Nalan ANTAR", affiliation: "İstanbul Teknik Üniversitesi" },
  { name: "Hakan ARGESO", affiliation: "Atılım Üniversitesi" },
  { name: "Ümit ARIBAŞ", affiliation: "İstanbul Medipol Üniversitesi" },
  { name: "Şenol ATAOĞLU", affiliation: "İstanbul Teknik Üniversitesi" },
  { name: "Atilla AŞKAR", affiliation: "Koç Üniversitesi" },
  { name: "Ersin AYDIN", affiliation: "Niğde Ömer Halisdemir Üniversitesi" },
  { name: "İlkay BAKIRTAŞ", affiliation: "İstanbul Teknik Üniversitesi" },
  { name: "Alemdar BAYRAKTAR", affiliation: "Karadeniz Teknik Üniversitesi" },
  { name: "Ahmet BİRİNCİ", affiliation: "Karadeniz Teknik Üniversitesi" },
  { name: "Orhan BÜYÜKALACA", affiliation: "Çukurova Üniversitesi" },
  { name: "Zekai CELEP", affiliation: "Fatih Sultan Mehmet Vakıf Üniversitesi" },
  { name: "Ömer CİVALEK", affiliation: "Akdeniz Üniversitesi" },
  { name: "İsa ÇÖMEZ", affiliation: "Karadeniz Teknik Üniversitesi" },
  { name: "Faruk F. ÇALIM", affiliation: "Adana Alparslan Türkeş Bilim ve Teknoloji Üniversitesi" },
  { name: "Babür DELİKTAŞ", affiliation: "Bursa Uludağ Üniversitesi" },
  { name: "Hilmi DEMİRAY", affiliation: "Işık Üniversitesi" },
  { name: "Mehmet DÖRDÜNCÜ", affiliation: "İzmir Yüksek Teknoloji Enstitüsü" },
  { name: "Nihal ERATLI", affiliation: "İstanbul Teknik Üniversitesi" },
  { name: "Ahmet ERGİN", affiliation: "İstanbul Teknik Üniversitesi" },
  { name: "Merve ERMİŞ", affiliation: "Kırklareli Üniversitesi" },
  { name: "Avadis HACINLAYAN", affiliation: "Yeditepe Üniversitesi" },
  { name: "Abdul HAYIR", affiliation: "İstanbul Teknik Üniversitesi" },
  { name: "Esin İNAN", affiliation: "Işık Üniversitesi" },
  { name: "Volkan KAHYA", affiliation: "Karadeniz Teknik Üniversitesi" },
  { name: "Kadir KAYA", affiliation: "Ondokuz Mayıs Üniversitesi" },
  { name: "Akif KUTLU", affiliation: "İstanbul Teknik Üniversitesi" },
  { name: "Emrah MADENCİ", affiliation: "Necmettin Erbakan Üniversitesi" },
  { name: "Atakan MANGIR", affiliation: "İstanbul Medipol Üniversitesi" },
  { name: "Zahit MECİTOĞLU", affiliation: "İstanbul Teknik Üniversitesi" },
  { name: "Mustafa ÖZAKÇA", affiliation: "Gaziantep Üniversitesi" },
  { name: "Attila ÖZÜTOK", affiliation: "KTO Karatay Üniversitesi" },
  { name: "Ali ÖZTÜRK", affiliation: "Necmettin Erbakan Üniversitesi" },
  { name: "Serdar SOYÖZ", affiliation: "Boğaziçi Üniversitesi" },
  { name: "Beytullah TEMEL", affiliation: "Çukurova Üniversitesi" },
  { name: "Egemen TEOMETE", affiliation: "Dokuz Eylül Üniversitesi" },
  { name: "Naki TÜTÜNCÜ", affiliation: "Çukurova Üniversitesi" },
  { name: "Mehmet ÜLKER", affiliation: "Maltepe Üniversitesi" },
  { name: "Nazmiye YAHNİOĞLU", affiliation: "Yıldız Teknik Üniversitesi" },
  { name: "Murat YAYLACI", affiliation: "Recep Tayyip Erdoğan Üniversitesi" },
];

function CommitteeTable({ title, members, note }: { title: string; members: Member[]; note?: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-primary">{title}</h2>
      <div className="mt-4 overflow-hidden rounded-xl border border-border shadow-sm">
        <table className="w-full text-sm">
          <tbody className="divide-y divide-border bg-card">
            {members.map((m, i) => (
              <tr key={`${m.name}-${i}`} className="odd:bg-secondary/40">
                <td className="w-1/3 px-5 py-3 font-medium">{m.name}</td>
                <td className="px-5 py-3 italic text-muted-foreground">{m.affiliation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-3 text-sm text-muted-foreground">{note}</p>}
    </div>
  );
}

function OrganizasyonPage() {
  return (
    <div>
      <PageHero title="Organizasyon" subtitle="Kongremizi düzenleyen kurullar ve komiteler" />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-5xl space-y-14 px-4 sm:px-6">
          <CommitteeTable title="Organizasyon Komitesi" members={organizationCommittee} />
          <CommitteeTable
            title="Yerel Komite"
            members={localCommittee}
            note="Yerel komitenin diğer üyeleri ileride duyurulacaktır."
          />
          <CommitteeTable title="Ulusal Bilimsel Komite" members={scientificCommittee} />
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">Danışma Kurulu</h2>
            <p className="mt-4 rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground shadow-sm">
              Danışma kurulu üyeleri ileride duyurulacaktır.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
