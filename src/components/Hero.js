import React, { useRef, useEffect, useState, useMemo } from 'react'
import { Button, Fab, AddIcon, Grid, Itemm, Box, Text, Paper } from '@mui/material'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import Carousel from 'react-bootstrap/Carousel';
import Typography from '@mui/joy/Typography';
import Backdrop from '@mui/material/Backdrop';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return (
    <CarouselWrapper>
      <Carousel>
        <Carousel.Item>
          <div className='dataHolder'>
            <div className='cardHolder'>
              <div className='card'>
              <img src='/pen.jpg' className='image'/>
              <div className='transparentBackground'/>
              <div className='header'>Police Brutality</div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='dataHolder'>
              <div className='cardHolder'>
              <div className='card'>
                <img src='/pen.jpg' className='image'/>
                <div className='transparentBackground'/>
                <div className='header'>Wrongful Detainment</div>
              </div>
              </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='dataHolder'>
              <div className='cardHolder'>
              <div className='card'>
              <img src='/pen.jpg' className='image'/>
              <div className='transparentBackground'/>
              <div className='header'>Excessive Force</div>
              </div>
              </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </CarouselWrapper>
  );
}

const Hero = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const card = (
    <ContactCard>
      <Modal size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="phone" placeholder="Phone" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Type your message here" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </ContactCard>
  )

  return (

    <div style={{ width: '100%', height: '100%' }}>
      <>{card}</>
      <Header />
      <Wrapper>
        <section class='backg'>
          <img className='dekstopImage' src='/android-chrome-512x512.png'></img>
          <div className='detailsTextHolder'>
            <div className='detailsText'>
              Our attorneys are dedicated to protecting the civil rights of our clients. We do this by aggressively pursuing compensation for them in court, seeking payment for the damage caused by police and other public employees.
            </div>
            <div className='contactButtonHolder'>
              <div onClick={handleShow} className='contactButton'>Contact US</div>
            </div>
          </div>
        </section>

        <section className='carouselHolder'>
          <div className='carouselTitleHolder'>
            <h2 style={{ color: 'white' }}>Areas of Focus</h2>
          </div>
          <UncontrolledExample />
          
        </section>


        <section className='text1'>
          <div className='t1-holder'>
          <h2 style={{ padding: '10px',color: 'black' }}>Pennsylvania Police brutality, Illegal Search & Seizure Lawyer</h2>
          <div className='t1-para'>
          As Americans, we enjoy legal protections that are unknown in many other counties. However, unless something happens to violate them, our rights are easy to take for granted. Moreover, when something does happen, we often have little knowledge about our options.  Our Philadelphia PA law firm  advocates for people whose civil rights were violated by law enforcement, jail personnel and other public employees.<br/><br/><br/><br/>Our Pennsylvania civil rights lawyers support the police and know that they provide a vital service to society by protecting people from crime and violence. However, we also know that law enforcement organizations are often unwilling to police themselves with the same aggressiveness that they use when pursuing criminals. In some instances, police officers fail to operate with the integrity and fairness that the public deserves, violating citizens' rights and damaging their own reputations.
          </div>
          </div>
        </section>

        <section className='text2'>
          <div className='t2-image'>
          <img style={{width: "100%", height: '100%', objectFit: 'cover'}} src='attorney.jpg'/>
          </div>
          <div className='t2-holder'>
          <h4 style={{ padding: '10px',color: 'white', paddingTop:'20px' }}>Our Civil Rights Practice</h4>
          <div className='t2-para'>
          Our Philadelphia ciivil rights attorneys assist people who suffered violations of their rights. We are aggressive advocates for our clients, believing that only by bringing civil rights claims will law enforcement begin to reform its most damaging practices. Our lawyers seek compensation for clients, including those who suffered physical and emotional damages resulting from police misconduct. Our cases involve a wide variety of matters, from illegal search and seizure to police brutality.<br/>
          <br/>Our law firm brings claims forward under the Fourth, Fifth, Eighth and Fourteenth amendments to the U.S. Constitution. The protections offered by these amendments and numerous federal and state statutes give our clients grounds for action. Our attorneys have been successful in many cases, obtaining settlements and verdicts against city, county and state law enforcement organizations.<br/>
          <br/>If you or a loved one has experienced a violation of your civil rights in Pennsylvania, contact our Philadelphia civil rights law firm to schedule a no-cost consultation about your situation.<br/>
          <br/><br/>You pay no legal fees unless we win. Conveniently located across from City Hall in downtown Philadelphia.
          </div>
          </div>
        </section>


      </Wrapper>
      <Footer />
    </div>

  )

}

