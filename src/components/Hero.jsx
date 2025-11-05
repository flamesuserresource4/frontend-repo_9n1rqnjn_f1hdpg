import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, ChefHat } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              <ChefHat className="h-4 w-4" /> Restaurant OS
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Smart Kitchen & Table Ordering System
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Sleek, efficient, and made for real-world restaurants. Empower guests to order from their table while your kitchen tracks tickets in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-emerald-700 transition-colors"
              >
                Start Ordering <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#dashboards"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#dashboards')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100"
              >
                View Kitchen Dashboard
              </a>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-gray-700">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                <span className="text-sm">Admin login for menu & reports</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-gray-100 bg-white shadow-xl p-4 sm:p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Starters', count: 12, color: 'bg-rose-50 text-rose-700' },
                  { title: 'Mains', count: 18, color: 'bg-amber-50 text-amber-700' },
                  { title: 'Desserts', count: 8, color: 'bg-fuchsia-50 text-fuchsia-700' },
                  { title: 'Beverages', count: 15, color: 'bg-sky-50 text-sky-700' },
                ].map((c) => (
                  <div key={c.title} className={`rounded-xl border border-gray-100 p-4 ${c.color.split(' ')[0]}`}>
                    <p className={`text-sm font-medium ${c.color.split(' ')[1]}`}>{c.title}</p>
                    <p className="text-2xl font-extrabold mt-1 text-gray-900">{c.count}</p>
                    <p className="text-xs text-gray-500">items</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-100 p-4">
                  <p className="text-sm font-medium text-gray-700">Live Tickets</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm text-gray-600">Real-time updates</span>
                  </div>
                </div>
                <div className="rounded-xl border border-gray-100 p-4">
                  <p className="text-sm font-medium text-gray-700">Average Prep</p>
                  <p className="text-2xl font-extrabold text-gray-900">14m</p>
                  <p className="text-xs text-gray-500">per ticket</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
