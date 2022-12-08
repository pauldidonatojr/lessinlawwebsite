import React from 'react'
import styled from 'styled-components'
import { profiles } from '../utils/constants'

const Profiles = () => {
 return (
  <Wrapper>
   <div className="services-center">
    <div className="div1section">
     {' '}
     <img
      src="https://res.cloudinary.com/elpawl-llc/image/upload/v1657495467/Meet_the_Lawyers_dgcqnp.png

"
      className="logo1"
      alt="elpawl"
     />
    </div>
    <div className="div2section">
     {profiles.map((profile) => {
      const { id, icon, title, text, logo } = profile
      let section = ''
      if (id === 1) {
       section = 'section-center-1'
      }
      if (id === 2) {
       section = 'section-center-2'
      }
      if (id === 3) {
       section = 'section-center-3'
      }
      if (id === 4) {
       section = 'section-center-4'
      }
      return (
       <article key={id} className={section}>
        <img src={logo} className="logo" alt="logo" />
        <div className="box">
         {' '}
         <h3 className="title"> {title}</h3>{' '}
        </div>

        <div className="text">
         {' '}
         <p style={{ color: 'white' }}> {text} </p>
        </div>
       </article>
      )
     })}
    </div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.section`
 height: 345vh;
 padding: 1.5rem;

 .logo {
  width: 100%;
  display: block;
  object-fit: cover;
 }

 h4 {
  color: var(--clr-grey-8);
  font-weight: bold;
 }

 .title {
  font-weight: bold;
  color: white;
 }
 .box {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-transform: capitalize;
  font-size: 2.35rem;
  font-family: roboto;
 }

 .text {
  margin-bottom: 1.75rem;
  font-family: roboto;

  font-size: 1.35rem;
  p {
   color: white;
  }
 }
 p {
  margin-bottom: 0;
  line-height: 1.55;
  color: white;

  white-space: pre-line;
 }
 /* .section-center {
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: blue;
  padding: 7rem;
  margin-top: 5rem;
 } */
 .services-center {
  display: grid;
  grid-gap: 2rem;


  }

 .div1section {
  height: 20rem;

  display: grid;
  align-items: center;
  justify-content: center;

  .logo1 {
   width: 100%;
   display: block;
   object-fit: cover;

  }
 }
 .div2section {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 6rem;
 }
 .section-center-1 .text {
  padding: 1rem;
 }
 .section-center-4 .text {
  padding: 1rem;
 }
 .service,
 .section-center-1,
 .section-center-2,
 .section-center-3,
 .section-center-4 {
  background: var(--clr-grey-3);
  text-align: center;
  border-radius: var(--radius);
  display: grid;
  height: 555px;
  width: 300px;
  p {
   color: black;
  }
 }
 span {
  width: 2rem;
  height: 4rem;
  display: grid;
  margin: 0 auto;
  place-items: center;

  border-radius: 50%;
  background: var(--clr-grey-9);
  color: var(--clr-primary-1);
  svg {
   font-size: 2rem;
  }
 }
 @media (min-width: 576px) {
  /* .services-center {
   grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  } */
  .service,
  .section-center-1,
  .section-center-2,
  .section-center-3,
  .section-center-4 {
   height: 555px;
   width: 300px;
  }
 }
 @media only screen and (max-width: 600px) {
  img {
   width: 100%;
   height: 255px;
  }
  .service,
  .section-center-1,
  .section-center-2,
  .section-center-3,
  .section-center-4 {
   height: 575px;
   width: 355px;
  }
  .logo {
   height: 255px;
  }
  .logo1 {
   height: 355px;
  }
 }
 @media only screen and (min-width: 600px) {
  img {
   width: 100%;
   height: 255px;
  }
  .service,
  .section-center-1,
  .section-center-2,
  .section-center-3,
  .section-center-4 {
   height: 585px;
   width: 425px;
  }
  .logo {
   height: 275px;
  }
  .logo1 {
   height: 355px;
  }
 }
 @media only screen and (min-width: 768px) {
  img {
   width: 100%;
   height: 255px;
  }
  .service,
  .section-center-1,
  .section-center-2,
  .section-center-3,
  .section-center-4 {
   height: 625px;
   width: 425px;
  }
  .logo {
   height: 355px;
  }
 }
 @media (min-width: 992px) {
  img {
   width: 100%;
   height: 255px;
  }
  /* .header {
   display: grid;
   grid-template-columns: 1fr 1fr;
  } */
  .service,
  .section-center-1,
  .section-center-2,
  .section-center-3,
  .section-center-4 {
   height: 625px;
   width: 475px;
  }
  .logo {
   height: 355px;
  }
 }

 @media (min-width: 1280px) {
  img {
   width: 100%;
   height: 255px;
  }
  .service,
  .section-center-1,
  .section-center-2,
  .section-center-3,
  .section-center-4 {
   height: 625px;
   width: 525px;
  }
  .logo {
   height: 355px;
  }

  /* .section-center-1 {
   grid-column: 1/2;
   grid-row: 1/2;
  }
  .section-center-2 {
   grid-column: 2/3;
   grid-row: 1/2;
  }
  .section-center-3 {
   grid-column: 2/3;
   grid-row: 2/3;
  }
  .section-center-4 {
   grid-column: 1/2;
   grid-row: 2/3;
  }
  .section-center {
   transform: translateY(5rem);
   padding: 0.5rem;
   margin-bottom: 2rem;
  } */
 }
`
export default Profiles
