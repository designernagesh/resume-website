import {Link} from 'react-scroll';

const NavigationBar = () => {
    return (
        <nav>
            <a href="www.google.com" className="logo">
                UI Expert
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>

            <ul className="menu">
                <li><Link to="main">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="services">Service</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationBar;