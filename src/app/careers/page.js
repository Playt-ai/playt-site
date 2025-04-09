import Image from 'next/image';
import Link from 'next/link';

export default function Careers() {
//   const positions = [
//     {
//       title: "Senior Full Stack Engineer",
//       type: "Full-time",
//       location: "Remote",
//       description: "Join our engineering team to build the future of restaurant operations."
//     },
//     {
//       title: "Product Designer",
//       type: "Full-time",
//       location: "Remote",
//       description: "Help shape the user experience of our platform."
//     },
//     {
//       title: "Customer Success Manager",
//       type: "Full-time",
//       location: "Remote",
//       description: "Work directly with restaurants to ensure their success with Playt."
//     }
//   ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header - Same as main page */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Playt Logo"
              width={64}
              height={64}
              priority
            />
            <span className="font-poppins font-bold text-4xl text-gray-800">
              Playt
            </span>
          </Link>
          <div className="space-x-2">
            <Link href="/#features" className="px-4 py-2 text-sm font-medium text-playt-purple hover:text-playt-purple/80 transition-colors">
              Learn More
            </Link>
            <a href="https://calendly.com/team-playt/30min" target="_blank" rel="noopener noreferrer" className="bg-playt-purple hover:bg-playt-purple/90 text-white text-sm font-medium px-4 py-2 rounded-lg shadow transition-all hover:shadow-lg transform hover:-translate-y-0.5">
              Book a Demo
            </a>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-8">Join Our Team</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            No open roles right now. Check back later!
          </p>
          
          {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {positions.map((position, index) => (
              <div 
                key={position.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                <h3 className="text-xl font-bold font-poppins mb-2">{position.title}</h3>
                <div className="flex gap-4 mb-4">
                  <span className="text-sm bg-playt-purple/10 text-playt-purple px-3 py-1 rounded-full">{position.type}</span>
                  <span className="text-sm bg-playt-yellow/10 text-gray-600 px-3 py-1 rounded-full">{position.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <a href="mailto:careers@playt.com" className="text-playt-purple hover:text-playt-purple/80 font-medium">
                  Apply Now →
                </a>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </main>
  );
}