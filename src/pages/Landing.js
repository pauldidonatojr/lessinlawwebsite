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
import RainbowChat from '../components/RainbowChat.js'
import { Fade } from 'react-slideshow-image'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Card } from '@mui/material';
import City_Video from '../assets/2.mp4';




const Landing = ({ videoSrc }) => {
  const [data, setData] = useState(heroData)
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const { openModal } = useModalContext()
  const { openChat } = useModalContext()
  const { isModalOpen, closeModal } = useModalContext()
  const { isChatOpen, closeChat } = useModalContext()
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // const [showChat, setShowChat] = useState(false)

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
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  const card = (
    <ContactCard>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
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
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Type your message here"
              />
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
    <>
      <Wrapper>
        <video autoPlay muted playsInline loop id="background-video">
          <source
            src={
              City_Video
            }
            type="video/mp4"
          />
        </video>

        <div className=" page1">
          <div className="info1">
            <div className="btn-groups">
              <Button variant="contained" className="btn btn-hero">
                <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>
                  enter
                </Link>
              </Button>
              <Button
                variant="contained"
                onClick={handleShow}
                className="btn btn-hero"
              >
                contact us
              </Button>
              <Button variant="contained" onClick={openChat} className="btn btn-hero">
                live chat
              </Button>
            </div>

            <div
              className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
                }`}
            >
              <div className="modal-container">
                <button className="close-modal-btn" onClick={closeModal}>
                  <FaWindowClose
                    style={{ position: 'relative', zIndex: '1', top: '0', right: '0' }}
                  ></FaWindowClose>
                </button>
                Contact
              </div>
            </div>

            <div
              className={`${isChatOpen ? 'chat-overlay show-chat' : 'chat-overlay'}`}
            >
              <div className="modal-container">
                <button className="close-chat-btn" onClick={closeChat}>
                  <FaWindowClose
                    style={{
                      position: 'relative',
                      zIndex: '999990',
                      top: '0',
                      right: '0',
                    }}
                  ></FaWindowClose>
                </button>
                <RainbowChat />
              </div>
            </div>
          </div>
        </div>
        <div className="container page ">
          <div className="info">

            <h1 style={{ fontSize: '4rem' }}>
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
                      <div className='video-top'></div>
                      <i>
                        {' '}
                        <p
                          className="text"
                          style={{ color: '#fff', fontWeight: '650', lineHeight: '2' }}
                        >
                          {text}
                        </p>
                      </i>
                    </article>

                  </div>
                )
              })}

              <div className="btn-groups">
                <Button
                  variant="contained"
                  onClick={handleShow}
                  className="btn btn-hero"
                >
                  contact us
                </Button>
                <Button
                  variant="contained"
                  onClick={openChat}
                  className="btn btn-hero"
                >
                  live chat
                </Button>
              </div>

              <div
                className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
                  }`}
              >
                <div className="modal-container">
                  <button className="close-modal-btn" onClick={closeModal}>
                    <FaWindowClose
                      style={{ position: 'relative', zIndex: '1', top: '0', right: '0' }}
                    ></FaWindowClose>
                  </button>
                  Contact
                </div>
              </div>

              <div
                className={`${isChatOpen ? 'chat-overlay show-chat' : 'chat-overlay'}`}
              >
                <div className="modal-container">
                  <button className="close-chat-btn" onClick={closeChat}>
                    <FaWindowClose
                      style={{
                        position: 'relative',
                        zIndex: '999990',
                        top: '0',
                        right: '0',
                      }}
                    ></FaWindowClose>
                  </button>
                  <RainbowChat />
                </div>
              </div>
            </div>
          </div>
          <>{card}</>
        </div>





        {/* Practice Areas */}
        <PracticeAreas>
          <div className="transparentBackground"></div>
          <div className="textHolder">
            <div className="header">Practice Areas</div>
            <div className="innerData">
              Our attorneys are dedicated to helping people obtain compensation after
              experiencing violations of their constitutionally protected rights. Many
              of these cases are complex, involving multiple areas of constitutional
              law. At the law firm of Jeffrey R. Lessin & Associates, P.C., we have both
              the knowledge and the determination to pursue your case as far as
              necessary to obtain justice.
            </div>
          </div>
          <div className='card-holder'>



            <div variant="outlined" className='inner-card'>
              <div className='inner-card-transparent'></div>
              <header className="product-header">
                <h4 style={{ color: 'white' }}>Police Brutality</h4>
              </header>
              <div className="product-det">
                You can do something about it. Police officers are not above the law.
              </div>
            </div>


            <div variant="outlined" className='inner-card'>
              <div className='inner-card-transparent'></div>
              <header className="product-header">
                <h4 style={{ color: 'white' }}>Wrongful Detainment</h4>
              </header>
              <div className="product-det">
                If you have been wrongly accused and detained by a mall security guard
                or store manager, you have recourse.
              </div>
            </div>


            <div variant="outlined" className='inner-card'>
              <div className='inner-card-transparent'></div>
              <header className="product-header">
                <h4 style={{ color: 'white' }}>Excessive Foce</h4>
              </header>
              <div className="product-det">
                If a police officer struck you while you were handcuffed, you have
                probably experienced excessive force, a term that applies whenever
                police use levels of force greater than is needed to control the
                situation.
              </div>
            </div>


            <div variant="outlined" className='inner-card'>
              <div className='inner-card-transparent'></div>
              <header className="product-header">
                <h4 style={{ color: 'white' }}>False Imprisonment</h4>
              </header>
              <div className="product-det">
                People arrested and put in jail for crimes they did not commit may be
                able to seek compensation.
              </div>
            </div>


            <div variant="outlined" className='inner-card'>
              <div className='inner-card-transparent'></div>
              <header className="product-header">
                <h4 style={{ color: 'white' }}>False Arrest</h4>
              </header>
              <div className="product-det">
                Police misconduct can involve either failing to act or taking wrongful
                action.
              </div>
            </div>


            <div variant="outlined" className='inner-card'>
              <div className='inner-card-transparent'></div>
              <header className="product-header">
                <h4 style={{ color: 'white' }}>Illegal Seach and Seazures</h4>
              </header>
              <div className="product-det">
                These cases often arise when police arrest an innocent person.
              </div>
            </div>


            <div variant="outlined" className='inner-card'>
              <div className='inner-card-transparent'></div>
              <header className="product-header">
                <h4 style={{ color: 'white' }}>Racial Profiling</h4>
              </header>
              <div className="product-det">
                {' '}
                If police entered your house without a warrant or searched your car
                without probable cause, you may be able to file a claim for illegal
                search and seizure against the police department.
              </div>
            </div>


            <div variant="outlined" className='inner-card'>
              <div className='inner-card-transparent'></div>
              <header className="product-header">
                <h4 style={{ color: 'white' }}>Prison Guard Misconduct</h4>
              </header>
              <div className="product-det">
                Drivers stopped and searched without probable cause may be victims of
                racial or gender profiling.
              </div>
            </div>


            <div variant="outlined" className='inner-card'>
              <div className='inner-card-transparent'></div>
              <header className="product-header">
                <h4 style={{ color: 'white' }}>Institutional Assault</h4>
              </header>
              <div className="product-det">
                This can involve prison guards punishing inmates by taking away their
                Constitutional rights. Denying an inmate the right to practice his or
                her religion or visit the prison library may be examples of this type
                of misconduct.
              </div>
            </div>




          </div>
        </PracticeAreas>



      </Wrapper>
    </>
  )
}


