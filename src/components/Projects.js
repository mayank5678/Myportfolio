import React from 'react'
import './Projects.css'
import Banner from '../assets/project.jpg'

const Projects=()=> {
  return (
    <>
   <section id="project">
   <h2 className='projectTitle'>My Projects</h2>
   <span className='projectDesc'>Here are my projects  </span>
   <div className='project-item'>
    <div className='item-details'>
        <p className='P1'>Project-1</p>
        <p className='P2'>TechStack:-HTML and CSS</p>
      
    </div>
    <a href='http://www.google.com' target='blank'><img src={Banner} alt='Project-1' className='projectImg'/></a>
   </div>
   <div className='project-item'>
    <div className='item-details'>
        <p className='P1'>Project-2</p>
        <p className='P2'>TechStack:-HTML , CSS and JavaScript</p>
      
    </div>
    <a href='http://127.0.0.1:3000/index.html' target='blank'><img src={Banner} alt='Project-2' className='projectImg'/></a>
   </div>
   
   
   
   
   </section>
   
   </>
  )
}

export default Projects