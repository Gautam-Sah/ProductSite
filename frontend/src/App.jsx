import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/Homepage'
import CreatePage from './pages/Createpage'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/create' element={<CreatePage/>}></Route>
    </Routes>
    </>
  )
}

export default App
