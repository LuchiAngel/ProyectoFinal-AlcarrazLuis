import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import logo from "./assets/logo.png"
import styles from "./assets/navbar.module.css"

export const NavBar = () => {
  return (
    <>
    <nav className="d-flex justify-content-around mt-2">
    <div className={styles.logo}>
    <img src={logo} alt="foto del logo" />
    </div>
    <h1 className={styles.h2}>Todo dulce y Una pizca de sal</h1>
    
    <div>
    
        <Link to="/">
        <button className="btn btn-outline-primary mx-2">Inicio</button>
        </Link>
        <Link to="/category/salado">
        <button className="btn btn-outline-danger mx-2">Salado</button>
        </Link>
        <Link to="/category/dulce">
        <button className="btn btn-outline-success mx-2">Dulce</button>
        </Link>
        <Link to="/contacto">
        <button className="btn btn-outline-warning mx-2">Contacto</button>
        </Link>
        
    </div>
    <Link to="/cart">
        <CartWidget />
    </Link>
    
    </nav>
    
    </>
    
  )
}


