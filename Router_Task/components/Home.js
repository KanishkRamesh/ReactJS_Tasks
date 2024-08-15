import React from 'react'
import {Menu} from './Menu';
import himg from '../components/image/1st image cpy.jpg'


export function Home() {
  return (
    <>
    <Menu/>
    <div className='bg1'>
      <section class="intro" id="home">
        <h1 class="section__title section__title--intro">
            Hi, I'm <strong>Kanishk R</strong> Frontend-developer
        </h1>
        <p class="section__subtitle section__subtitle--intro">CS Student</p>
        <img src={himg} id="img2" alt="a picture of Joseph Musenge smiling" class="intro__img"/>
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
