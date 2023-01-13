
import './App.css';


//routes
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import DashBorad from './Pages/DashBorad';
//importing react router dom
import {BrowserRouter,Routes,Route,useParams} from "react-router-dom"
import ProtectedRoutes from './shared/ProtectedRoutes';
import DocDetails from './Pages/DocDetails';
import BookApt from './Pages/BookApt';
import Appoint from './Pages/Appoint';


function App() {
  let { id } = useParams();
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/api/login' element={<Login/>}/>
    <Route path='/api/users' element={<Signup/>}/>
    <Route element={<ProtectedRoutes/>} >
    <Route path='/api/dashboard' element={<DashBorad/>}/>
   
    </Route>
    <Route path='/api/doctordetails/:id' element={<DocDetails/>}/>
    <Route  path='/api/bookapt' element={<BookApt/>}/>
    <Route path='/api/apt' element={<Appoint/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
