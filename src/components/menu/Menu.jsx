import { NavLink } from "react-router-dom"
import "./Menu.css"

function Menu (){

    return (
        <nav className="mainMenu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu
