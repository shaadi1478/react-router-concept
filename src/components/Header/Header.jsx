import { Link, NavLink } from "react-router-dom";
import './Nav.css'

const Header = () => {
    return (
        <div>
            <nav className="">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/users" >Users</NavLink>
                <NavLink to="/post">Posts</NavLink>
                <h1>This is my new website!</h1>
            </nav>
        </div>
    );
};

export default Header;