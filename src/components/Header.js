import NavigationBar from "./NavigationBar";

const Header = () => {
    return (
        <div className="main">
            <NavigationBar />
            <div className="name">
                <p className="heading">Looking For a Designer!</p>
                <h1>I'm <span>Lorem</span> Ipsum</h1>
                <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend convallis urna eget iaculis. Aliquam a lectus nec dolor blandit iaculis. Mauris blandit ac ligula id hendrerit. Quisque ut cursus enim. Ut efficitur at ante quis iaculis.</p>
                <div className="header-btns">
                    <a href="#" className="cv-btn">Hire Me</a>
                    <a href="#" className="cv-btn1">Download CV</a>
                </div>
            </div>
            <div className="arrow"></div>
        </div>
    )
}

export default Header;