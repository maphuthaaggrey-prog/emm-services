import location from '../icons/location_on.png'
import phone from '../icons/Phone.png'
import email from '../icons/mail.png'
import { useState, useEffect } from 'react'
const Footer = () => {

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const year = now.getFullYear();
      setCurrentTime(`${year} - `);
    }, 1000); 

    return () => clearInterval(timer); 
  }, []);

    const [formData, setFormData] = useState({
        yourName: '',
        phoneNumber: '',
        email: '',
        message: '',
      });
    
      const [loading, setLoading] = useState(false);
      const [sendMsg, setSendMsg] = useState("");
      const [errors, setErrors] = useState({});
    
      const contactScriptURL =
        "https://script.google.com/macros/s/AKfycbzPZwLcZkRowgHUZzUFOozA0sny7GfKfaEVuUeCN9EZNRBfFXdoMhfBa4bVvDMwDlVG3w/exec";
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { yourName, phoneNumber, email, message } = formData;
    
        const newErrors = {};
        if (!yourName.trim()) newErrors.yourName = "Name is required!";
        if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))
          newErrors.email = "Valid email is required!";
        if (!phoneNumber.match(/^[0-9]{10}$/))
          newErrors.phoneNumber = "A valid 10-digit phone number is required.";
        if (!message.trim()) newErrors.message = "Message is required.";
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
    
        setLoading(true);
        setErrors({});
        try {
          const data = new URLSearchParams();
          for (const [key, value] of Object.entries(formData)) {
            data.append(key, value);
          }
    
          const response = await fetch(contactScriptURL, {
            method: 'POST',
            body: data,
          });
    
          if (response.ok) {
            setSendMsg('Thank you! Your message has been submitted.');
            setFormData({
              yourName: '',
              phoneNumber: '',
              email: '',
              message: '',
            });
          } else {
            throw new Error('Submission failed');
          }
        } catch (error) {
          console.error(error);
          setSendMsg('Something went wrong. Please try again later.');
        } finally {
          setLoading(false);
          setTimeout(() => setSendMsg(''), 5000);
        }
      };

    return (
        <>
        <div className="footer-container">
            <div className="footer-cont">
                <div className="footer-left-pane">
                        <p className="text002">CONTACT</p>
                        <p className="text003"style={{color: "white"}}>GET IN TOUCH WITH US</p>
                        <p className="thick-line" style={{backgroundColor: "white"}}></p>
                        <p className="text002">Whether you’re looking for a trusted partner for your next project or would like to learn more about our services, our team is ready to assist you.</p>
                        <i><img src={location}>
                           </img>
                                <ul>
                                    <li>123 Piet Retief Street</li>
                                    <li>The Boulevards</li>
                                    <li>Vanderbijl Park, 1911</li>
                                    <li>Gauteng, South Africa</li>
                                </ul>
                        </i>                
                        <i>    <a
                         href="mailto:strikeamos@gmail.com">
                            <img src={email}>
                        </img>
                            <ul>
                                <li>strikeamos@gmail.com</li>
                            </ul>
                            </a>
                        </i>                
                        <i><img src={phone}>
                        </img>
                        <ul>
                            <li>062 910 8893   |   060 808 8637
                            </li>
                        </ul>
                            </i>   
                        <div className="contact-message">
                            <p >Partner with <span>Emily Mahlehu Mlotshywa (Pty) Ltd</span> for quality-driven solutions in water management, civil construction, logistics, industrial cleaning, and plant hire.</p>
                        </div>             
                </div>
                <div className="footer-right-pane">
                <form onSubmit={handleSubmit} method="POST">

                        <fieldset>
                        <div className="name-and-phone">
                            <label htmlFor="yourName">
                            Enter Name:
                            <input
                                id="yourName"
                                name="yourName"
                                type="text"
                                placeholder="Name"
                                value={formData.yourName}
                                onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                            />
                            {errors.yourName && <p className="error-message">{errors.yourName}</p>}
                            </label>

                            <label htmlFor="phoneNumber">
                            Phone Number:
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                placeholder="Phone"
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            />
                            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
                            </label>

                            <label htmlFor="email">
                            Email Address:
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                            </label>
                        </div>

                        <label htmlFor="message">
                            Message:
                            <textarea
                            id="message"
                            name="message"
                            rows="4"
                            cols="10"
                            placeholder="Message us..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                            {errors.message && <p className="error-message">{errors.message}</p>}
                        </label>
                        </fieldset>

                        <input
                        type="submit"
                        value={loading ? "Submitting..." : "Submit"}
                        name="send-message"
                        className="submit-btn"
                        disabled={loading}
                        />
                    </form>

                </div>
            </div>
            <div className="footer-copyright">

            <p>&copy; {currentTime} EMM (Pty) Ltd</p>
            <p style={{textDecoration: "underline"}}> <a href="https://www.aavenagency.co.za" target='_blank'>Aaven Agency   </a></p>
            </div>

        </div>
        </>
    )
}
export default Footer