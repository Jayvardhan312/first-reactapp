import React from "react";
import './style.css'
function Navigation(){
    return(<div>
        <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">Jayvardhan solanki</a>
        <ul className="navbar-nav">
          <li className="nav-item"><a href="/home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
    </div>)
}
export default Navigation