import { createContext, useContext, useState, useEffect } from "react"
import { mockCategories, mockTeamMembers } from "../data/mockData"

const AppContext = createContext(undefined)

export function AppProvider({ children }) {
  const [categories, setCategories] = useState([])
  const [teamMembers, setTeamMembers] = useState([])

  // Initialize with mock data
  useEffect(() => {
    setCategories(mockCategories)
    setTeamMembers(mockTeamMembers)
  }, [])

  const addTeamMember = (member) => {
    setTeamMembers((prev) => [...prev, member])
  }

  const updateTeamMember = (member) => {
    setTeamMembers((prev) => prev.map((m) => (m.id === member.id ? member : m)))
  }

  const deleteTeamMember = (id) => {
    setTeamMembers((prev) => prev.filter((m) => m.id !== id))
  }

  const getStatistics = () => {
    // Calculate statistics based on categories
    const books = categories.find((c) => c.name === "Books")?.itemCount || 0
    const poems = categories.find((c) => c.name === "Poems")?.itemCount || 0
    const quotes = categories.find((c) => c.name === "Quotes")?.itemCount || 0
    const favorites = Math.floor(Math.random() * 50) + 20 // Mock data

    return {
      books,
      booksTrend: { value: 12, isPositive: true },
      poems,
      poemsTrend: { value: 5, isPositive: true },
      quotes,
      quotesTrend: { value: 3, isPositive: false },
      favorites,
      favoritesTrend: { value: 8, isPositive: true },
    }
  }

  return (
    <AppContext.Provider
      value={{
        categories,
        teamMembers,
        addTeamMember,
        updateTeamMember,
        deleteTeamMember,
        getStatistics,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
