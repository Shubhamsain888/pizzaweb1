import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';
function About() {
  return (
    <div className='about'>
        <div 
        className='aboutTop'
        style={{backgroundImage:`url(${MultiplePizzas})`}}
        ></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid accusantium, ut quos ratione id impedit tenetur omnis laudantium sit, suscipit dolores, nihil praesentium molestias autem ipsa excepturi vitae reiciendis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eaque deserunt vero saepe perspiciatis, animi voluptate sed odit corrupti iusto voluptatum sunt impedit optio. Doloremque, earum! Praesentium rerum alias dolorum.</p>
        </div>

        
    </div>
  )
}

export default About;
