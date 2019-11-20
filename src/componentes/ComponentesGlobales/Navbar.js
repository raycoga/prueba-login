import React, { Component } from "react"
import "../Css/Navbar.css"
import Foto from '../Assets/image/eyss.png'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark justify-content-center">
                <img id="img" src={Foto} alt="EYSS prueba" />
            </nav>
        )
    }
}
export default Navbar
/* <div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav">
    <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
    </li>
</ul>
</div> */