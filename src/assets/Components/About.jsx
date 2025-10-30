import aboutImage from '../images/e75a09c1.jpg'
import mission from '../images/IMG-20251029-WA0009.jpg'
const About = () => {
    return (
        <>     
        <div className="services-bg-image">   
        <div className="wrap">
            <div className="about-container">
                <div className="about-left-pane">
                   <p className="text002">ABOUT</p>
                   <p className="text003">WHO WE ARE</p>
                   <p className="thick-line"></p>
                   <p className="text002"> <span>Emily Mahlehu Mlotshywa (Pty) Ltd (EMM)</span> is a South African company registered under the Central Supplier Database (CSD No: MAAA16156921).</p>
                   <br />
                   <p className="text002">Established with a mission to provide quality-driven, efficient, and sustainable services, EMM operates across multiple sectors from water supply and civil construction to transport, logistics, and industrial cleaning.</p>
                </div>
                <div className="about-right-pane">
                    <img src={aboutImage} className='about-image' alt="About image"></img>
                </div>
           </div>
           <p className="text004">Guided by the vision of delivering excellence through service, we continuously expand our capabilities to meet the growing needs of public and private clients across South Africa</p>  
        </div>
            <section className="mission-and-vision-container">
                <div className="wrap">
                <img src={mission} className='mission-and-vision-image' alt="About image"></img>
                        <div className="mission">
                            <h2 className="text005">Mission</h2>
                            <p className="text006">To deliver exceptional industrial cleaning, transportation, and yellow plant services through quality workmanship, operational safety, and sustainable practices — ensuring efficiency and contributing to the growth and well-being of the communities we serve.</p>
                            <h2 className="text005" style={{textAlign: "end", marginTop: "0.5em"}}>Vision</h2>
                            <p className="text006">To be the leading and most trusted provider of industrial cleaning, transportation, and yellow plant services in the region, recognized for excellence, innovation, and commitment to sustainable development.</p>
                            <h2 className="text005" style={{marginTop: "0.5em"}}>Core Values</h2>
                            <p className="text006">Our work is guided by a commitment to safety,  and quality in everything we do. We uphold integrity in all our operations, promote teamwork across all levels, and strive for sustainability by implementing environmentally responsible practices that support community development.</p>
                        </div>
                </div>
            </section>
            </div>
        </>

    );
}
export default About