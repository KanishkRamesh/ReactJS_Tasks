import React from 'react'
import {Menu} from './Menu';
import aimg from '../components/image/2nd image.jpg';

export function About() {
  return (
   <>
   <Menu/>
   
    <div className='bg1'>
   <section class="about-me" id="about">
        <h2 class="section__title section__title--about">About Me</h2>
        <p class="section__subtitle section__subtitle--about"></p>

        <div class="about-me__body">
            <p>
                Hello Everyone , I'm KANISHK R currenty I'm Studing B sc Computer Science at K G College of arts & science with a passion for exploring the vast world of 
                software development. I'm on an exciting journey of discovery and growth in the tech industry, 
                and I'm thrilled to share a glimpse of it with you.
            </p>
            <p>
                As I embark on this journey, I have a keen interest in several areas of technology, including full-stack development 
                and game development. I'm driven by a desire to understand the intricacies of building robust and innovative 
                software solutions that can make a real impact. Whether it's crafting a user-friendly web application or uncovering 
                insights from data, I thrive on the challenges and opportunities that the software development field presents.
            </p>
        </div>

        <img  src={aimg} id="img2" alt="Joseph standing against a wall" class="about-me__img"/>
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
