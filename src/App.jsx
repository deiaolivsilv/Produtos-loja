
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './partes/Menu'
import Produtos from './pages/Produtos'
import Produto from './pages/Produto'


function App() {
 
  return (
    <>
      <Menu />

<Routes>
   <Route path="/" element={<Produtos /> } />
        <Route path="/produto/:id" element={<Produto />} />


  </Routes>

    </>
  )
}


export default App
