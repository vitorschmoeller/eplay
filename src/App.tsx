import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Header from './components/Header'

import Rotas from './routes'
import Footer from './components/Footer'

//criando as rotas

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
