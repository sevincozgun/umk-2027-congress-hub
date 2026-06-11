import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ituLogo from "@/assets/itu-logo.png.asset.json";
import gaunLogo from "@/assets/gaun-logo.png.asset.json";
import tumtmkLogo from "@/assets/tumtmk-logo.png.asset.json";

const orgLogos = [
  { src: ituLogo.url, alt: "İstanbul Teknik Üniversitesi", wrap: "h-14 w-12 rounded-[50%]" },
  { src: gaunLogo.url, alt: "Gaziantep Üniversitesi", wrap: "h-14 w-14 rounded-full" },
  { src: tumtmkLogo.url, alt: "TÜMTMK", wrap: "h-14 w-12 rounded-lg" },
];

const navItems = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/organizasyon", label: "Organizasyon" },
  { to: "/davetli-konusmacilar", label: "Davetli Konuşmacılar" },
  { to: "/konu-basliklari", label: "Konu Başlıkları" },
  { to: "/kayit-bilgileri", label: "Kayıt Bilgileri" },
  { to: "/kongre-mekani", label: "Kongre Mekanı" },
  { to: "/iletisim", label: "İletişim" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-5 text-primary-foreground">
          <div className="flex items-center gap-3">
            {orgLogos.map((l) => (
              <div
                key={l.alt}
                className={`flex items-center justify-center overflow-hidden bg-white shadow-md ${l.wrap}`}
              >
                <img src={l.src} alt={l.alt} className="h-full w-full object-contain" />
              </div>
            ))}
          </div>
          <div className="hidden leading-tight sm:block">
            <div className="font-display text-lg font-semibold">UMK 2027</div>
            <div className="text-xs opacity-80">25. Ulusal Mekanik Kongresi</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/90 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              activeProps={{ className: "bg-primary-foreground/15 text-primary-foreground" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/ozet-gonder"
            className="ml-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow transition-transform hover:scale-105"
          >
            Özet Gönder
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-primary-foreground lg:hidden"
          aria-label="Menü"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="mx-4 rounded-lg bg-primary/95 p-4 shadow-xl backdrop-blur">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:bg-primary-foreground/10"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/ozet-gonder"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-accent px-3 py-2 text-center text-sm font-semibold text-accent-foreground"
              >
                Özet Gönder
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
