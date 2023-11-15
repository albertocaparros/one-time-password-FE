/* eslint-disable react/prop-types */
import GlobalStyles from './components/styles/Global'
import VerificationPage from './components/pages/VerificationPage'
import Inside from './components/pages/Inside'
import ProtectedRoute from './components/ProtectedRoute'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

function App () {
  const [allowed, setAllowed] = useState(false)

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
