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

const PracticeAreas = () => {
 const { openModal } = useModalContext()

 const { isModalOpen, closeModal } = useModalContext()
 
 return (
  <div>
  <Header />
  <Wrapper>
      <div className='backimage'>
        <img src='/Practice.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover' }}></img>
      </div>
      <div className='transparentBackground'></div>
        <div className='textHolder'>
        <div className='header'>
        Practice Areas
        </div>
        <div className='innerData'>Our attorneys are dedicated to helping people obtain compensation after experiencing violations of their constitutionally protected rights. Many of these cases are complex, involving multiple areas of constitutional law. At the law firm of Jeffrey R. Lessin & Associates, P.C., we have both the knowledge and the determination to pursue your case as far as necessary to obtain justice.</div>
        </div>

        <div className='cardsHolder'>

        <div className="sectionCenter">
          <article className="product-card">
              <img className="card-image" src='/pen.jpg' />
              <div className="overlay-product" />
              <div className="product-details">
                <header className='product-header'>
                  <h4 style={{ color: 'white' }}>Police Brutality</h4>
                </header>
                <div className='product-det'>You can do something about it. Police officers are not above the law.</div>
              </div>
            </article>
      </div>

      <div className="sectionCenter">
          <article className="product-card">
              <img className="card-image" src='/pen.jpg' />
              <div className="overlay-product" />
              <div className="product-details">
                <header className='product-header'>
                  <h4 style={{ color: 'white' }}>Wrongful Detainment</h4>
                </header>
                <div className='product-det'>If you have been wrongly accused and detained by a mall security guard or store manager, you have recourse.</div>
              </div>
            </article>
      </div>

      <div className="sectionCenter">
          <article className="product-card">
              <img className="card-image" src='/pen.jpg' />
              <div className="overlay-product" />
              <div className="product-details">
                <header className='product-header'>
                  <h4 style={{ color: 'white' }}>Excessive Foce</h4>
                </header>
                <div className='product-det'>If a police officer struck you while you were handcuffed, you have probably experienced excessive force, a term that applies whenever police use levels of force greater than is needed to control the situation.</div>
              </div>
            </article>
      </div>

      </div>


      <div className='cardsHolder'>

<div className="sectionCenter">
  <article className="product-card">
      <img className="card-image" src='/pen.jpg' />
      <div className="overlay-product" />
      <div className="product-details">
        <header className='product-header'>
          <h4 style={{ color: 'white' }}>False Imprisonment</h4>
        </header>
        <div className='product-det'>People arrested and put in jail for crimes they did not commit may be able to seek compensation.</div>
      </div>
    </article>
</div>

<div className="sectionCenter">
  <article className="product-card">
      <img className="card-image" src='/pen.jpg' />
      <div className="overlay-product" />
      <div className="product-details">
        <header className='product-header'>
          <h4 style={{ color: 'white' }}>False Arrest</h4>
        </header>
        <div className='product-det'>Police misconduct can involve either failing to act or taking wrongful action.</div>
      </div>
    </article>
</div>

<div className="sectionCenter">
  <article className="product-card">
      <img className="card-image" src='/pen.jpg' />
      <div className="overlay-product" />
      <div className="product-details">
        <header className='product-header'>
          <h4 style={{ color: 'white' }}>Illegal Seach and Seazures</h4>
        </header>
        <div className='product-det'>These cases often arise when police arrest an innocent person.</div>
      </div>
    </article>
</div>

</div>

<div className='cardsHolder'>

<div className="sectionCenter">
  <article className="product-card">
      <img className="card-image" src='/pen.jpg' />
      <div className="overlay-product" />
      <div className="product-details">
        <header className='product-header'>
          <h4 style={{ color: 'white' }}>Racial Profiling</h4>
        </header>
        <div className='product-det'> If police entered your house without a warrant or searched your car without probable cause, you may be able to file a claim for illegal search and seizure against the police department.</div>
      </div>
    </article>
</div>

<div className="sectionCenter">
  <article className="product-card">
      <img className="card-image" src='/pen.jpg' />
      <div className="overlay-product" />
      <div className="product-details">
        <header className='product-header'>
          <h4 style={{ color: 'white' }}>Prison Guard Misconduct</h4>
        </header>
        <div className='product-det'>Drivers stopped and searched without probable cause may be victims of racial or gender profiling.</div>
      </div>
    </article>
</div>

