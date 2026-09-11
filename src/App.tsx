import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PhoneShell } from './components/PhoneShell'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { TasksPage } from './pages/TasksPage'
import { MarketPage } from './pages/MarketPage'
import { InfoPage } from './pages/InfoPage'
import { FoodPage } from './pages/FoodPage'
import { ProfilePage } from './pages/ProfilePage'
import { PetPage } from './pages/PetPage'
import { ChatPage } from './pages/ChatPage'
import { SchedulePage } from './pages/SchedulePage'
import { ContactPage } from './pages/ContactPage'
import { MessagesPage } from './pages/MessagesPage'

export default function App() {
  return (
    <BrowserRouter>
      <PhoneShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/pet" element={<PetPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PhoneShell>
    </BrowserRouter>
  )
}
