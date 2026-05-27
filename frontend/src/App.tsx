import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Pages — we will create these one by one as we build each feature
// import LoginPage from './pages/LoginPage'
// import RegisterPage from './pages/RegisterPage'
// import DashboardPage from './pages/DashboardPage'
// import TransactionsPage from './pages/TransactionsPage'
// import CategoriesPage from './pages/CategoriesPage'

// Temporary placeholder so the app compiles while we build
function ComingSoon({ page }: { page: string }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-2">Neto</h1>
        <p className="text-gray-400 text-sm">{page} — coming soon</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* These will be replaced with real pages as we build */}
        <Route path="/login" element={<ComingSoon page="Login" />} />
        <Route path="/register" element={<ComingSoon page="Register" />} />
        <Route path="/dashboard" element={<ComingSoon page="Dashboard" />} />
        <Route path="/transactions" element={<ComingSoon page="Transactions" />} />
        <Route path="/categories" element={<ComingSoon page="Categories" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
