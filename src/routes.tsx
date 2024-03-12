import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'
import Home from './pages/Home'
import Categories from './pages/Categories'
//criando as rotas

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    {/* Passando parametro para a path atráves do ':' + um nome qualquer para armazenar nosso parametro, com isso é capaz de reconhecer novas rotas exempplo '/5' */}
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
