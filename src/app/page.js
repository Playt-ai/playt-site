import WaitlistForm from "./components/WaitlistForm"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Playt</h1>
          <p className="text-xl text-white opacity-80">
            AI-Powered Data Analytics & Supply Chain Optimization for Restaurants
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Join Our Waitlist</h2>
          <WaitlistForm />
        </div>
      </div>
    </main>
  )
}

