import { Routes, Route } from 'react-router-dom'
import About from './pages/about'
import News from './pages/news'
import Subscription from './pages/subscription'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<News />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/subscription" element={<Subscription />} />
    </Routes>
  )
}