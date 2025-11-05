import { motion } from 'framer-motion';
import { LayoutDashboard, CheckCircle2, Clock, ChefHat, Settings, Users, BarChart3, Mail } from 'lucide-react';

const tickets = {
  new: [
    { id: 'T-101', table: 7, items: 3 },
    { id: 'T-102', table: 12, items: 2 },
  ],
  progress: [
    { id: 'T-099', table: 4, items: 5 },
  ],
  done: [
    { id: 'T-095', table: 2, items: 4 },
  ],
};

export default function InsightsSection() {
  return (
    <section id="dashboards" className="relative py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <LayoutDashboard className="h-6 w-6 text-emerald-600" />
          <h2 className="text-3xl font-extrabold text-gray-900">Dashboards</h2>
        </div>
        <p className="mt-2 text-gray-600">Live ticket board for the kitchen and a high-level admin overview for managers.</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          {/* Kitchen Dashboard */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-900 font-semibold">
                <ChefHat className="h-5 w-5 text-emerald-600" /> Kitchen Board
              </div>
              <span className="inline-flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                <Clock className="h-4 w-4" /> Real-time
              </span>
            </div>
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              <Column title="New" color="border-emerald-200" list={tickets.new} />
              <Column title="In Progress" color="border-amber-200" list={tickets.progress} />
              <Column title="Completed" color="border-sky-200" list={tickets.done} />
            </div>
          </motion.div>

          {/* Admin Overview */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <Settings className="h-5 w-5 text-emerald-600" /> Admin Overview
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <Stat label="Active Tables" value="14" />
              <Stat label="Open Tickets" value="6" />
              <Stat label="Avg. Prep Time" value="14m" />
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-100 p-4">
                <p className="text-sm font-medium text-gray-700">Menu Management</p>
                <ul className="mt-3 text-sm text-gray-600 list-disc list-inside space-y-1">
                  <li>Add, edit, or archive items</li>
                  <li>Group items by categories</li>
                  <li>Attach images and allergens</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-100 p-4">
                <p className="text-sm font-medium text-gray-700">Staff Performance</p>
                <div className="mt-2 flex items-center gap-6">
                  <Badge icon={Users} label="Team" value="8" />
                  <Badge icon={BarChart3} label="Tickets/Hour" value="22" />
                  <Badge icon={CheckCircle2} label="On-time" value="92%" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* About */}
        <div id="about" className="mt-16 grid lg:grid-cols-2 gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900">About</h3>
            <p className="mt-2 text-gray-600">
              Our system streamlines front-of-house and kitchen operations with a smooth ordering experience. Guests scan a QR code, place orders by table, and the kitchen receives tickets instantly. Managers get a unified view to manage menus, track performance, and review history.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div id="contact" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900">Contact</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                alert(`Thanks, ${data.get('name')}! We'll reach out at ${data.get('email')}.`);
                e.currentTarget.reset();
              }}
              className="mt-4 grid gap-3"
            >
              <div className="grid sm:grid-cols-2 gap-3">
                <input name="name" required placeholder="Your name" className="rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-emerald-400" />
                <input name="email" required type="email" placeholder="Email" className="rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-emerald-400" />
              </div>
              <textarea name="message" rows={4} placeholder="Your message" className="rounded-lg border border-gray-200 px-3 py-2 outline-none focus:border-emerald-400" />
              <button type="submit" className="inline-flex items-center gap-2 w-fit rounded-lg bg-emerald-600 px-5 py-2.5 text-white font-semibold hover:bg-emerald-700">
                <Mail className="h-4 w-4" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Column({ title, color, list }) {
  return (
    <div className={`rounded-xl border ${color} p-4 bg-white`}> 
      <p className="text-sm font-semibold text-gray-800">{title}</p>
      <div className="mt-3 space-y-3">
        {list.map((t) => (
          <div key={t.id} className="rounded-lg border border-gray-100 p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">{t.id}</span>
              <span className="text-xs text-gray-500">Table {t.table}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">{t.items} item(s)</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-100 p-4 text-center">
      <p className="text-xs text-gray-600">{label}</p>
      <p className="text-2xl font-extrabold text-gray-900 mt-1">{value}</p>
    </div>
  );
}

function Badge({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-emerald-600" />
      <div>
        <p className="text-xs text-gray-600">{label}</p>
        <p className="text-sm font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
