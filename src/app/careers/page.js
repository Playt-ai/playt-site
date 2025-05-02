import Image from 'next/image';
import Header from '../components/Header';
import Link from 'next/link';

export const metadata = {
  title: 'Careers',
  description: 'Join the Playt team and help transform the future of restaurant operations. View our open positions and apply today.',
};

export default function Careers() {
  const positions = [
    {
      title: "Growth Intern",
      type: "Internship",
      location: "Remote",
      description: "Help drive Playt's growth through marketing and business development initiatives.",
      link: "/careers/growth-intern"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />

      {/* Page Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-8">Join Our Team</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Join our quickly growing team!
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {positions.map((position) => (
              <div 
                key={position.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold font-poppins mb-2">{position.title}</h3>
                <div className="flex gap-4 mb-4">
                  <span className="text-sm bg-playt-purple/10 text-playt-purple px-3 py-1 rounded-full">{position.type}</span>
                  <span className="text-sm bg-playt-yellow/10 text-gray-600 px-3 py-1 rounded-full">{position.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <Link href={position.link} className="text-playt-purple hover:text-playt-purple/80 font-medium">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}