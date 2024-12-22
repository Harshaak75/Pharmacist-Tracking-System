import './App.css'
import { backend_url } from './config'
import { Dashboard } from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DoctorForm } from './pages/DoctorDetails'
import { MainDashboard } from './pages/MainDashboard'
import { RepresentativeLogs } from './pages/RepresentativeLogs'
import { Contact } from './pages/Contact'
import { Report } from './pages/Report'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainDashboard/>} >
      <Route path='Dashboard' element={<Dashboard />} />
      <Route path='Doctor-Details' element={<DoctorForm/>} />
      <Route path='Representatives-Logs' element={<RepresentativeLogs/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route path='Reports' element={<Report/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
