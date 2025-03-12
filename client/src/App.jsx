import React from 'react'
import { Button } from './components/ui/button'

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1 className='text-2xl font-bold quattrocento-bold'>Sendly</h1>
      <h1 className='text-secondary font-bold text-2xl quattrocento-sans-bold'>The text is secondary</h1>
      <h1 className='text-special font-bold text-2xl'>The text is secondary</h1>
      <Button>Click me</Button>
    </div>
  )
}

export default App
