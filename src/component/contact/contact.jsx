import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'  

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through our contact form or find contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community</p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@testing.com</li>
          <li><img src={phone_icon} alt="" />+234094846473974</li>
          <li><img src={location_icon} alt="" />88 Long beach drive, Cambridge <br/> MA 01238, United Kingdom</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Type your message here...' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact
