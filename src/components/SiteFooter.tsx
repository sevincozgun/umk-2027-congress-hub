import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-semibold">25. Ulusal Mekanik Kongresi</h3>
            <p className="mt-2 text-sm opacity-80">
              Mayıs 2027 · Gaziantep Üniversitesi · Gaziantep, Türkiye
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider opacity-70">Hızlı Bağlantılar</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/organizasyon" className="hover:text-accent">Organizasyon</Link></li>
              <li><Link to="/konu-basliklari" className="hover:text-accent">Konu Başlıkları</Link></li>
              <li><Link to="/kayit-bilgileri" className="hover:text-accent">Kayıt Bilgileri</Link></li>
              <li><Link to="/ozet-gonder" className="hover:text-accent">Özet Gönder</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider opacity-70">Düzenleyenler</h4>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              <li>Gaziantep Üniversitesi</li>
              <li>İstanbul Teknik Üniversitesi</li>
              <li>TÜMTMK</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs opacity-70">
          © {new Date().getFullYear()} UMK 2027. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
