
import './App.css';


//routes
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import DashBorad from './Pages/DashBorad';
//importing react router dom
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProtectedRoutes from './shared/ProtectedRoutes';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/api/login' element={<Login/>}/>
    <Route path='/api/users' element={<Signup/>}/>
    <Route element={<ProtectedRoutes/>} >
    <Route path='/api/dashboard' element={<DashBorad/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
