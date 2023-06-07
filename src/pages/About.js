import hero from '../images/hero.png'

const About = () => {
    return (
    <section className="about">
        <div className="about-model">
            <img src={hero} alt="model"/>	
        </div>
        <div className="about-text">
            
            <h2>About Me</h2>
            <h3>I'm a Passionate <span style={{color: '#000266'}}>Web Designer</span></h3>
            <p>Enjoy the ultimate web design editor. Divi is like Photoshop or Sketch for the web. It brings an advanced design interface to WordPress that both beginners and experts will fall in love with. It's incredibly smart, super flexible, amazingly powerful and visual by nature. This is how designing for the web is meant to be done.</p>
            <button>View More Details</button>
        </div>
            
    </section>
    )
}

export default About;