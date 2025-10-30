import director from '../images/director.jpg'

const Director = () => {
    return (
        <>
                <div className="wrap">
            <div className="about-container">
                <div className="about-left-pane">
                   <p className="text002">TEAM</p>
                   <p className="text003">MEET OUR DIRECTOR</p>
                   <p className="thick-line"></p>
                   <p className="text002"><span style={{fontSize: "20px"}}>Strike Amos Mnguni</span></p>
                   <p className="text002">Founder & Director — Emily Mahlehu Mlotshywa (Pty) Ltd</p>
                   <br />
                   <p className="text002">With a strong vision for growth and service excellence, <span> Mr. Strike Amos Mnguni leads Emily Mahlehu Mlotshywa (Pty) Ltd</span> with integrity, innovation, and a passion for community-driven development.</p>
                                       <br />
                                       <p className="text002"> As a results-oriented leader, he brings years of experience in construction, water management, logistics, and business operations, ensuring that EMM consistently delivers high-quality services that meet both public and private sector standards.</p>
                    <div className="director-message">
                        <p className="text002">“At EMM, we don’t just complete projects — we create sustainable solutions that empower communities and strengthen our nation’s infrastructure.” <br />
                        <span> — Strike Amos Mnguni</span></p>
                    </div>
              </div>
                <div className="director-right-pane">
                    <img src={director} className='director-image' alt="About image"></img>
                </div>
           </div>
      </div>
        
        </>
    )
}

export default Director