/* eslint-disable react/prop-types */
import GlobalStyles from './components/styles/Global'
import VerificationPage from './components/pages/VerificationPage'
import Inside from './components/pages/Inside'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'

function App () {
  const [allowed, setAllowed] = useState(false)

  const ProtectedRoute = ({ allowed, children }) => {
    if (!allowed) {
      return <Navigate to='/inside' replace />
    }

    return children
  }

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route index element={<VerificationPage verify={setAllowed} />} />
        <Route path='inside' element={<ProtectedRoute allowed={allowed}><Inside /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
