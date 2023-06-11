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
                <li><Link to="main" spy={true} smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" spy={true} smooth={true} duration={500}>About</Link></li>
                <li><Link to="services" spy={true} smooth={true} duration={500}>Service</Link></li>
                <li><Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavigationBar;