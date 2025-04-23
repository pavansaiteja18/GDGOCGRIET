
import { useState } from "react";
import { cn } from "@/lib/utils";

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
  return (
    <div className="bg-gray-50 rounded-lg border shadow-sm p-6 max-w-md">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-center">
          <span className="text-blue-500 underline underline-offset-4">Upcoming</span> Events
        </h2>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button
          className={cn(
            "flex-1 py-2 text-sm font-medium",
            activeTab === "upcoming" 
              ? "border-b-2 border-blue-500 text-blue-600" 
              : "text-gray-500 hover:text-gray-700"
          )}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Events
        </button>
        <button
          className={cn(
            "flex-1 py-2 text-sm font-medium",
            activeTab === "past" 
              ? "border-b-2 border-blue-500 text-blue-600" 
              : "text-gray-500 hover:text-gray-700"
          )}
          onClick={() => setActiveTab("past")}
        >
          Past Events
        </button>
      </div>
      
      {/* Event Cards */}
      <div className="space-y-4">
        {activeTab === "upcoming" ? (
          <>
            <EventCard
              title="Google-Powered Solution Challenge 2025"
              date="6th Jan - 2nd week of July"
              location="Online"
              attendees="200+ Attendees"
              isNew
            />
            
            <EventCard
              title="Not Available"
              date="N/A"
              location="N/A"
              attendees="N/A Attendees"
            />
          </>
        ) : (
          <div className="text-center text-gray-500 py-8">
            No past events to show
          </div>
        )}
      </div>
    </div>
  );
};

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: string;
  isNew?: boolean;
}

const EventCard = ({ title, date, location, attendees, isNew }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg border p-4 relative">
      {isNew && (
        <div className="absolute right-2 top-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
          New
        </div>
      )}
      
      <h3 className="font-medium mb-3">{title}</h3>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-blue-500">📅</span>
          <span className="text-gray-600">{date}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-red-500">📍</span>
          <span className="text-gray-600">{location}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-green-500">👥</span>
          <span className="text-gray-600">{attendees}</span>
        </div>
      </div>
      
      <button className="w-full py-2 mt-4 text-center text-white font-medium rounded bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition-all">
        Register Now
      </button>
    </div>
  );
};

export default EventsSection;
