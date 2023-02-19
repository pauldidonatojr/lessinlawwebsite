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
 const [currentImage, setCurrentImage] = useState(0)
 const { isModalOpen, closeModal } = useModalContext()
 const backgroundImages = [
  'https://res.cloudinary.com/elpawl-llc/image/upload/v1675866967/skyline_fhftgi.jpg',
  'https://res.cloudinary.com/elpawl-llc/image/upload/v1676508506/Bok-shot_-700x400_fzdjwe.jpg',
  'https://res.cloudinary.com/elpawl-llc/image/upload/v1676508506/philadelphia-70850__340_ucqyxx.jpg',
  'https://res.cloudinary.com/elpawl-llc/image/upload/v1676508521/pexels-filippo-bergamaschi-2767737_fidye2.jpg',
 ]

 const backgroundImageStyle = {
  backgroundImage: `url(${backgroundImages[currentImage]})`,
 }
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
  const intervalId = setInterval(() => {
   setCurrentImage((currentImage + 1) % backgroundImages.length)
  }, 5000)

  return () => clearInterval(intervalId)
 }, [currentImage, backgroundImages.length])

 useEffect(() => {
  let slider = setInterval(() => {
   setIndex(index + 1)
  }, 8000)
  return () => {
   clearInterval(slider)
  }
 }, [index])
 function Popup() {
  const [showPopup, setShowPopup] = useState(true)

  useEffect(() => {
   const timer = setTimeout(() => {
    setShowPopup(false)
   }, 15000) // Change the duration as per your requirement
   return () => clearTimeout(timer)
  }, [])

  return showPopup ? (
   <div className="popup">
    <h2> Live Chat </h2>
    <p>Click the button to chat with a paralegal</p>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
     <button onClick={() => setShowPopup(false)}>Chat</button>
     <button onClick={() => setShowPopup(false)}>Close</button>
    </div>
   </div>
  ) : null
 }
 return (
  <Wrapper className="background-images" style={backgroundImageStyle}>
   {/* <nav>
    <Logo />
   </nav> */}
    <div className="app">
    <Popup />
   </div>
   <div className="container page ">
    <div className="info">
     {/* <div className="navbar"> Information </div> */}

     <h1 style={{ fontSize: '3rem' }}>
      Lessin <span>Law</span>
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
        <div className="articleDiv">
         <article className={position} key={id}>
          <i>
           {' '}
           <p className="text">{text}</p>
          </i>
         </article>
        </div>
       )
      })}

      <div className="btn-groups">
       {/* <Button variant="contained" onClick={openModal} className="btn btn-hero">
        enter
       </Button> */}
       {/* <Button variant="contained" className="btn btn-hero">
        <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
         current client click here
        </Link>
       </Button> */}
       <Button variant="contained" className="btn btn-hero">
        <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>
         {' '}
         enter
        </Link>
       </Button>
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
  </Wrapper>
 )
}

const Wrapper = styled.main`
 /* background-repeat: no-repeat; */
 /* background-size: cover;
 background-position: center; */

 background-size: cover;
 background-position: center;
 transition: background-image 1s ease-in-out;
 height: 110vh;
 display: grid;
 align-items: center;
 justify-content: center;
 .navbar {
  background-color: blue;
  width: 100%;
  height: 50px;
  margin-bottom: 2rem;
 }
 .popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); */
  z-index: 999;
 }

 .popup {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  z-index: 1000;
  pointer-events: auto;
 }

 .popup h2 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 24px;
 }

 .popup p {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 18px;
 }

 .popup button {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
 }

 .popup button:hover {
  background-color: #0062cc;
 }

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
  flex-direction: column;
  margin-top: 1rem;
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
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
 }

 article {
  margin-top: 2rem;
  position: absolute;
  top: 0;
  left: 0;

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

 @media only screen and (max-width: 600px) {
  .page {
   min-height: calc(110vh - var(--nav-height));
   border-radius: 4%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
  }

  article {
   border-radius: 2%;
  }
  .info {
   border-radius: 10%;
   background-color: whitesmoke;
   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 350px;
   width: 285px;
   margin-left: 0.75rem;
   margin-right: 0.5rem;
   h1 {
    margin-top: 1rem;
   }
  }
  .bio {
   transition: var(--transition);
   font-size: 0.65rem;

   height: 475px;
   width: 240px;
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
   margin-top: 12rem;
   margin-bottom: 15rem;
  }
  .btn-hero {
   font-size: 1rem;
  }
 }
 @media only screen and (min-width: 600px) {
  .container {
  }
  .page {
   /* min-height: calc(100vh - var(--nav-height)); */
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .info {
   padding: 2.75rem;

   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 650px;
   width: 455px;
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
   margin-top: 13rem;
   margin-bottom: 8rem;
  }
  .btn-hero {
   font-size: 1rem;
  }
 }

 @media only screen and (min-width: 768px) {
  .container {
  }
  .page {
   /* min-height: calc(100vh - var(--nav-height)); */
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .info {
   padding: 3rem;
   margin-top: 5rem;
   border-radius: 3%;
   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 675px;
   width: 495px;
   margin-top: 10rem;
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

 @media (min-width: 992px) {
  .container {
  }
  .page {
   /* min-height: calc(100vh - var(--nav-height)); */
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .info {
   padding: 3rem;
   margin-top: 5rem;
   border-radius: 3%;
   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 675px;
   width: 650px;
   margin-top: 10rem;
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
 @media (min-width: 1280px) {
  .container {
  }
  .page {
   /* min-height: calc(100vh - var(--nav-height)); */
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .info {
   padding: 3rem;
   margin-top: 5rem;
   border-radius: 3%;
   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 760px;
   width: 675px;
   margin-top: 10rem;
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
`

//  @media (min-width: 576px) {
//   .page {
//    /* min-height: calc(100vh - var(--nav-height)); */
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    margin-top: -3rem;
//   }
//   .info {
//    padding: 10rem;
//    background-color: red;
//   }
//   .bio {
//    font-size: 2rem;
//    transition: var(--transition);
//   }
//   .btn-groups {
//    padding: 2rem;
//    display: grid;

//    grid-gap: 2rem;
//    text-align: center;
//   }

//   .btn-hero {
//    font-size: 1.5rem;
//   }
//  }
export default Landing
