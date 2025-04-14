import Sidebar from "../components/Sidebar"
import TeamManagement from "../components/TeamManagement"

function Team() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <TeamManagement />
    </main>
  )
}

export default Team
