import React from 'react';
import './style.css';
import MyPhoto from "./1.jpg";

export default function MyResume() {

  return (
    <div className='container'>
      
        <div className="about">
          <img className='myphoto' src={MyPhoto} alt="Mening rasmim" srcset="" />
          <span className="title">Avazbek Murataliyev </span>
        </div>
        {/* edit this */}
  <h2 class="sub-heading"> Skills </h2>
  <div class="skills">
    <p class="skill-name">HTML</p>
    <p class="skill-name">CSS</p>
    <p class="skill-name">JavaScript</p>
    <p class="skill-name">React.js</p>
    <p class="skill-name">Java OOP</p>
    <p class="skill-name">Spring MVC </p>
    <p class="skill-name">Spring boot </p>
    <p class="skill-name">PSQL</p>
    <p class="skill-name">MongoDB</p>
    <p class="skill-name">Fullstack Development</p>
    <p class="skill-name">Frontend Development</p>
    <p class="skill-name">API</p>
    <p class="skill-name">GIT</p>
    <p class="skill-name">Git Hub</p>
    <p class="skill-name">More</p>
  </div>



  <h2 class="sub-heading"> Shu kungacha ...</h2>

    <div class="timeline-container">
    <div class="card-container">
        <div class="card">
            <h1 class="card-title">2000 - 2002</h1>
            <p class="card-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Quam, rerum obcaecati. Fuga officiis at libero dolore. Necessitatibus numquam ipsum rem?</p>
        </div>
    </div>

    <div class="card-container">
        <div class="card">
            <h1 class="card-title">2000 - 2002</h1>
            <p class="card-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Quam, rerum obcaecati. Fuga officiis at libero dolore. Necessitatibus numquam ipsum rem?</p>
        </div>
    </div>
   
    </div>
    <div className="info">
      Qurilmangiz ekrani juda kichik . 
      veb saytning telefon uchun maxsus versiyasi ishlab chiqilmoqda
    </div>

</div>
  )
}
