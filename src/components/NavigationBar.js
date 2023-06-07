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
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Portfolio</a></li>
            </ul>

            <a href="#" className="Hey">Hey!</a>
        </nav>
    )
}

export default NavigationBar;