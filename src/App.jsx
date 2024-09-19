import './App.css'
import ComingSoon from './components/comingSoon/CommingSoon'
import { Routes, Route } from 'react-router-dom'

function App() {
 return(
  <>
  <Routes>
    <Route path='/' element={<ComingSoon/>}/>
  </Routes>
    
  </>
 )
}

export default App
