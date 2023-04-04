import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Fab, AddIcon, Grid, Itemm, Box, Text } from '@mui/material'
import Paper from '@mui/material/Paper'
// import { styled } from '@mui/material/styles'
import styled from 'styled-components'
import { padding } from '@mui/system'
import { Twitter } from '@mui/icons-material'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import { links } from '../utils/constants'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useModalContext } from '../context/modal_context'
import { FaWindowClose } from 'react-icons/fa'
import RainbowChat from '../components/RainbowChat.js'
const TopHeader = styled.div`
 background-color: #14274f;
 width: 100%;
 height: 70px;
 display: flex;
 justify-content: center;
 align-items: center;
 position: fixed;
 top: 0;
 z-index: 9999; /* Adjust this value as needed */



 @media only screen and (min-width: 768px) {
  justify-content: space-around;
  height: 80px;
 }
`

const TextP = styled.p`
 color: whitesmoke;
 font-size: 1.85rem;
 margin: 0;
 text-transform: capitalize;
 @media only screen and (min-width: 768px) {
  display: block;
  font-size: 2.55rem;
 }
`

const TextZ = styled.p`
 color: whitesmoke;
 font-size: 1.85rem;
 margin: 0;
 display: none;
 text-transform: capitalize;
 @media only screen and (min-width: 768px) {
  display: block;
  font-size: 2.55rem;
 }
`

const theme = createTheme({
 typography: {
  // Tell MUI what the font-size on the html element is.
  htmlFontSize: 10,
 },
})

const Header = () => {
 const [anchorEl, setAnchorEl] = React.useState(null)
 const open = Boolean(anchorEl)
 const handleClick = (event) => {
  setAnchorEl(event.currentTarget)
 }
 const handleClose = () => {
  setAnchorEl(null)
 }

 const [contentIndex, setContentIndex] = useState(0)
    const { isChatOpen, closeChat } = useModalContext()
     const { openChat } = useModalContext()

 const content = [
  ['Click here to chat', '(215) 599-1400'],
  ['We are here to help!', 'Call us now'],
  ['Live support available', 'Contact us'],
 ]

 useEffect(() => {
  const interval = setInterval(() => {
   setContentIndex((prevIndex) => (prevIndex + 1) % content.length)
  }, 4000)
  return () => clearInterval(interval)
 }, [])
 return (
  <Wrapper>
   <TopHeader>
    <TextP onClick={openChat}>{content[contentIndex][0]}</TextP>
    <TextZ onClick={openChat}>{content[contentIndex][1]}</TextZ>

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
   </TopHeader>
   <div className="dekstop">
    <div className="top">
     <div className="nameHolder1">
      <Link to="/" style={{ textDecoration: 'none' }}>
       {' '}
       <ThemeProvider theme={theme}>
        <Typography className="companyName">
         {' '}
         Jeffrey R. Lessin & Associates, P.C.
        </Typography>
       </ThemeProvider>
      </Link>
      <div className="companyDetails">
       {' '}
       Pennsylvania Personal Injury Lawyer . Philadelphia Civil Rights Attorneys{' '}
      </div>
     </div>

     <div className="contactButtons">
      <div className="callButtonHolder">
       <a
        style={{ textDecoration: 'none', color: 'black' }}
        href="tel:+2155991400"
       >
        <div className="callButtonHolderInner">
         <CallIcon
          style={{ fontSize: '1.5rem', marginRight: '5px', marginTop: '5px' }}
         />
         <div> Phone</div>
        </div>

        <div style={{ marginTop: '5px' }}>+(215) 599-1400</div>
       </a>
      </div>
      <div className="nameHolder2">
       <Link to="/" style={{ textDecoration: 'none' }}>
        {' '}
        <ThemeProvider theme={theme}>
         <Typography className="companyName">
          {' '}
          Jeffrey R. Lessin & Associates, P.C.
         </Typography>
        </ThemeProvider>
       </Link>
       <div className="companyDetails">
        {' '}
        Pennsylvania Personal Injury Lawyer . Philadelphia Civil Rights
        Attorneys{' '}
       </div>
      </div>
      <div className="emailButtonHolder">
       <div className="callButtonHolder">
        <a
         style={{ textDecoration: 'none', color: 'black' }}
         href="mailto:info@lessinlaw.com"
        >
         <div className="callButtonHolderInner">
          <EmailIcon
           className="emailIcon"
           style={{ fontSize: '1.5rem', marginRight: '5px', marginTop: '5px' }}
          />
          <div> Email</div>
         </div>
         <div style={{ marginTop: '5px' }}>info@lessinlaw.com</div>
        </a>
       </div>
      </div>

      <div className="mobContactButtons">
       <a
        style={{ textDecoration: 'none', color: 'black' }}
        href="mailto:info@lessinlaw.com"
       >
        <EmailIcon style={{ fontSize: 50, marginRight: '20px' }} />
       </a>

       <a
        style={{ textDecoration: 'none', color: 'black' }}
        href="tel:+2155991400"
       >
        <CallIcon style={{ fontSize: 50, marginLeft: '20px' }} />
       </a>
      </div>
     </div>
    </div>
    <div className="bottom">
     <div className="div-1">
      <ul>
       <Link style={{ textDecoration: 'none' }} to="/landing">
        <li> Home </li>
       </Link>
       <Link style={{ textDecoration: 'none' }} to="/firmoverview">
        <li> Firm Overview </li>
       </Link>
       <Link style={{ textDecoration: 'none' }} to="/practiceareas">
        <li> Practice Areas Overview </li>
       </Link>
       <Link style={{ textDecoration: 'none' }} to="/attorneyprofiles">
        <li> Attorney Profiles </li>
       </Link>
       <Link style={{ textDecoration: 'none' }} to="/resourcelinks">
        <li> Resource Links</li>
       </Link>
       <Link style={{ textDecoration: 'none' }} to="/communities">
        <li> Communities</li>
       </Link>
       <Link style={{ textDecoration: 'none' }} to="/contactus">
        <li> Contact </li>
       </Link>
      </ul>
     </div>

     <div className="menuMobile">
      <Button
       id="basic-button"
       aria-controls={open ? 'basic-menu' : undefined}
       aria-haspopup="true"
       aria-expanded={open ? 'true' : undefined}
       onClick={handleClick}
       style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: '2rem',
       }}
      >
       Menu
      </Button>
      <Menu
       id="basic-menu"
       anchorEl={anchorEl}
       open={open}
       onClose={handleClose}
       MenuListProps={{
        'aria-labelledby': 'basic-button',
       }}
      >
       <Link style={{ textDecoration: 'none', color: 'black' }} to="/landing">
        <MenuItem onClick={handleClose}>Home</MenuItem>
       </Link>
       <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to="/firmoverview"
       >
        <MenuItem onClick={handleClose}>Firm Overview</MenuItem>
       </Link>
       <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to="/practiceareas"
       >
        <MenuItem onClick={handleClose}>Practice Areas Overview</MenuItem>
       </Link>
       <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to="/attorneyprofiles"
       >
        <MenuItem onClick={handleClose}>Attorney Profiles</MenuItem>
       </Link>
       <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to="/resourcelinks"
       >
        <MenuItem onClick={handleClose}>Resource Links</MenuItem>
       </Link>
       <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to="/communities"
       >
        <MenuItem onClick={handleClose}>Communities</MenuItem>
       </Link>
       <Link style={{ textDecoration: 'none', color: 'black' }} to="/contactus">
        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
       </Link>
      </Menu>
     </div>
    </div>
   </div>
  </Wrapper>
 )
}

