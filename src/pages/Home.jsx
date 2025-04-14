import Sidebar from "../components/Sidebar"
import HomeContent from "../components/HomeContent"

function Home() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <HomeContent />
    </main>
  )
}

export default Home
