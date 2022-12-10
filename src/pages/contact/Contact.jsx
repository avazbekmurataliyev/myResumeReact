import React from 'react';
import './style.css';

export default function Contact() {
  return (
    
  <div className="container">
    <div className="inner">
      <div className="panel panel-left">
        <div className="panel-content">
          <div className="image-background">
          </div>
        </div>
      </div>
      <div className="panel panel-right">
        <div className="panel-content">
          <form className="form">
            <h1> Bog`lanish uchun ma'lumotlaringizni qoldiring </h1>
            <div className="group">      
              <input type="text" required />
              <span className="highlight"></span>
              <label>Your name</label>
            </div>
            <div className="group">      
              <input type="text" required />
              <span className="highlight"></span>
              <label>Your email</label>
            </div>
            <button type='submit' className='send-btn'> Yuborish </button> 
          </form>
        </div>
      </div>
    </div>
    <div className='mobile'>
    <form className="mobile-form">
  <h2 className='mobile-h2'>Bog`lanish uchun </h2>
  <input type="text" placeholder="Ismingiz ? "/>
  <input type="email" placeholder="Email ..."/>
  <button className='mobile-btn'> Yuborish </button>
</form>
    </div>
  </div>
  )
}
