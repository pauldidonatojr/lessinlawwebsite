import main from '../assets/images/main.svg'
// import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Landing = () => {
 return (
  <Wrapper>
   {/* <nav>
    <Logo />
   </nav> */}

   <div className="container page ">
    <div className="info">
     <h1 style={{fontSize: '3rem'}}>
      Lessin <span>Lessin</span>
     </h1>
     <div className="bio">
      <p>
       Welcome to the website of Jeffrey R. Lessin, Personal Injury Lawyer. Our
       firm is proud to serve the greater Philadelphia community with legal
       counsel on all kinds of civil rights cases as well as slip and falls,
       motor vehicle accidents, premises liability, and product liability. We
       understand that suffering an injury can be a traumatic and costly
       experience. Our team of dedicated attorneys is committed to ensuring that
       our clients receive the justice and compensation they deserve.
      </p>
     </div>

     <div className="btn-groups">
      <Link to="/register" className="btn btn-hero">
       Are you a new client?
      </Link>
      <Link to="/home" className="btn btn-hero">
       Are you a current client?
      </Link>
      <Link to="/register" className="btn btn-hero">
       Enter to view home page
      </Link>
     </div>
    </div>
   </div>
  </Wrapper>
 )
}


const Wrapper = styled.main`
 height: 110vh;

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
 .btn-groups {
  display: grid;
  text-align: center;
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
   font-size: 2rem;
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
   margin-top: 6rem;
   background-color: var(--white);
   border-radius: 3%;
   transition: var(--transition);
   box-shadow: var(--shadow-3);
  }
  .bio {
   transition: var(--transition);
   font-size: 1.2rem;
   height: 400px;
   width: 350px;
  }
  .btn-groups {
   padding: 2rem;
   display: grid;
   grid-gap: 2rem;
   text-align: center;
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
   font-size: 2rem;
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
