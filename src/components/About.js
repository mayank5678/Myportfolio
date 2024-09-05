import React from 'react'
import './About.css'
import HTML from '../assets/HTML5_Badge.svg'
import CSS from '../assets/css-3.svg'
import BOOTSTRAP from '../assets/bootstrap.png'
import JS from '../assets/javascript.svg'
import REAC from '../assets/react.svg'



const About=()=> {
  return (
    <>
    <section id="about">
   <span className='aboutTitle'>What I Know</span>
   <span className='aboutDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.I have a strong understanding of design and a keen eye for detail.I am proficient in HTML,CSS and JavaScript</span>
   <div className='aboutBars'>
<div className='aboutBar'>
<img src={HTML} alt='' className='aboutBarImg'/>
<div className='aboutBarText'>
<h2>HTML</h2>
<p>HyperText Markup Language</p>


</div>
</div>

<div className='aboutBar'>
<img src={CSS} alt='' className='aboutBarImg'/>
<div className='aboutBarText'>
<h2>CSS</h2>
<p>Cascading Style Sheet</p>


</div>
</div>
<div className='aboutBar'>
<img src={BOOTSTRAP} alt='' className='aboutBarImg'/>
<div className='aboutBarText'>
<h2>Bootstrap</h2>
<p>Bootstrap</p>


</div>
</div>
<div className='aboutBar'>
<img src={JS} alt='' className='aboutBarImg'/>
<div className='aboutBarText'>
<h2>JS</h2>
<p>Javascript</p>


</div>
</div>
<div className='aboutBar'>
<img src={REAC} alt='' className='aboutBarImg'/>
<div className='aboutBarText'>
<h2>React</h2>
<p>React.Js</p>


</div>
</div>
   </div>

    </section>
    
    </>
  )
}

export default About