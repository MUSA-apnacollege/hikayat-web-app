function StatCard({ title, value, icon: Icon, description, trend }) {
    // Utility function to conditionally join class names
    const cn = (...classes) => {
      return classes.filter(Boolean).join(" ")
    }
  
    return (
      <div className="stats-card">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{title}</h3>
          <Icon className="h-5 w-5 text-gray-500" />
        </div>
        <div className="text-3xl font-bold">{value.toLocaleString()}</div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">{description}</p>
          {trend && (
            <div className={cn("flex items-center text-sm", trend.isPositive ? "text-green-500" : "text-red-500")}>
              <span>
                {trend.isPositive ? "+" : "-"}
                {trend.value}%
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }
  
  export default StatCard
  