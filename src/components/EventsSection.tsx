import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
              title="API Ideathon"
              date="26/04/2025"
              location="Griet College"
              attendees="200+ Attendees"
              isNew={true}
              registrationLink="https://docs.google.com/forms/d/e/1FAIpQLSftYyaj8HpzMhwTL0MvfRv48OT3Ak0iAJ64PN7J8z9WHO6FmA/viewform"
            />
            <EventCard
              title="Google-Powered Solution Challenge 2025"
              date="6th Jan - 2nd week of July"
              location="Online"
              attendees="200+ Attendees"
              registrationLink="https://example.com/solution-challenge"
            />
          </>
        ) : (
          <div className="space-y-4">
            <PastEventCard
              title="Build with AI"
              type="Speaker Session / Tech Talk"
              date="7 Feb 2025"
              location="Gokaraju Rangaraju Institute of Engineering & Technology - Hyderabad, India"
            />
            <PastEventCard
              title="Build with AI"
              type="Info session"
              date="11 Oct 2024"
              location="Gokaraju Rangaraju Institute of Engineering & Technology - Hyderabad, India"
            />
            <PastEventCard
              title="GDGoC Orientation"
              type="Info session"
              date="26 Sept 2024"
              location="Gokaraju Rangaraju Institute of Engineering & Technology - Hyderabad, India"
            />
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
  registrationLink: string;
}

const EventCard = ({ title, date, location, attendees, isNew, registrationLink }: EventCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg border p-4 relative shadow transition-all hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
    >
      {isNew && (
        <div className="absolute right-2 top-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
          New
        </div>
      )}

      <h3 className="font-medium mt-3 mb-3">{title}</h3>

      <div className="space-y-3 text-sm">
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

      <a
        href={registrationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-2 mt-4 text-center text-white font-medium rounded bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition-all"
      >
        Register Now
      </a>
    </motion.div>
  );
};

interface PastEventCardProps {
  title: string;
  type: string;
  date: string;
  location: string;
}

const PastEventCard = ({ title, type, date, location }: PastEventCardProps) => {
  return (
    <motion.div
      className="bg-white border-2 border-green-600 rounded-lg p-4 shadow-sm transition-all hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="font-semibold text-lg mb-1 text-green-700">{title}</h3>
      <p className="text-sm text-gray-500 mb-2 italic">{type}</p>
      <div className="text-sm text-gray-600 space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-blue-500">📅</span>
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-red-500">📍</span>
          <span>{location}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default EventsSection;
