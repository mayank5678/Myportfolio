import React from 'react'
import { useRef } from 'react'
import './Contact.css'
import LinkedIn from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import emailjs from '@emailjs/browser';


const  Contact=()=> {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5cdrtyx', 'template_j49x7qr', form.current, {
        publicKey: 'HExP4UFJrbFVjt_fa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact">
  <div id='social'>
<h1 className='socialTitle'>Socials</h1>
<p className='socialDesc'>Here you can connect with me on my social media</p>
<div className='socialImgs'>
<a href="#"><img src={LinkedIn} alt='LinkedIn' className='socialImg'/></a>
<a href="#"><img src={Github} alt='Github' className='socialImg'/></a>
<a href="#"><img src={Instagram} alt='Instagram' className='socialImg'/></a>
<a href="#"><img src={Facebook} alt='Facebook' className='socialImg'/></a>


</div>

  </div>
<div id='contactPage'>
<h1 className='contactTitle'>Contact</h1>
<span className='contactDesc'>Feel Free to Contact me</span>

<form className='contactForm' ref={form} onSubmit={sendEmail}>
    <input type="text" placeholder='Your Name' className='name'  name="from_name" required/>
    <input type="email" placeholder='Your Email' className='email' name="your_email" required/>
    <textarea className='msg' rows="5" placeholder='Your message' name="message" required></textarea>
    <button type="submit" value="Send" className='submitBtn' onClick={()=>{
      alert("Your form is Submitted")
    }}>Submit</button>

</form>

</div>

    </section>
  )
}

export default Contact