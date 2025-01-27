import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '@/pages/Home'
import i18n from '@/i18n'
import { I18nextProvider } from 'react-i18next'
import { Navbar } from './Navbar'

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </I18nextProvider>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
