import React from 'react'
import './blog.css'
import Proficient from './img/radowan-nakif-rehan-cYyqhdbJ9TI-unsplash-1.webp';
import journey from './img/Taazaa-Blog-Images-1020-x-570-px-9.jpg'
import full from './img/Computer science vs software engineering.jpg';
import vdn from './img/Screenshot 2025-05-27 151719.jpg'
import todolist from './img/Screenshot 2025-05-28 115934.jpg'
import img from './img/image.png'
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className='mainVisit'>
      <div className='Visit'>
        <p>Visit my blog and keep your feedback</p>
        <p><b>My Blog</b></p>
      </div>
      <div className='mainProficient'>
        <div className='Proficient'>
          <img src={Proficient} alt="Proficient" />
          <p>"Proficient in multiple coding languages including <b>HTML, CSS, BOOTSTRAP, JAVASCRIPT, AND REACT</b>
            Focused on creating dynamic and responsive web applications. Passionate about using frameworks to streamline development and enhance user experience."</p>
        </div>
        <div className='Proficient'>
          <img src={journey} alt="journey" />
          <p>"My journey in react js development is driven by a passion for learning and a commitment to excellence, reflected in every line of code I write."</p>
        </div>
      </div>
      <div className='mainProficient'>
        <div className='Proficient'>
          <img src={full} alt="full" />
          <p>"As a react js developer, I strive to combine creativity with functionality, ensuring each project is both visually stunning and user-friendly."</p>
        </div>
        <div className='Proficient'>
          <img src={vdn} alt="vdn" />
          <p>A website where the content is fixed and does not change based on user interaction is called a Static Website.</p>
          <p>HTML</p>
          <p>CSS</p>
        </div>
      </div>
      <div className='mainProficient'>
        <div className='Proficient'>
          <Link to='https://golden-shortbread-2f0c27.netlify.app/'>
            <img src={todolist} alt="todolist" />
          </Link>
          <p><b>To-Do List</b></p>
          <p>Add in functionality and new task Add in save, edit, delete</p>
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
        </div>
        <div className='Proficient'>

          <img src={img} alt="img" />
          <p><b>Manba Finaserve Live Project</b></p>
          <p>"It’s an interactive and visually appealing platform, demonstrating proficiency in React development, CSS, and responsive web design."</p>
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASRIPT</span>
          <span>REACT</span>
        </div>
      </div>
    </div>
  )
}

export default Blog
