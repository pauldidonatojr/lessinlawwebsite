import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'


const ContactUs = () => {
  return (
    <Wrapper>
      <Header />

      <div className='dataHolder'>


        <div className='backimage'>
          <img src='/pen.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover' }}></img>
        </div>

        <div className='transparentBackground'></div>
        <div className='header'>
              Contact Us
            </div>

        <div className='card'>
        <div class="background">
          <div class="container">
            <div class="screen">
              <div class="screen-body">
                <div class="screen-body-item left">
                  <div class="app-contact">CONTACT INFO : +62 81 314 928 595</div>
                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="NAME"/>
                    </div>
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="EMAIL"/>
                    </div>
                    <div class="app-form-group">
                      <input class="app-form-control" placeholder="CONTACT NO"/>
                    </div>
                    <div class="app-form-group message">
                      <input class="app-form-control" placeholder="MESSAGE"/>
                    </div>
                    <div class="app-form-group buttons">
                      <button class="app-form-button">SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </Wrapper>
  )
}


export default ContactUs

const Wrapper = styled.section`
 height: 100vh;
 width: 100%;
 
 
 .dataHolder{
    height: 80vh;
    width: 100%;
  }

.backimage{
  position: absolute;
  z-index : -1;
  height: 70vh;
  width: 100%;
}
 
.transparentBackground{
  width: 100%;
  height: 70vh;
  background-color: black;
  opacity: 0.3;
  position: absolute;
}


.header{
  height: 10%;
  width: 100%;
  position: relative;
  display: grid;
  place-content: center;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
 }

 .card{
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
 }
 .cardInner{
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: aliceblue;
 }

 .background {
  display: flex;
  min-height: 100vh;
}

.container {
  flex: 0 1 700px;
  margin: auto;
  padding: 10px;
}

.screen {
  position: relative;
  background: #3e3e3e;
  border-radius: 15px;
}

.screen:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
  z-index: -1;
}

.screen-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #4d4d4f;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.screen-header-left {
  margin-right: auto;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
}

.screen-header-button.close {
  background: #ed1c6f;
}

.screen-header-button.maximize {
  background: #e8e925;
}

.screen-header-button.minimize {
  background: #74c54f;
}

.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #ea1d6f;
  font-size: 26px;
}

.app-title:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: #ea1d6f;
}

.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: #888;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color .2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}

.app-form-button {
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}

.app-form-button:hover {
  color: brown;
  font-weight: bold;
}

.credits {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #ffa4bd;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
  font-weight: normal;
}

.credits-link {
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}

.dribbble {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}

@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

  @media only screen and (max-width: 600px) {
    height: 100vh;
    width: 100%;

  .dataHolder{
    height: 70vh;
    width: 100%;
  }

  .transparentBackground{
    width: 100%;
    height: 70vh;
    background-color: black;
    opacity: 0.8;
    position: absolute;
}

.screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
  }
`

