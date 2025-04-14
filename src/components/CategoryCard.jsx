import { BookOpen } from "lucide-react"

function CategoryCard({ category }) {
  return (
    <div className="category-card group">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={category.imageUrl || `https://via.placeholder.com/600x400?text=${category.name}`}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-semibold">{category.name}</h3>
          <div className="flex items-center gap-1 text-sm">
            <BookOpen className="h-4 w-4" />
            <span>{category.itemCount} items</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
