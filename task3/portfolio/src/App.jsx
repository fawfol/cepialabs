// App.jsx
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./route/Home";
import Contact from "./route/Contact";

export default function App() {
  return (
    <Router>
      <nav style={{
        display:'flex',
        justifyContent:'center',
        gap:'2em',
        fontSize : '1.3rem',
        padding:'1.5em',
        background:'#fff',
        boxShadow:'0 2px 6px rgba(0,0,0,0.07)',
        position: 'sticky',
        top: 0
      }}>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black', textDecoration: 'none' })}>
          Home
        </NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black', textDecoration: 'none' })}>
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
