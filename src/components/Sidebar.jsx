import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { BookOpen, BarChart3, Users, Home, Settings, LogOut, Menu, X } from "lucide-react"

function Sidebar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Team", href: "/team", icon: Users },
    { name: "Statistics", href: "/statistics", icon: BarChart3 },
    { name: "Settings", href: "#", icon: Settings },
  ]

  // Utility function to conditionally join class names
  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md border border-gray-200 bg-white"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary-DEFAULT" />
              <h1 className="text-xl font-bold">Hikayat</h1>
            </div>
          </div>

          <nav className="flex-1 px-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn("sidebar-item", location.pathname === item.href && "active")}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="p-4 mt-auto border-t">
            <button className="sidebar-item w-full justify-start">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
