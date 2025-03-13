import './App.css'
import { Route , Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>} />
    </Routes>
    </>
  )
}

export default App
