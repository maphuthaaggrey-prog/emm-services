import { Link } from 'react-router-dom'

const Hero = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const offset = 80;
            const elementPosition = contactSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
        <div className="hero">
            <div className="wrap">
                <div className="main-hero">
                    <p className="text001">WE VALUE QUALITY AND EXCELLENT SERVICES</p>
                    <p className="text002">At <span>Emily Mahlehu Mlotshywa (Pty) Ltd</span>, we are dedicated to providing reliable solutions in water management, civil construction, logistics, industrial cleaning, and plant hire. </p>
                    <div className="hero-btns">
                        <button 
                            className="hero-contact-btn" 
                            onClick={scrollToContact}
                        >
                            Contact us
                        </button>
                        <Link to="/work-history">
                            <button className="hero-work-btn">Work history</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero