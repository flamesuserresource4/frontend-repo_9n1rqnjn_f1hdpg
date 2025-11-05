import { useState } from 'react';
import { UtensilsCrossed, Menu as MenuIcon, X, QrCode } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#dashboards', label: 'Dashboards' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" onClick={(e) => handleNav(e, '#home')} className="flex items-center gap-2 font-semibold text-gray-900">
            <UtensilsCrossed className="h-6 w-6 text-emerald-600" />
            <span>Smart Kitchen</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#menu"
              onClick={(e) => handleNav(e, '#menu')}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-white text-sm font-semibold shadow-sm hover:bg-emerald-700 transition-colors"
            >
              <QrCode className="h-4 w-4" /> Scan & Order
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNav(e, l.href)}
                  className="px-2 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#menu"
                onClick={(e) => handleNav(e, '#menu')}
                className="mt-2 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-white font-semibold shadow-sm hover:bg-emerald-700"
              >
                <QrCode className="h-4 w-4" /> Scan & Order
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