<div className="sectionCenter">
  <article className="product-card">
      <img className="card-image" src='/pen.jpg' />
      <div className="overlay-product" />
      <div className="product-details">
        <header className='product-header'>
          <h4 style={{ color: 'white' }}>Institutional Assault</h4>
        </header>
        <div className='product-det'>This can involve prison guards punishing inmates by taking away their Constitutional rights. Denying an inmate the right to practice his or her religion or visit the prison library may be examples of this type of misconduct.</div>
      </div>
    </article>
</div>

</div>


  </Wrapper>
  <Footer />
</div>
 )
}


export default PracticeAreas

const Wrapper = styled.section`
height: 100%;
width: 100%;


.backimage{
  position: absolute;
  z-index : -1;
  height: 75vh;
  width: 100%;
}

/* New */

.transparentBackground{
  width: 100%;
  height: 75vh;
  background-color: black;
  opacity: 0.5;
  position: absolute;
}

.dataHolder{
  height: 75vh;
  width: 100%;
  position: relative;
  display: grid;
  place-content: center; 
}

.textHolder{
  width: 100%;
  height: 75vh;
  display: grid;
  place-content: center;
}

 .header{
  position: relative;
  display: grid;
  place-content: center;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
 }

 .innerData{
  position: relative;
  display: grid;
  place-content: center;
  text-align:center;
  font-size: 15px;
  font-family: sans;
  letter-spacing: 1px;
  color: white;
  font-style: italic;
  padding: 20px;
 }

 .textHolder2{
  width: 100%;
  height: 500px;
  display: flex;
  place-content: center;
}

.imageHolder2{
  width: 50%;
  height: 100%;
}

.innerData2{
  width: 50%;
  height: 100%;
  position: relative;
  display: grid;
  place-content: center;
  text-align:center;
  font-size: 15px;
  font-family: sans;
  letter-spacing: 1px;
  color: black;
  font-style: italic;
  padding: 20px;
 }


 .carousel{
  height: 100%;
  width: 100%;
  position: relative;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  padding: 10px;
 }

 .sectionCenter {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    background-color: var(--blue);
    color: cornsilk;
  }

  .product-card {
    display: grid;
    height: 40vh;
    width: 50vh;
    margin-top: 4rem;
    margin-bottom: 1rem;
    /* transition: all 0.7s cubic-bezier(0.895, 0.03, 0.685, 0.22); */
    transition: box-shadow 0.3s;
    &:hover{
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08),
      0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14); 
    }
  }

  .card-image{
    object-fit:cover;
    height: 40vh;
    width: 50vh;
    border-radius: var(--radius);
    display: block;
    position: absolute;
  }

  
  .product-details{
      display: grid;
      justify-content: center;
      align-items: center;
      z-index: 1;
      height: 40vh;
      width: 50vh;
      position: relative;
      transition: backdrop-filter 0.3s;
      border-radius: var(--radius);
  }


  .overlay-product{
      display: grid;
      justify-content: center;
      align-items: center;
      background-color: black;
      z-index: 1;
      height: 40vh;
      width: 50vh;
      position: absolute;
      opacity: 0.5;
      border-radius: var(--radius);
  }

  .product-details:hover{
    backdrop-filter: blur(5px);
    }

  
  .item-info header {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px dotted var(--clr-grey-5);
  }

  .item-info h4 {
    margin-bottom: 0.5rem;
  }

  .price {
    position: relative;
    text-align: center;
    color: var(--clr-gold);
  }

  .description-holder {
    position: relative;
    display: inline;
    padding: 1rem;
    color: white;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .product-header{
      width: 100%;
      display: grid;
      position: relative;
      align-items: center;
      justify-content: center;
  }

  .product-det{
    text-align: center;
    padding: 20px;
    display: none;
  }

  .product-card:hover .product-det{
    display: unset;
  }

  .product-card:not(:hover) .product-det{
    display: none;
  }

  .product-card:hover .product-header{
    display: none;
  }
  .product-card:not(:hover) .product-header{
    display: unset;
  }
  
  

  .item-text {
    color: white;
  }

  .cardsHolder{
    width: 100%;
    height: 100%;
    display: flex;
    place-content: center;
  }


 @media only screen and (max-width: 600px) {
  .transparentBackground{
  opacity: 0.6;
}
 .textHolder2{
  display: grid;
 }

 .cardsHolder{
  display: grid;
 }

 }
`