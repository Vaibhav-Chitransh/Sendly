import React from 'react'
import LandingPage from './pages/LandingPage'
import { SignupPage } from './pages/SignupPage'
import { LoginPage } from './pages/LoginPage'

const App = () => {
  return (
    <div>
      {/* <LandingPage /> */}
      <SignupPage />
      <LoginPage />
    </div>
  )
}

export default App
