import waterSuppy from '../images/e9972d35.jpg'
import transport from '../images/e75a09c1.jpg'
import industrialCleaning from '../images/83b4474d.jpg'
import plantHire from '../images/1af73550.jpg'
const Services = () => {
    return (
        <>
        <div className="services">
            <div className="wrap">
                    <div className="services-container">
                         <p className="text002">SERVICES</p>
                         <p className="text003">WHAT WE DO</p>
                         <p className="thick-line"></p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <img src={waterSuppy} className='service-image'></img>
                            <div className="service-texts">
                                 <h3>Water Supply and Management</h3>
                                 <p className='text006'>Our water supply services include sourcing, treatment, and distribution of water for residential, commercial, and industrial clients, with a focus on sustainability and efficiency.</p>
                            </div>
                        </div>
                        <div className="service-card">
                        <img src={transport} className='service-image'></img>
                        <div className="service-texts">
                            <h3>Transport and Logistics</h3>
                            <p className='text006'>We provide comprehensive transport and logistics solutions, including freight management, warehousing, and distribution services tailored to meet the needs of our clients.</p>
                        </div>
                        </div>
                        <div className="service-card">
                        <img src={industrialCleaning} className='service-image'></img>
                        <div className="service-texts">
                            <h3>Industrial Cleaning</h3>
                            <p className='text006'>Our industrial cleaning services cover a wide range of sectors, offering specialized cleaning solutions that ensure hygiene, safety, and compliance with industry standards.</p>
                        </div>
                        </div>
                        <div className="service-card">
                        <img src={plantHire} className='service-image'></img>
                        <div className="service-texts">
                            <h3>Plant Hire</h3>
                            <p className='text006'>We offer a diverse fleet of yellow plant equipment for hire, including excavators, loaders, and bulldozers, supported by skilled operators to assist with various construction and earthmoving tasks.</p>
                        </div>
                        </div>
                    </div>
            </div>

        </div>
        </>
    )
}

export default Services