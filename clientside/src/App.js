
import './App.css';


//routes
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
//importing react router dom
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/api/login' element={<Login/>}/>
    <Route path='/api/users' element={<Signup/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