const Wrapper = styled.main`
 height: 250px;
 width: 100%;
 background-color: whitesmoke;
 .top-header {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
 }
 .dekstop {
  margin-top: 2.2rem;
  width: 100%;
  height: 25vh;
 }
 .tabMob {
  width: 100%;
  height: 100%;
 }

 .top {
  display: flex;
  justify-content: center;
  align-items: center;
 }

 .companyDetails {
  font-size: 0.9em;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.5px;
  color: black;
 }
 .companyDetails:hover {
  cursor: pointer;
 }

 .companyName {
  display: grid;
  place-content: center;
  font-size: 45px;
  font-family: sans;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.5px;
  color: black;
  transition: 700ms ease;
 }

 .companyName:hover {
  font-variation-settings: 'wght' 582;
  letter-spacing: 1.5px;
  cursor: pointer;
 }

 .contactButtons {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
 }

 .callButtonHolder {
  height: 100%;
  width: 50%;
  text-align: center;
  place-content: center;
  align-items: center;
  display: grid;
 }

 .mobContactButtons {
  display: none;
 }

 .callButtonHolderInner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 }

 .emailButtonHolder {
  height: 100%;
  width: 50%;
  text-align: center;
  place-content: center;
  align-items: center;
  display: grid;
 }

 .bottom {
  width: 100%;
  height: 45%;
  background-color: rgb(20, 39, 79);
 }

 .div-1 {
  flex: 1;
  height: 80%;
  width: 100%;
  place-content: center;
  text-align: center;
  display: grid;
  ul {
   display: flex;
   justify-content: center;
   place-content: center;

   li {
    height: 100%;
    color: white;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    font-size: 1.4rem;
    margin: 0 2rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    outline-color: var(--clr-primary-10);
   }
   li:hover {
    color: white;
    box-shadow: 0 2px var(--clr-primary-10);
   }
   .li4 {
    display: none;
   }
  }
 }

 .menuMobile {
  visibility: hidden;
 }

 @media (min-width: 576px) {
 }

 @media only screen and (max-width: 600px) {
  height: 100px;
  .dekstop {
  }
  .top {
   display: grid;
   background-color: whitesmoke;
   width: 100%;
   height: 30vh;
   margin-top: 4rem;
  }

  .nameHolder1 {
   width: 100%;
   display: block;
  }
  .nameHolder2 {
   display: none;
  }
  .companyName {
   font-size: 35px;
   height: 100%;
   place-content: center;
   display: grid;
   text-decoration: none;
  }
  .companyDetails {
   display: none;
  }
  .div-1 {
   display: none;
  }
  .contactButtons {
   width: 100%;

   place-content: center;
  }
  .callButtonHolder {
   display: none;
  }
  .emailButtonHolder {
   display: none;
  }
  .mobContactButtons {
   display: unset;
   width: 70%;
   height: 100%;
   display: flex;
   place-content: center;
  }
  .menuMobile {
   display: grid;
   place-content: center;
   visibility: visible;
   height: 100%;
  }
 }

 @media only screen and (max-width: 768px) {
 }

 @media (min-width: 992px) {
 }
 @media (min-width: 1280px) {
  .nameHolder1 {
   display: none;
  }
  .companyName {
   font-size: 55px;
  }
  .nameHolder2 {
   width: 100%;
   height: 100%;
   margin-left: 2rem;
   margin-top: 2rem;
  }
  .contactButtons {
   color: whitesmoke;
   height: 20vh;
   width: 100%;
   margin-top: 4rem;
  }
  .top {
   height: 90%;
  }
 }
`

export default Header
