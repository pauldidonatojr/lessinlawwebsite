import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useModalContext } from '../context/modal_context'
import Contact from './Contact'
import Article from './Article'
import Filler from './Filler'
import Section from './Section'
import Footer from './Footer'
import Header from './Header'


const ContactUs = () => {
    const { openModal } = useModalContext()

    const { isModalOpen, closeModal } = useModalContext()
    return (
        <Wrapper>
          <Header/>
            <div className='image-holder'>
                <img src='./pen.jpg' style={{ position: 'relative', width: '100%', height: '50vh', top: '0px', left: '0px', objectFit: 'cover' }}></img>
                <div
                    className='info-holder'
                >

                    <div className='article-holder'>
                        <h2 style={{ opacity: '1' }}> Contact Us </h2>
                    </div>
                </div>
            </div>

            <div className='form-holder'>

                <div class="form">
                    <div class="title">Welcome</div>
                    <div class="subtitle">Fill the form we will contact you</div>
                    <div class="input-container ic1">
                        <input id="firstname" class="input" type="text" placeholder=" " />
                        <div class="cut"></div>
                        <label for="firstname" class="placeholder">Name</label>
                    </div>
                    <div class="input-container ic2">
                        <input id="phone" class="input" type="text" placeholder=" " />
                        <div class="cut"></div>
                        <label for="phone" class="placeholder">Phone</label>
                    </div>
                    <div class="input-container ic2">
                        <input id="email" class="input" type="text" placeholder=" " />
                        <div class="cut cut-short"></div>
                        <label for="email" class="placeholder">Email</label>
                    </div>

                    <div class="input-container2">
                        <input id="message" class="input" type="text" placeholder=" " />
                        <div class="cut cut-short"></div>
                        <label for="message" class="placeholder">Message</label>
                    </div>

                    <button type="text" class="submit">submit</button>
                </div>
            </div>
            <Footer/>
        </Wrapper>
    )
}


export default ContactUs

const Wrapper = styled.section`
 height: 100vh;
 width: 100%;
 
 
 .image-holder{
    display: inline;
    justify-content: center;
    align-items: center; 
    width: 100%;
    height: auto;
    position: relative;
  }
  
  .info-holder{
    top: 0;
    display: grid;
    position: absolute;
    height: 50%;
    width: 100%;
    justify-content: center;
    place-content: center;
    align-items: center;
    border-radius: 25px;
    z-index: 1;
  }
  
  .article-holder{
      height: 100%;
      width: 100%;
      color: white;
      borderBottom: 2px solid #dadada;
      borderColor: 'white';
      opacity: 1;
      
  }

  .form-holder{
    display: grid;
    justify-content: center;
    align-items: center; 
    width: 100%;
    height: 120vh;
    position: relative;
  }


  .form {
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    height: auto;
    padding: 20px;
    width: 320px;
  }
  
  .title {
    color: #eee;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
  }
  
  .subtitle {
    color: #eee;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }
  
  .input-container {
    height: 50px;
    position: relative;
    width: 100%;
  }

  .input-container2 {
    height: 100px;
    position: relative;
    width: 100%;
    margin-top: 30px;
  }
  
  .ic1 {
    margin-top: 40px;
  }
  
  .ic2 {
    margin-top: 30px;
  }
  
  .input {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
  }
  
  .cut {
    background-color: #15172b;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76px;
  }
  
  .cut-short {
    width: 70px;
  }
  
  .input:focus ~ .cut,
  .input:not(:placeholder-shown) ~ .cut {
    transform: translateY(8px);
  }
  
  .placeholder {
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
  }
  
  .input:focus ~ .placeholder,
  .input:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }
  
  .input:not(:placeholder-shown) ~ .placeholder {
    color: #808097;
  }
  
  .input:focus ~ .placeholder {
    color: #dc2f55;
  }
  
  .submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 38px;
    // outline: 0;
    text-align: center;
    width: 100%;
  }
  
  .submit:active {
    background-color: #06b;
  }

  @media only screen and (max-width: 600px) {
  
  }
`

