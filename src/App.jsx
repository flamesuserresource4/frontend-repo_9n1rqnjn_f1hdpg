import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import InsightsSection from './components/InsightsSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <InsightsSection />
      </main>
      <footer className="border-t border-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Smart Kitchen. All rights reserved.</p>
          <p>
            Built for modern restaurants — guests order faster, kitchens move smarter, managers see clearer.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
