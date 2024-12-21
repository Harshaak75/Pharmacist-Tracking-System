import './App.css'
import { backend_url } from './config'
import { Dashboard } from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DoctorForm } from './pages/DoctorDetails'
import { MainDashboard } from './pages/MainDashboard'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainDashboard/>} >
      <Route path='Dashboard' element={<Dashboard />} />
      <Route path='Doctor-Details' element={<DoctorForm/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
