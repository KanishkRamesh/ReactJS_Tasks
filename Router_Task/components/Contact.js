import React from 'react'
import {Menu} from './Menu';
import cimg1 from './image/email.png';
import cimg2 from './image/linkedin.png';

export function Contact() {
  return (
    <>
    <Menu/>

    <div className='bg1'>
        <section class="contact__me" id="contact">
        <h2 class="title">Contact Me</h2>
        <p class="section__text__p1">Let's connect. Get in Touch</p>
        <div class="contact-info-upper-container">
          <div class="contact-info-container">
            <img
              src={cimg1}
              alt="Email icon"
              class="icon contact-icon email-icon"
            />
            <p><a href="mailto:kanishkrameshdev@gmail.com" class="footer__link">kanishkrameshdev@gmail.com</a></p>
          </div>
          <div class="contact-info-container">
            <img
              src={cimg2}
              alt="LinkedIn icon"
              class="icon contact-icon"
            />
            <p><a href="https://www.linkedin.com/login" class="footer__link">LinkedIn</a></p>
          </div>
        </div>
    </section> 
    </div>

    <footer class="footer">
       
       <p>
           <span id="date">
           &copy; 2024  Kanishk R
           </span>
       </p>
   </footer>

    </>
  )
}
