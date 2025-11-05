import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ShoppingCart, Search, QrCode } from 'lucide-react';

const STARTERS = [
  { id: 's1', name: 'Bruschetta', price: 6.5, desc: 'Tomato, basil, garlic on toasted bread' },
  { id: 's2', name: 'Garlic Prawns', price: 9.0, desc: 'Sautéed prawns in garlic butter' },
];
const MAINS = [
  { id: 'm1', name: 'Grilled Salmon', price: 18.5, desc: 'Lemon herb glaze, seasonal greens' },
  { id: 'm2', name: 'Ribeye Steak', price: 24.0, desc: '250g, peppercorn sauce' },
];
const DESSERTS = [
  { id: 'd1', name: 'Tiramisu', price: 7.5, desc: 'Classic Italian pick-me-up' },
  { id: 'd2', name: 'Chocolate Lava Cake', price: 8.0, desc: 'Molten center, vanilla ice cream' },
];
const DRINKS = [
  { id: 'b1', name: 'Lemon Iced Tea', price: 4.0, desc: 'Freshly brewed, chilled' },
  { id: 'b2', name: 'Sparkling Water', price: 3.0, desc: '250ml' },
];

const CATEGORIES = [
  { key: 'Starters', items: STARTERS },
  { key: 'Main Course', items: MAINS },
  { key: 'Desserts', items: DESSERTS },
  { key: 'Beverages', items: DRINKS },
];

export default function MenuSection() {
  const [active, setActive] = useState('Starters');
  const [query, setQuery] = useState('');
  const [tableId, setTableId] = useState('12');
  const [cart, setCart] = useState({}); // { itemId: qty }

  const items = useMemo(() => {
    const list = CATEGORIES.find((c) => c.key === active)?.items || [];
    if (!query) return list;
    const q = query.toLowerCase();
    return list.filter((i) => i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q));
  }, [active, query]);

  const total = useMemo(() => {
    return Object.entries(cart).reduce((sum, [id, qty]) => {
      const all = [...STARTERS, ...MAINS, ...DESSERTS, ...DRINKS];
      const item = all.find((x) => x.id === id);
      return sum + (item ? item.price * qty : 0);
    }, 0);
  }, [cart]);

  const add = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const remove = (id) => setCart((c) => {
    const next = { ...c };
    if (!next[id]) return next;
    if (next[id] === 1) delete next[id]; else next[id] -= 1;
    return next;
  });

  const placeOrder = () => {
    // Simulate order submission
    alert(`Order placed for Table ${tableId} with ${Object.values(cart).reduce((a,b)=>a+b,0)} item(s). Total $${total.toFixed(2)}`);
    setCart({});
  };

  return (
    <section id="menu" className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Table Ordering</h2>
            <p className="mt-2 text-gray-600">Browse the menu, add to cart, and submit your order. Each table has a unique code.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
              <QrCode className="h-5 w-5 text-emerald-600" />
              <input
                value={tableId}
                onChange={(e) => setTableId(e.target.value)}
                className="w-28 outline-none bg-transparent text-sm"
                placeholder="Table ID"
              />
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes"
                className="w-56 pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:border-emerald-400 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                    active === c.key ? 'bg-emerald-600 text-white border-emerald-600' : 'border-gray-200 text-gray-700 hover:border-emerald-300'
                  }`}
                >
                  {c.key}
                </button>
              ))}
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                        <p className="mt-2 font-bold text-emerald-700">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => remove(item.id)}
                          className="p-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50"
                          aria-label="decrease"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold text-gray-900">{cart[item.id] || 0}</span>
                        <button
                          onClick={() => add(item.id)}
                          className="p-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
                          aria-label="increase"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <ShoppingCart className="h-5 w-5 text-emerald-600" /> Order Cart
                </div>
                <span className="text-sm text-gray-500">Table {tableId || '-'}</span>
              </div>
              <div className="mt-4 space-y-3 max-h-[320px] overflow-auto pr-1">
                {Object.keys(cart).length === 0 && (
                  <p className="text-sm text-gray-500">No items yet. Add dishes from the menu.</p>
                )}
                {Object.entries(cart).map(([id, qty]) => {
                  const all = [...STARTERS, ...MAINS, ...DESSERTS, ...DRINKS];
                  const it = all.find((x) => x.id === id);
                  if (!it) return null;
                  return (
                    <div key={id} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{it.name}</p>
                        <p className="text-xs text-gray-500">${it.price.toFixed(2)} x {qty}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => remove(id)} className="p-1 rounded border border-gray-200">
                          <Minus className="h-3 w-3" />
                        </button>
                        <button onClick={() => add(id)} className="p-1 rounded bg-emerald-600 text-white">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 border-t pt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600">Total</span>
                <span className="font-extrabold text-gray-900">${total.toFixed(2)}</span>
              </div>
              <button
                onClick={placeOrder}
                disabled={Object.keys(cart).length === 0}
                className="mt-4 w-full rounded-lg bg-emerald-600 py-2.5 text-white font-semibold hover:bg-emerald-700 disabled:opacity-50"
              >
                Place Order
              </button>
              <p className="mt-2 text-xs text-gray-500">This demo simulates real-time orders. QR codes can link directly to a table-specific URL.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
