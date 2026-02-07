
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Signup from './pages/SignUp/Signup'
import { AuthProvider } from './contexts/AuthProvider'
import { PrivateOutlet } from './Components/PrivateOutlet/PrivateOutlet'



function App() {


  return (
   <AuthProvider>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/" element={<PrivateOutlet/>}>
     <Route path="/dashboard" element={<Dashboard/>}/>
    </Route>
   
   </Routes>
   </AuthProvider>
  )
}

export default App
