
import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection";

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Events</h1>
          
          <div className="flex justify-center">
            <EventsSection />
          </div>
        </div>
      </main>
      
      <footer className="bg-white py-6 text-center text-gray-500 text-sm">
        <p>© 2025 GDG MSIT. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Events;