const PracticeAreas = styled.main`
  height: 100%;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;


  .card-holder {
    width: 100%;
    margin-top: 20%;
    display: grid;
    place-content: center;
  }

  .inner-card{
    width: 300px;
    height: 300px;
    margin-top: 10%;
    margin-bottom: 10%;
  }
  .inner-card-transparent{
    width: 300px;
    height: 300px;
    background-color: rgb(20, 39, 79);
    opacity: 0.6;
    position: absolute;
  }

  .transparentBackground {
  width: 100%;
  height: 75vh;
  background-color: black;
  opacity: 0.7;
  position: absolute;
 }

 .dataHolder {
  height: 75vh;
  width: 100%;
  position: relative;
  display: grid;
  place-content: center;
 }

 .textHolder {
  width: 100%;
  height: 75vh;
  display: grid;
  place-content: center;
 }

 .header {
  position: relative;
  display: grid;
  place-content: center;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
 }

 .innerData {
  position: relative;
  display: grid;
  place-content: center;
  text-align: center;
  font-size: 15px;
  font-family: sans;
  letter-spacing: 1px;
  color: white;
  font-style: italic;
  padding: 20px;
 }

 .textHolder2 {
  width: 100%;
  height: 500px;
  display: flex;
  place-content: center;
 }

 .imageHolder2 {
  width: 50%;
  height: 100%;
 }

 .innerData2 {
  width: 50%;
  height: 100%;
  position: relative;
  display: grid;
  place-content: center;
  text-align: center;
  font-size: 15px;
  font-family: sans;
  letter-spacing: 1px;
  color: black;
  font-style: italic;
  padding: 20px;
 }

 .carousel {
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
  margin: 10px;
 }

 .product-header {
  width: 100%;
  display: grid;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
 }

 .product-det {
  width: 100%;
  display: grid;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  color: white;
  text-align: center;
 }



 @media only screen and (max-width: 600px) {
  .transparentBackground {
   opacity: 0.6;
  }
  .textHolder2 {
   display: grid;
  }
}
`;


