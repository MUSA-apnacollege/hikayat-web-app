import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import Home from "./pages/Home"
import Team from "./pages/Team"
import Statistics from "./pages/Statistics"
import "./index.css"

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App
