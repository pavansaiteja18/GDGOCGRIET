
import Navbar from "@/components/Navbar";

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Our Team</h1>
          
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <TeamMember 
              name="Alex Johnson" 
              role="Lead Organizer"
              image="https://i.pravatar.cc/300?img=1"
            />
            <TeamMember 
              name="Jamie Smith" 
              role="Technical Lead"
              image="https://i.pravatar.cc/300?img=2"
            />
            <TeamMember 
              name="Taylor Green" 
              role="Design Lead"
              image="https://i.pravatar.cc/300?img=3"
            />
            <TeamMember 
              name="Morgan Lee" 
              role="Marketing Lead"
              image="https://i.pravatar.cc/300?img=4"
            />
            <TeamMember 
              name="Casey Rivera" 
              role="Event Coordinator"
              image="https://i.pravatar.cc/300?img=5"
            />
            <TeamMember 
              name="Jordan Patel" 
              role="Community Manager"
              image="https://i.pravatar.cc/300?img=6"
            /> */}
          {/* </div> */}
        </div>
      </main>
      
      <footer className="bg-white py-6 text-center text-gray-500 text-sm">
        <p>© 2025 GDGOC GRIET. All rights reserved.</p>
      </footer>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember = ({ name, role, image }: TeamMemberProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
      <div className="mb-4 flex justify-center">
        <img 
          src={image} 
          alt={name} 
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-gray-600 text-sm">{role}</p>
    </div>
  );
};

export default Team;
