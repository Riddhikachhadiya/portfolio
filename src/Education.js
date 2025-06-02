import React from 'react'
import './Education.css'
import sankul from './img/hqdefault.jpg'
import sarvodaya from './img/images.png'
import it from './img/1676651882157.jpg'
import { Link } from 'react-router-dom'

const Education = () => {
  return (
    <div>
      <div className='SCHOOL'>
        <p>SCHOOL AND BACHELOR</p>
        <p><b>Education</b></p>
      </div>
        <div className='prsankul'>
          <div className='sankul'>
            <img src={sankul} alt="sankul" className='sankulimg' />
            <p>Higher Secondary School Education</p>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='icon'>
                <path fill="#111212" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <p> PLACE :SMT. SHANTABEN HARIBHAI GAJERA SHAIKSHANIK SANKUL Chakkargadh Road,
                <br /> Amreli</p>
              <Link to='https://www.lptshgsankulamreli.net/'>
                <button className="addd1">ADMISSION</button>
              </Link>
            </div>
          </div>
          <div className='sankul'>
            <img src={sarvodaya} alt="sarvodaya" className='sankulimg' />
            <p>reguler Bsc IT of Computer Applications</p>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='icon'>
                <path fill="#111212" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <p>B/H. P.D.M. College Campus, Gondal Road,
                <br />Rajkot-360004.</p>
              <Link to='http://www.sarvodayacollege.org/contact'>
                <button className="addd1">ADMISSION</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='prsankul'>
          <div className='sankul'>
            <img src={it} alt="it" />
            <p>Currently I do react js  Developer Course</p>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='icon'>
                <path fill="#111212" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <p>Dream Spot IT Academy
                <br />Rajkot, Gujarat</p>
              <Link to="https://dreamspotacademy.com/">
                <button className="addd1">ADMISSION</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Education
