import Navbar from "@/components/Navbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          
          <div className="bg-white shadow rounded-lg p-6">
            <p className="mb-4">
              Google Developer Group GDGOC GRIET is a community of developers who are interested in Google's developer technology.
            </p>
            <p className="mb-4">
              Our mission is to create a vibrant community where students can learn, share knowledge, and grow together in the field of technology.
            </p>
            <p>
              We organize workshops, speaker sessions, hackathons, study jams, and social events focused on Google technologies and open-source projects.
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-white py-6 text-center text-gray-500 text-sm">
        <p>© 2025 GDGOC GRIET. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
