import main from '../assets/images/main.svg'
// import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { useModalContext } from '../context/modal_context'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { heroData } from '../utils/data.js'
import Button from '@mui/material/Button'
import { FaWindowClose } from 'react-icons/fa'
import Contact from '../components/Contact.js'

const Landing = () => {
 const [data, setData] = useState(heroData)
 const [index, setIndex] = useState(0)
 const { openModal } = useModalContext()

 const { isModalOpen, closeModal } = useModalContext()
 useEffect(() => {
  const lastIndex = data.length - 1
  if (index < 0) {
   setIndex(lastIndex)
  }
  if (index > lastIndex) {
   setIndex(0)
  }
 }, [index, data])

 useEffect(() => {
  let slider = setInterval(() => {
   setIndex(index + 1)
  }, 8000)
  return () => {
   clearInterval(slider)
  }
 }, [index])

 return (
  <Wrapper>
   {/* <nav>
    <Logo />
   </nav> */}

   <div className="container page ">
    <div className="info">
     <h1 style={{ fontSize: '3rem' }}>
      Lessin <span>Lessin</span>
     </h1>
     <div className="bio">
      {data.map((info, infoIndex) => {
       const { id, text } = info
       let position = 'nextSlide'
       if (infoIndex === index) {
        position = 'activeSlide'
       }
       if (
        infoIndex === index - 1 ||
        (index === 0 && infoIndex === data.length - 1)
       ) {
        position = 'lastSlide'
       }

       return (
        <div>
         <article className={position} key={id}>
          <i>
           {' '}
           <p className="text">{text}</p>
          </i>
         </article>
        </div>
       )
      })}
      {/* <p>
       <i>
        {' '}
        <b>
         {' '}
         Welcome to the website of Jeffrey R. Lessin, Personal Injury Lawyer.
         Our firm is proud to serve the greater Philadelphia community with
         legal counsel on all kinds of civil rights cases as well as slip and
         falls, motor vehicle accidents, premises liability, and product
         liability. We understand that suffering an injury can be a traumatic
         and costly experience. Our team of dedicated attorneys is committed to
         ensuring that our clients receive the justice and compensation they
         deserve. To learn more click <Link to="/home"> here.</Link>
        </b>{' '}
       </i>{' '}
        To learn more click <Link to="/home"> here.</Link>
      </p> */}

      <div className="btn-groups">
       <Button variant="contained" onClick={openModal} className="btn btn-hero">
        new client click here
       </Button>{' '}
       <Button variant="contained" className="btn btn-hero">
        current client click here
       </Button>
       <Button variant="contained" className="btn btn-hero">
        click here to view our website
       </Button>{' '}
      </div>
      <div
       className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
       }`}
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
     </div>
     {/*
     <div className="btn-groups">
      <Button variant="contained" onClick={openModal} className="btn btn-hero">
       new client click here
      </Button>{' '}
      <Button variant="contained" className="btn btn-hero">
       current client click here
      </Button>
      <Button variant="contained" className="btn btn-hero">
       click here to view our website
      </Button>{' '}
     </div> */}
    </div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.main`
 height: 100vh;

 .container {
  z-index: 1;
 }
 nav {
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
 }

 .page {
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .info {
  text-align: center;
 }
 .bio {
  transition: var(--transition);
 }

 h1 {
  font-weight: 700;
  span {
   color: var(--primary-500);
  }
 }
 p {
  color: var(--grey-600);
 }
 .btn-groups {
  display: flex;

  flex-direction: column;
 }

 article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: var(--transition);
 }
 article.activeSlide {
  opacity: 1;
  transform: translateX(0);
 }
 article.lastSlide {
  transform: translateX(-100%);
 }
 article.nextSlide {
  transform: translateX(100%);
 }

 @media (min-width: 576px) {
  .page {
   min-height: calc(100vh - var(--nav-height));
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .info {
   padding: 10rem;
   background-color: red;
  }
  .bio {
   background-color: hotpink;
   font-size: 2rem;
   transition: var(--transition);
  }
  .btn-groups {
   background-color: purple;
   padding: 2rem;
   display: grid;
   grid-gap: 2rem;
   text-align: center;
  }

  .btn-hero {
   font-size: 1.5rem;
  }
 }

 @media only screen and (max-width: 600px) {
  .container {
  }
  .page {
   min-height: calc(100vh - var(--nav-height));
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .info {
   padding: 0.5rem;
   margin-top: 5rem;
   background-color: var(--white);
   border-radius: 3%;
   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 650px;
   width: 375px;
   margin-top: 7rem;
  }
  .bio {
   transition: var(--transition);
   font-size: 1rem;

   height: 500px;
   width: 350px;
   max-width: 800px;
   font-weight: 500px;
   margin: 0 auto;
   text-align: center;
   position: relative;
   display: grid;
   overflow: hidden;
   justify-content: center;
  }
  .btn-groups {
   display: grid;
   grid-gap: 1rem;
   text-align: center;
   height: 10px;
   margin-top: 15rem;
   margin-bottom: 8rem;
  }
  .btn-hero {
   font-size: 1rem;
  }
 }
 @media only screen and (min-width: 600px) {
  .page {
   min-height: calc(100vh - var(--nav-height));
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .info {
   padding: 10rem;
   background-color: red;
  }
  .bio {
   background-color: darkblue;
   font-size: 2rem;
   transition: var(--transition);
  }
  .btn-groups {
   background-color: purple;
   padding: 2rem;
   display: grid;
   grid-gap: 2rem;
   text-align: center;
  }

  .btn-hero {
   font-size: 1.5rem;
  }
 }

 @media only screen and (min-width: 768px) {
  .page {
   min-height: calc(100vh - var(--nav-height));
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .info {
   padding: 10rem;
   background-color: red;
  }
  .bio {
   background-color: hotpink;
   font-size: 2rem;
   transition: var(--transition);
  }
  .btn-groups {
   background-color: purple;
   padding: 2rem;
   display: grid;
   grid-gap: 2rem;
   text-align: center;
  }

  .btn-hero {
   font-size: 2rem;
  }
 }

 @media (min-width: 992px) {
  .page {
   min-height: calc(100vh - var(--nav-height));
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .info {
   padding: 10rem;
   background-color: red;
  }
  .bio {
   background-color: hotpink;
   font-size: 2rem;
   transition: var(--transition);
  }
  .btn-groups {
   background-color: purple;
   padding: 2rem;
   display: grid;
   grid-gap: 2rem;
   text-align: center;
  }

  .btn-hero {
   font-size: 2rem;
  }
  .page {
   grid-template-columns: 1fr 1fr;
   column-gap: 3rem;
  }
  .main-img {
   display: block;
  }
 }
 @media (min-width: 1280px) {
  .page {
   min-height: calc(100vh - var(--nav-height));
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .info {
   padding: 10rem;
   background-color: red;
  }
  .bio {
   background-color: hotpink;
   font-size: 2rem;
   transition: var(--transition);
  }
  .btn-groups {
   background-color: purple;
   padding: 2rem;
   display: grid;
   grid-gap: 2rem;
   text-align: center;
  }

  .btn-hero {
   font-size: 2rem;
  }
 }
`
export default Landing
