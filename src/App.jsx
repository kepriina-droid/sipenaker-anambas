import { NavLink, Route, Routes } from 'react-router-dom'
import {
  HomePage,
  LoginPage,
  CompanyDashboardPage,
  CompanyReportFormPage,
  AdminDashboardPage,
  LaborUnionPage,
  JobVacancyPage,
  JobTrainingPage,
  IndustrialRelationsPage,
  ThrPostPage,
} from './pages'

const navItems = [
  { to: '/', label: 'Beranda' },
  { to: '/login', label: 'Login' },
  { to: '/dashboard-perusahaan', label: 'Dashboard Perusahaan' },
  { to: '/form-pelaporan', label: 'Form Pelaporan' },
  { to: '/dashboard-admin', label: 'Dashboard Admin' },
  { to: '/serikat-buruh', label: 'Serikat/Federasi Buruh' },
  { to: '/lowongan-kerja', label: 'Lowongan Kerja' },
  { to: '/pelatihan-kerja', label: 'Pelatihan Kerja' },
  { to: '/perselisihan-hi', label: 'Perselisihan HI' },
  { to: '/posko-thr', label: 'Posko THR' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="brand-subtitle">Pemerintah Kabupaten Kepulauan Anambas</p>
          <h1 className="brand-title">SIPENAKER Anambas</h1>
        </div>
        <button className="primary-btn">Bantuan</button>
      </header>

      <nav className="navbar">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard-perusahaan" element={<CompanyDashboardPage />} />
          <Route path="/form-pelaporan" element={<CompanyReportFormPage />} />
          <Route path="/dashboard-admin" element={<AdminDashboardPage />} />
          <Route path="/serikat-buruh" element={<LaborUnionPage />} />
          <Route path="/lowongan-kerja" element={<JobVacancyPage />} />
          <Route path="/pelatihan-kerja" element={<JobTrainingPage />} />
          <Route path="/perselisihan-hi" element={<IndustrialRelationsPage />} />
          <Route path="/posko-thr" element={<ThrPostPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