const CarouselWrapper = styled.div`
width: 100%;
height: 100%;
background-color: rgb(20, 39, 79);

.dataHolder{
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
}

.cardHolder{
  width: 50rem;
  height: 30rem;
  background-color: rgb(20, 39, 79);
}

.card{
  width: 100%;
  height: 80%;
  background-color: rgb(20, 39, 79);
}

.image{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 1s;
  border-radius: 10px; 
}

.transparentBackground{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 1s;
  border-radius: 10px; 
  background-color: black;
  opacity: 0.4;
}

  .header{
    width: 100%;
    height: 100%;
    color: white;
    z-index: 1;
    display: grid;
    place-content: center;
    font-size: 30px;
    font-weight: bold;
    transition: box-shadow 1s;
    font-style: italic;
    font-family: sans;
    &header:hover{
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08),
      0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14); 
    }
  }
  .card:hover .image{
    filter: blur(4px);
  } 
 
`


const Wrapper = styled.section`
height: 100%;
width: 100%;
background-color: rgb(20, 39, 79);
.scroller {
    height: 75vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
}

.scroller section {
    scroll-snap-align: start;
}

.backg{
  width: 100%;
  height: 75vh;
  display: flex;
  align-items: center;
  padding: 5%;
  background-color: rgb(20, 39, 79);
}

.dekstopImage{
    width: 20%;
}

.detailsTextHolder{
    width: 100%;
    height: 100%;
    place-content: center;
    display: grid;
}
.detailsText{
    font-style: italic;
    font-family: 'sans';
    width: 100%;
    color: white;
    height: 100%;
    text-align: center;
}
.contactButtonHolder{
    width: 100%;
    height: 100%;
    place-content: center;
    text-align: center;
    display: grid;
}

.contactButton{
    color: white;
    padding-top: 2rem;
    place-content:center;
    display: grid; 
    transition: var(--transition);
    cursor: pointer;
    &:hover {
        color: white;
        box-shadow: 0 2px var(--clr-primary-10);
       }
}

.carouselHolder{
    height: 100%;
    width: 100%;
    background-color: rgb(20, 39, 79);
}

.carouselTitleHolder{
    height: 20%;
    width: 100%;
    text-align: center;
    display: grid;
    place-content: center;
    z-index: 1;
}
.carouselBackground{
    position: absolute;
    background-color: black;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    border-radius: 20px;
}

.carouselBackgroundTop{
    z-index: 1;
}

.text1{
  height: 100%;
  width: 100%;
  background-color: white;
}

.t1-holder{
  width: 100%;
  height: 100%;
  text-align: center;
  display: grid;
  place-content: center;
  padding: 100px;
}

.t1-para{
  font-family: sans;
  font-style: italic;
  width: 100%;
}

.text2{
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
}

.t2-image{
  width: 50%;
  height: 100%;
}

.t2-holder{
  width: 50%;
  height: 100%;
  text-align: center;
}

.t2-para{
  font-family: sans;
  font-style: italic;
  width: 100%;
  color: white;
  padding-left: 30px;
  padding-right: 30px;
}

 @media (min-width: 576px) {
  
 }

 @media only screen and (max-width: 600px) {
    .backg{
        height: 80vh;
        align-content: center;
        display: grid;
        align-items: center;
        justify-content: start;
        padding: 5%;
        background-color: rgb(20, 39, 79);
    }

    .dekstopImage{
        width: 100%;
    }

    .mobImage{
        height: 100%;
        align-content: center;
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 5%;
        background-color: rgb(20, 39, 79);
        visibility: visible;
    }

    .contactButton{
        width: 100%;
        color: white;
        height: 100%;
        padding-top: 2rem;
        place-content:center;
        display: grid; 
        transition: var(--transition);
        cursor: pointer;
        &:hover {
            color: white;
            box-shadow: 0 2px var(--clr-primary-10);
           }
    }

    .carouselHolder{
      height: 100%;
    }

    .carouselTitleHolder{
      padding-top: 50px;
    }

    .t1-holder{
      padding: 20px;
      padding-top: 50px;
      padding-bottom: 50px;
    }

    .text2{
      display:grid;
    }

    .t2-image{
      width: 100%;
    }
    .t2-holder{
      width: 100%;
    }

    
 }
 @media only screen and (min-width: 600px) {
 }

 @media only screen and (min-width: 768px) {
 }

 @media (min-width: 992px) {
 }
 @media (min-width: 1280px) {
 }
`;


const ContactCard = styled.div`
height: 100%;
width: 100%;
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

  .screen-header-buttonClose {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 3px;
    border-radius: 8px;
  }
  
  .screen-header-button.close {
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

  .app-contact{
    display: none;
  }
     
  .screen-body {
      padding: 40px;
  }
  
  .screen-body-item {
    padding: 0;
  }
    }

`

export default Hero