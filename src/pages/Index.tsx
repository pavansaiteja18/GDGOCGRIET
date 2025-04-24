import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventsSection from "@/components/EventsSection";
import SnowfallEffect from "@/components/ui/SnowfallEffect"; // Import SnowfallEffect

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Snowfall effect */}
      <SnowfallEffect />

      <Navbar />
      
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1">
                <Hero />
              </div>
              
              <div className="lg:w-96 flex items-start justify-center ml-500">
                <EventsSection />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white py-6 text-center text-gray-500 text-sm">
        <p>© 2025 GDGOC GRIET. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
