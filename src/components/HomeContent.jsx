import { useState } from "react"
import { Search } from "lucide-react"
import CategoryCard from "./CategoryCard"
import { useAppContext } from "../context/AppContext"

function HomeContent() {
  const { categories } = useAppContext()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex-1 p-6 md:p-10 ml-0 md:ml-64">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Welcome to Hikayat</h1>
            <p className="text-gray-500">Explore literary collections from around the world</p>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContent
