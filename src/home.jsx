import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import riddhi from './img/ChatGPT Image May 28, 2025, 11_32_37 AM.png'

const Home = () => {
  return (
    <div className='profile-section '>
      <div>
        <div className='kachhadiyariddhi'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='user'>
            <path fill="#0f0f10" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" /></svg>
          <span><b>Hii, I'm</b></span>
          <span className='rii'><b>Riddhi Kachhadiya</b></span>
          <p>"Innovative react js  developer dedicated to crafting responsive and engaging websites."</p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="user">
              <path fill="#0f0f10"
                d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" />
            </svg>
            <p>React Js</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="user">
              <path fill="#0f0f10"
                d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
            </svg>
            <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className='gmailriddhi'>Kachhadiyariddhi01@gmail.com</Link>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="user">
              <path fill="#0f0f10"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <p>Rajkot, Gujarat 360001</p>
          </div>
        </div>
        <div className='Download'>
          <p>Download my curriculum vitae:</p>
          <a href="/Kachhadiya Riddhi.pdf" download='Kachhadiya Riddhi'>
            <button >DOWNLOAD CV</button>
          </a>
          <Link to="contact">CONTACT ME</Link>
        </div>
      </div>
      <div className="profile-image">
        <img src={riddhi} alt="riddhi" className='riddhi' />
      </div>
    </div>
  )
}

export default Home
