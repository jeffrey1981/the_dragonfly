import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import InsectGrid from './components/InsectGrid'
import insectsData from './data/data.json'

const App = () => {
  return (
    <div className="app">
      <Header />
      <InsectGrid insects={insectsData.insects} />
      <Footer />
    </div>
  )
}

export default App
