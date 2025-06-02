// import React from 'react'
// import './contact.css'
// import contact from './img/best-contact-us-pages-2.png'

// const Contact = () => {
//   return (
//     <div>
//       <div className='contact'>
//         <p>Contact</p>
//         <p><b>Contact With Me</b></p>
//       </div>
//       <div className='React'>
//         <img src={contact} alt="contact" className='contact' />
//         <p>~ Riddhi Kachhadiya</p>
//         <p>React Js Developer</p>
//         <p>I'm always excited to connect with fellow developers,
//           potential collaborators, and anyone interested in my
//           work. Feel free to reach out to me via the following
//           channels:</p>
//         <div>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='icon1'>
//             <path fill="#141414" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
//           </svg>
//           <p>+91 9913221036</p>
//         </div>
//       </div>
//       <div className='your'>
//         <label htmlFor="fname">YOur Name :</label><br />
//         <input type="text" name="fname" id="fname" />
//         <label htmlFor="number">Phone Number :</label><br />
//         <input type="number" name="number" id="number" />
//         <label htmlFor="SUBJECT">SUBJECT :</label><br />
//         <input type="text" name="fname" id="fname" />
//         <label htmlFor="EMAIL">EMAIL :</label><br />
//         <input type="email" name="email" id="email" />
//         <label htmlFor="YOUR MESSAGE">YOUR MESSAGE :</label>
//         <input type="text" name="fname" id="fname" />
//         <button type="button">SEND MESSAGE</button>
//       </div>
//     </div>
//   )
// }

// export default Contact


import React from 'react';
import './contact.css';
import contactImg from './img/best-contact-us-pages-2.png';

const Contact = () => {
  return (
    <div>
      <div className='contact-header'>
        <p>Contact</p>
        <p><b>Contact With Me</b></p>
      </div>
      <div className='contact-info'>
        <img src={contactImg} alt="contact" className='contact-image' />
        <span className='riiddhi1'> <b>~ Riddhi Kachhadiya</b></span>
        <p>React Js Developer</p>
        <p>
          I'm always excited to connect with fellow developers,
          potential collaborators, and anyone interested in my
          work. Feel free to reach out to me via the following
          channels:
        </p>
        <div className='contact-phone'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='icon1'>
            <path fill="#141414" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>
          <p>+91 9913221036</p>
        </div>
      </div>
      <form className='contact-form'>
        <label htmlFor="name">Your Name :</label><br />
        <input type="text" name="name" id="name" /><br />

        <label htmlFor="phone">Phone Number :</label><br />
        <input type="number" name="phone" id="phone" /><br />

        <label htmlFor="subject">Subject :</label><br />
        <input type="text" name="subject" id="subject" /><br />

        <label htmlFor="email">Email :</label><br />
        <input type="email" name="email" id="email" /><br />

        <label htmlFor="message">Your Message :</label><br />
        <textarea name="message" id="message" rows="4"></textarea><br />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
