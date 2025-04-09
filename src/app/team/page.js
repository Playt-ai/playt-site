import Image from 'next/image';
import Header from '../components/Header';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Team() {
  const team = [
    {
      name: "Edison Shen",
      role: "Co-Founder & CEO",
      image: "/team/wazowski.png", // Replace with actual image
      linkedin: "https://www.linkedin.com/in/edison-shen7/", // Replace with actual LinkedIn URL
      description: "CS @ Michigan"
    },
    {
      name: "Jonathan Jae",
      role: "Co-Founder & CFO",
      image: "/team/wazowski.png", // Replace with actual image
      linkedin: "#", // Replace with actual LinkedIn URL
      description: "Finance @ Stanford"
    },
    {
      name: "Jackson Shen",
      role: "Software Engineer",
      image: "/team/wazowski.png", // Replace with actual image
      linkedin: "#", // Replace with actual LinkedIn URL
      description: "AI PhD @ Purdue"
    },
    {
      name: "Edward Sun",
      role: "Software Engineer",
      image: "/team/wazowski.png", // Replace with actual image
      linkedin: "#", // Replace with actual LinkedIn URL
      description: "CS @ UCLA"
    },
    {
      name: "Cassandra Orr",
      role: "Product Design",
      image: "/team/wazowski.png", // Replace with actual image
      linkedin: "#", // Replace with actual LinkedIn URL
      description: "CogSci @ UC Berkeley"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header - Same as main page */}
      <Header />

      {/* Page Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4 text-center">Meet Our Team</h1>
          {/* <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto text-center">
            We're a team of entrepreneurs, engineers, and industry experts passionate about transforming restaurant operations through data-driven solutions.
          </p> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div 
                key={member.name}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full pt-[100%]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                    priority={true}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold font-poppins text-gray-900">{member.name}</h3>
                      <p className="text-playt-purple font-medium">{member.role}</p>
                    </div>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-playt-purple transition-colors"
                    >
                      <FaLinkedinIn className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900 mb-6">Join us!</h2>
            <Link 
              href="/careers"
              className="bg-playt-purple hover:bg-playt-purple/90 text-white font-medium px-8 py-4 rounded-lg shadow transition-all hover:shadow-lg inline-block"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
