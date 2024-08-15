import React from 'react'
import {Menu} from './Menu';
import pimg1 from './image/1.multithreaded application in java.jpeg';
import pimg2 from './image/2.critical path analysis using Lucidchart.jpeg';
import pimg3 from './image/3.getting started with linux terminal.jpeg';
import pimg4 from './image/4.command line basics in linux.jpeg';
import pimg5 from './image/5.docker for absolute beginners.jpeg';
import pimg6 from './image/6.managing memory with c programming.jpeg';

export function Projects() {
  return (
    <>
    <Menu/>

    <div className='bg1'>
    <section class="my-work" id="projects">
        <h2 class="section__title">Certificates</h2>
        <p class="section__subtitle">Here are some of the projects I've worked on.</p>

        <div class="portfolios">
            <div class="portfolio__item">
                <div class="image">
                    <img src={pimg1} alt=""/>
                </div>
                <div class="hover-items">
                  <h3><strong>Certified At :</strong></h3>
                  <h3>Multithreaded Application In Java</h3> 
                </div>
            </div>
            <div class="portfolio__item">
                <div class="image">
                    <img src={pimg2}  alt=""/>
                </div>
                <div class="hover-items">
                  <h3><strong>Certified At :</strong></h3>
                  <h3>Critical Path Analysis Using Lucidchart</h3> 
                </div>
            </div>
            <div class="portfolio__item">
                <div class="image">
                  <img src={pimg3}  alt=""/>
                </div>
                <div class="hover-items">
                  <h3><strong>Certified At :</strong></h3>
                  <h3>Getting Started With Linux Terminal</h3> 
                </div>
            </div>
            <div class="portfolio__item">
                <div class="image">
                    <img src={pimg4}  alt=""/>
                </div>
                <div class="hover-items">
                  <h3><strong>Certified At :</strong></h3>
                  <h3>Command Line Basics In Linux</h3>                   
                </div>
            </div>
            
            <div class="portfolio__item">
              <div class="image">
                <img src={pimg5}  alt=""/>
              </div>
              <div class="hover-items">
                <h3><strong>Certified At :</strong></h3>
                <h3>Docker For Absolute Beginners</h3>                    
              </div>
            </div>
            
            <div class="portfolio__item">
              <div class="image">
                  <img src={pimg6}  alt=""/>
              </div>
              <div class="hover-items">
                <h3><strong>Certified At :</strong></h3>
                  <h3>Managing Memory With <br/> C Programming</h3>                   
              </div>
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
