import WaitlistForm from "./components/WaitlistForm"
import BackgroundParticles from "./components/BackgroundParticles"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-blue-500 flex items-center justify-center p-4 overflow-hidden relative">
      <BackgroundParticles />
      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2 animate-fade-in-up">Playt</h1>
          <p className="text-xl text-white opacity-80 animate-fade-in-up-low-op animation-delay-150">
            AI-Powered Data Analytics & Supply Chain Optimization for Restaurants
          </p>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8 animate-fade-in-up animation-delay-300">
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">Join Our Waitlist</h2>
          <WaitlistForm />
        </div>
      </div>
    </main>
  )
}

