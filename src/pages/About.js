import hero from '../images/hero.png'

const About = () => {
    return (
    <section className="about">
        <div className="about-model">
            <img src={hero} alt="model"/>	
        </div>
        <div className="about-text">
            
            <h2>About Me</h2>
            <h3>I'm a Passionate <span style={{color: '#000266'}}>Front-end Developer</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur, eros a dapibus ullamcorper, arcu purus accumsan nunc, nec imperdiet leo lacus sit amet urna. Etiam eu ornare tellus. Praesent sed neque dapibus, ultrices risus in, convallis turpis. Curabitur ornare mauris in pulvinar viverra. Suspendisse elementum, massa molestie blandit lobortis, erat lectus dignissim enim, vel consectetur magna odio in lacus. Fusce commodo et ex vel scelerisque.</p>
            <button>View More Details</button>
        </div>
            
    </section>
    )
}

export default About;