import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-16 px-8 bg-white">
      {/* <div className="h-14 w-14 first:bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-80"></div > */}
      {/* Background Shapes */}
      <div className="absolute left-100 top-300">
        {/* <div className="h-24 w-24 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-80"></div> */}
      </div>
      <div className="absolute right-36 top-48">
        {/* <div className="h-20 w-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-80"></div> */}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-start space-y-8">
          {/* Logo and Title */}
          <h1 className="text-6xl font-bold">
            <span className="text-blue-500">G</span>
            <span className="text-blue-500">D</span>
            <span className="text-blue-500">G</span>
            <span className="text-blue-500">O</span>
            <span className="text-blue-500">C</span>{" "}
            <span className="text-green-500">G</span>
            <span className="text-green-500">R</span>
            <span className="text-green-500">I</span>
            <span className="text-green-500">E</span>
            <span className="text-green-500">T</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-xl text-gray-700">
            Empowering students through{" "}
            <span className="text-red-500 font-medium">AI</span> technology.
          </h2>

          {/* What We Offer Section */}
          <div className="w-full mt-12">
            <div className="flex items-center mb-6 gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-sm">💡</span>
              </div>
              <h3 className="text-xl font-medium text-blue-600">
                What We Offer
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OfferCard
                icon="G"
                title="Google Campaign"
                description="Connect with Google technologies and experts."
                iconBg="bg-white"
                iconColor="text-blue-500"
              />

              <OfferCard
                icon="</>"
                title="Coding Workshops"
                description="Hands-on workshops to enhance your skills."
                iconBg="bg-yellow-100"
                iconColor="text-yellow-600"
              />

              <OfferCard
                icon="💡"
                title="Innovative Projects"
                description="Collaborate on cutting-edge tech projects."
                iconBg="bg-green-100"
                iconColor="text-green-600"
              />

              <OfferCard
                icon="📈"
                title="Career Growth"
                description="Boost your career with industry connections."
                iconBg="bg-red-100"
                iconColor="text-red-600"
              />
            </div>
            <div className="flex gap-4 mt-10">
              <a
                href="https://gdg.community.dev/gdg-on-campus-gokaraju-rangaraju-institute-of-engineering-technology-hyderabad-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                Join Community
              </a>
              <Link
                to="/learn-more"
                className="px-6 py-3 bg-white text-blue-500 border border-blue-500 rounded-full hover:bg-blue-50 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface OfferCardProps {
  icon: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

const OfferCard = ({
  icon,
  title,
  description,
  iconBg,
  iconColor,
}: OfferCardProps) => {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div
          className={`h-10 w-10 rounded-md ${iconBg} flex items-center justify-center`}
        >
          <span className={`text-lg font-bold ${iconColor}`}>{icon}</span>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-2">{title}</h4>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