const Wrapper = styled.main`

 #background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
 }

 .video-top{
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  opacity: 0.3;
 }

 display: grid;
 align-items: center;
 justify-content: center;
 height: 100%;
 width: 100%;
 .navbar {
  background-color: blue;
  width: 100%;
  height: 50px;
  margin-bottom: 2rem;
 }
 .info-overlay {
  display: none;
 }
 .chat-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
 }

 #rainbow-chat {
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  width: 450px;
  height: 45%;
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
 }
 .page1 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 }
 .info {
  text-align: center;
  border-radius: 10%;
 }
 .info1 {
  text-align: center;
  background-color: whitesmoke;
  border-radius: 10%;
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
 .video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
 }

 .video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
 }

 @media only screen and (max-width: 600px) {
  .page {
   min-height: calc(70vh - var(--nav-height));
   border-radius: 4%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
  }
  .page1 {
   /* display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column; */
   display: none;
  }
  article {
   border-radius: 2%;
  }
  .info {
   border-radius: 2%;
   transition: var(--transition);

   height: 505px;
   width: 300px;
   margin-bottom: 11rem;
   margin-top: 1rem;
   h1 {
    margin-top: 0.75rem;
   }
  }
  .info1 {
   border-radius: 10%;
   background-color: whitesmoke;
   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 550px;
   width: 300px;
   margin-left: 2rem;
   margin-right: 0.5rem;
   margin-bottom: 10rem;
   h1 {
    margin-top: 0.75rem;
   }
  }
  .bio {
   transition: var(--transition);
   font-size: 0.85rem;
   height: 535px;
   width: 265px;
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
   margin-top: 26.5rem;
   margin-bottom: 14rem;
  }
  .btn-hero {
   font-size: 1.25rem;
  }
 }
 @media only screen and (min-width: 600px) {
  .page {
   /* min-height: calc(100vh - var(--nav-height)); */
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .page1 {
   /* min-height: calc(100vh - var(--nav-height)); */
   /* display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem; */
   display: none;
  }
  .info {
   transition: var(--transition);
   box-shadow: var(--shadow-3);
   border-radius: 10%;

   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 550px;
   width: 300px;
   margin-left: 2rem;
   margin-right: 0.5rem;
   h1 {
    margin-top: 0.75rem;
   }
  }
  .info1 {
   transition: var(--transition);
   box-shadow: var(--shadow-3);
   border-radius: 10%;

   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 550px;
   width: 300px;
   margin-left: 2rem;
   margin-right: 0.5rem;
   h1 {
    margin-top: 0.75rem;
   }
  }
  .bio {
   transition: var(--transition);
   font-size: 0.75rem;

   height: 475px;
   width: 250px;

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
   margin-top: 18rem;
   margin-bottom: 12rem;
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
  .page1 {
   /* min-height: calc(100vh - var(--nav-height)); */
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .info {
   transition: var(--transition);
   box-shadow: var(--shadow-3);
   border-radius: 10%;

   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 550px;
   width: 300px;
   margin-left: 2rem;
   margin-right: 0.5rem;
   h1 {
    margin-top: 0.75rem;
   }
  }
  .info1 {
   transition: var(--transition);
   box-shadow: var(--shadow-3);
   border-radius: 10%;

   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 550px;
   width: 300px;
   margin-left: 2rem;
   margin-right: 0.5rem;
   h1 {
    margin-top: 0.75rem;
   }
  }
  .bio {
   transition: var(--transition);
   font-size: 0.75rem;

   height: 475px;
   width: 250px;
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
   margin-top: 18rem;
   margin-bottom: 12rem;
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
  .page1 {
   /* min-height: calc(100vh - var(--nav-height)); */
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .info {
   transition: var(--transition);
   box-shadow: var(--shadow-3);
   border-radius: 10%;

   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 550px;
   width: 300px;
   margin-left: 2rem;
   margin-right: 0.5rem;
   h1 {
    margin-top: 0.75rem;
   }
  }
  .info1 {
   transition: var(--transition);
   box-shadow: var(--shadow-3);
   border-radius: 10%;

   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 550px;
   width: 300px;
   margin-left: 2rem;
   margin-right: 0.5rem;
   h1 {
    margin-top: 0.75rem;
   }
  }
  .bio {
   transition: var(--transition);
   font-size: 0.75rem;

   height: 475px;
   width: 250px;
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
   margin-top: 18rem;
   margin-bottom: 12rem;
  }
  .btn-hero {
   font-size: 1rem;
  }
 }
 @media (min-width: 1280px) {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;

  .page {
   min-height: calc(100vh - var(--nav-height));
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .page1 {
   min-height: calc(100vh - var(--nav-height));
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: -3rem;
  }
  .info {
   transition: var(--transition);
   box-shadow: var(--shadow-3);
   border-radius: 10%;

   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 650px;
   width: 600px;
   margin-left: 2rem;
   margin-right: 0.5rem;
   h1 {
    margin-top: 3.75rem;
   }
  }
  .info1 {
   transition: var(--transition);
   box-shadow: var(--shadow-3);
   border-radius: 10%;

   transition: var(--transition);
   box-shadow: var(--shadow-3);
   height: 650px;
   width: 600px;
   margin-left: 2rem;
   margin-right: 0.5rem;
   h1 {
    margin-top: 3.75rem;
   }
  }
  .bio {
   transition: var(--transition);
   font-size: 1.34rem;

   height: 500px;
   width: 365px;
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
  }
  .btn-hero {
   font-size: 1.5rem;
   width: 15rem;
  }
 }
`
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
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
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
  transition: border-color 0.2s;
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
  .app-contact {
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
