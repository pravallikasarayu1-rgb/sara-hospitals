import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Doctors from "./Doctors";
import Booking from "./Booking";
import Admin from "./Admin";

import "./App.css";


export default function App(){

return(

<BrowserRouter>


<nav className="navbar">

<div className="logo">
🏥 SARA Hospitals
</div>


<div className="nav-links">

<Link to="/">
Home
</Link>

<Link to="/doctors">
Doctors
</Link>

<Link to="/booking">
Appointment
</Link>

<Link to="/admin">
Admin
</Link>

</div>


</nav>



<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/doctors" element={<Doctors/>}/>

<Route path="/booking" element={<Booking/>}/>

<Route path="/admin" element={<Admin/>}/>

</Routes>



</BrowserRouter>

);

}