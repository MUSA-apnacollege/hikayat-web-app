import { useAppContext } from "../context/AppContext"
import StatCard from "./StatCard"
import { BookOpen, Quote, ScrollText, Users, BookMarked, Heart } from "lucide-react"

function StatisticsDashboard() {
  const { categories, teamMembers, getStatistics } = useAppContext()
  const stats = getStatistics()

  return (
    <div className="flex-1 p-6 md:p-10 ml-0 md:ml-64">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Statistics Dashboard</h1>
            <p className="text-gray-500">Overview of your literary collections</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard
              title="Total Books"
              value={stats.books}
              icon={BookOpen}
              description="Books in your collection"
              trend={stats.booksTrend}
            />
            <StatCard
              title="Total Poems"
              value={stats.poems}
              icon={ScrollText}
              description="Poems in your collection"
              trend={stats.poemsTrend}
            />
            <StatCard
              title="Total Quotes"
              value={stats.quotes}
              icon={Quote}
              description="Quotes in your collection"
              trend={stats.quotesTrend}
            />
            <StatCard title="Team Members" value={teamMembers.length} icon={Users} description="Active team members" />
            <StatCard title="Categories" value={categories.length} icon={BookMarked} description="Content categories" />
            <StatCard
              title="Favorites"
              value={stats.favorites}
              icon={Heart}
              description="Items marked as favorite"
              trend={stats.favoritesTrend}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatisticsDashboard
