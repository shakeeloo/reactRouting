import './Nav.css'
import {Route,Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="nav" bg="dark" variant="dark">
            <ul>
                <li className="me-auto">
                    <Link to="home">Home</Link>
                </li>
                <li className="me-auto">
                    <Link to="about">About</Link>
                </li>
                <li className="me-auto">
                    <Link to="services">Services</Link>
                </li>
                <li className="me-auto">
                    <Link to="contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;