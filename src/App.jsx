import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'

function App() {

  return (
    <div className='wep-page'>
    <Header/>
    <Routes>
      <Route index element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App
