import './App.css';
import Home from './components/Home';
//import Nav from './components/Nav';
import Blog from './components/Blog';
import OurMenus from './components/OurMenus';
import Breakfastapi from './components/Breakfastapi';
import Lunch from './components/Lunch';
import Dinner from './components/Dinner';
import Dessert from './components/Dessert';
import Contact from './components/Contact';
import { Route, Routes } from "react-router-dom";
//import Footer from './components/Footer';
import Booktable from './components/Booktable';
import Commingsoon from './components/Commingsoon';
import Signup from './Loginandsign/Signup';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cartitem/Cart';
//import { CartProvider} from 'react-use-cart';
import Forgetpass from './Loginandsign/Forgetpass';
import Resetpass from './Loginandsign/Resetpass';
import Dashboard from './Admin/Dashboard';
import Admin from './Loginandsign/Admin';
import Logout from './Loginandsign/Logout';
import Login from './Loginandsign/Login';
import Signing from './Loginandsign/Signing';




const App = () => {
  return (
   <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/breakfastapi" element={<Breakfastapi />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/our-menus" element={<OurMenus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booktable" element={<Booktable />} />
        <Route path="/commingsoon" element={<Commingsoon />} />
        <Route path="/loginsignup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/forgetpass" element={<Forgetpass />} />
        <Route path="/resetpass" element={<Resetpass />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signing" element={<Signing />} />
        <Route path="/dashboard" element={<Dashboard />} />
     
        </Routes>
   </>
  )
}

export default App

