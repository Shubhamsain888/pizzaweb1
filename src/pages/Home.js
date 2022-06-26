import React from 'react'
import { Link } from 'react-router-dom';
import PizzaImg from '../assets/pizza.jpeg';
import '../styles/Home.css';
// import "../styles/Navbar.css";

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${PizzaImg})`}}>
      <div className="headerContainer"
      
      >
        <h1>Shubham's Pizza</h1>
        <p>Pizza To Fit Any Taste</p>
        <Link to='/menu'>
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
