import React from 'react'
import {Menu} from './Menu';
import simg from '../components/image/checkmark.png';

export function Skills() {
  return (
   <>
   <Menu/>
  

   <section class="my-skills" id="skills">
        <h2 class="section__title section__title--skills">Skills & Technologies</h2>
        <div class="experience-details-container">
            <div class="about-containers">
              <div class="details-container">
                <h2 class="experience-sub-title">Frontend Development</h2>
                <div class="article-container">
                  <article>
                    <img
                      src={simg}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>HTML</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={simg}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>CSS</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={simg}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>JavaScript</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={simg}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>React.js</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                    
                </div>
              </div>
              <div class="details-container">
                <h2 class="experience-sub-title">Other Skills</h2>
                <div class="article-container">
                  <article>
                    <img
                      src={simg}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Python</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={simg}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Git</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={simg}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>c++</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img
                      src={simg}
                      alt="Experience icon"
                      class="icon"
                    />
                    <div>
                      <h3>Linux</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  
                </div>
              </div>
            </div>
            
        </div>

        
    </section>

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
