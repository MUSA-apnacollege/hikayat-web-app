export interface Category {
    id: string
    name: string
    description: string
    imageUrl?: string
    itemCount: number
  }
  
  export interface TeamMember {
    id: string
    name: string
    role: string
    email: string
    phone?: string
    avatarUrl?: string
  }
  
  export interface Statistics {
    books: number
    booksTrend: {
      value: number
      isPositive: boolean
    }
    poems: number
    poemsTrend: {
      value: number
      isPositive: boolean
    }
    quotes: number
    quotesTrend: {
      value: number
      isPositive: boolean
    }
    favorites: number
    favoritesTrend: {
      value: number
      isPositive: boolean
    }
  }
  