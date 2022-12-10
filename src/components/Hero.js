import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useModalContext } from '../context/modal_context'
import Contact from './Contact'
import Article from './Article'
import Filler from './Filler'
import Section from './Section'
import { Footer } from '.'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const Hero = () => {
 const { openModal } = useModalContext()

 const { isModalOpen, closeModal } = useModalContext()

 return (
  <Wrapper>
   <div className="content">
    <div className="image-holder">
     <img src="https://res.cloudinary.com/elpawl-llc/image/upload/v1657311447/lessin_law-logos_yddbqn.jpg"></img>
     <Button className='contactBtn' variant="contained" onClick={openModal} style={{ margin: '5rem' }}>
      Contact us today
     </Button>
    </div>
   </div>
   <div
    className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}
   >
    <div className="modal-container">
     <button className="close-modal-btn" onClick={closeModal}>
      <FaWindowClose
       style={{ position: 'relative', zIndex: '1', top: '0', right: '0' }}
      ></FaWindowClose>
     </button>
     <Contact />
    </div>
   </div>

   {/* <Article />
   <Filler />
   <Section /> */}
  </Wrapper>
 )
}

export default Hero

const Wrapper = styled.section`
 align-items: center;
 width: 100%;
 height: 80vh;
 position: relative;
 /* background-color: rgb(20, 39, 79); */

 .image-holder {
  display: grid;
  justify-content: center;
  align-items: center;

  width: 50vw;
  position: relative;
  top: 0;
  left: 0;
 }

 img {
  position: relative;

  object-fit: cover;
  top: 0;
  left: 0;
 }
 .contactBtn {
  position: absolute;
top: 0px;
  left: 20px;
  width: 40vw;


 }
 .submit-btn-1 {
  background: var(--clr-black);
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  cursor: pointer;
  transition: var(--transition);
  color: var(--clr-grey-9);
  position: absolute;
  bottom: 0;
  z-index: 1;
 }

 input {
  text-align: center;
  font-family: roboto;
 }
 .section-center {
  background-color: var(--clr-primary-1);
  transition: var(--transition);
 }
 .content {
  display: grid;
  justify-content: center;
  text-align: center;
  color: #fff;
  transition: var(--transition);
  width: 100%;
  p {
   color: #fff;
   font-size: 1.5rem;
   text-transform: capitalize;
  }
 }
 .contact-form {
  display: grid;
  justify-content: center;
  align-items: center;
 }

 .form-input,
 .submit-btn {
  border: 2px solid var(--clr-black);
  z-index: 1;
 }
 .form-input {
  color: var(--clr-black);
 }
 .form-input::placeholder {
  color: var(--clr-black);
  text-transform: capitalize;
 }

 .submit-btn:hover {
  color: var(--clr-white);
 }
 .btn {
  background: var(--clr-grey-5);
  color: var(--clr-bcg);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  border-color: transparent;
  text-transform: capitalize;
  transition: all 0.3s linear;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
 }

 .btn,
 .btn-white,
 .btn-primary {
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  color: var(--clr-font);
  border: 2px solid var(--clr-primary);
  padding: 0.45rem 0.8rem;
  display: inline-block;
  transition: var(--Transition);
  cursor: pointer;
  font-size: 0.8rem;

  border-radius: var(--mainBorderRadius);
  border-color: transparent;
 }
 .btn:hover {
  background: var(--clr-bcg);
  color: var(--clr-font);
 }

 .img-content {
  width: 100%;
 }

 @media (min-width: 576px) {
  img {
   width: 100vw;
   height: 50vh;
   padding: 1rem;
   margin-top: 6rem;
  }
  background-color: red;
 }
 @media only screen and (max-width: 600px) {
  background-color: orange;

  img {
   width: 100vw;
   height: 60vh;
   padding: 1rem;
   margin-top: 4rem;
  }
 }
 @media only screen and (min-width: 600px) {
  background-color: green;

  img {
   width: 100%;
   height: 40vh;
   margin-top: 5rem;
   left: 0px;
  }
 }

 @media only screen and (min-width: 768px) {
  img {
   width: 100%;
   height: 40vh;
   margin-top: 5rem;
   left: 0px;
  }
 }

 @media (min-width: 992px) {
  img {
   width: 100%;
   height: 40vh;
   margin-top: 5rem;
   left: 0px;
  }
 }
 @media (min-width: 1280px) {
  img {
   width: 100%;
   height: 40vh;
   margin-top: 5rem;
   left: 0px;
  }
 }
`
