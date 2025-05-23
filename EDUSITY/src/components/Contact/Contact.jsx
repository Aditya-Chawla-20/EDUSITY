import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phone_icon from '../../assets/edusity_assets/phone-icon.png'
import location_icon from '../../assets/edusity_assets/location-icon.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "21ed0077-e41f-4419-a393-7f03c7d290a3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        console.log("Success", data);
      setResult("Form Submitted Successfully" + data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, explicabo!</p>
            <ul>
                <li><img src={mail_icon} alt="" />abc@gmail.com</li>
                <li><img src={phone_icon} alt="" />1234567890</li>
                <li><img src={location_icon} alt="" />abc ambala</li>
            </ul>
        </div> 
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label >Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Phone Number' required/>
               <label >Write your messages here</label>
               <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
               <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact