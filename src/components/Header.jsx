import { NavLink } from "react-router-dom"
import cart from '../assets/cart.png'
import search from '../assets/search.png'
import person from '../assets/person.png'
import './Header.css'

const Header = () => {
    return (
        <div className="nav-bar">
           <NavLink to={'/'}> <h1 className="title">Fake Store</h1></NavLink>
            <nav>
                <NavLink><img src={search} alt="serach icon" className="search-icon" /></NavLink>
                <NavLink><img src={person} alt="person icon" className="person-icon" /></NavLink>
                <NavLink to={'/cart'}><img src={cart} alt="shopping cart" className="cart-logo"/></NavLink>
            </nav>
        </div>
    )
}

export default Header