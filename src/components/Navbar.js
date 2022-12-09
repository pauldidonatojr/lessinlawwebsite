import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FaBars, FaCamera, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links, social } from '../utils/constants'
import { useSideContext } from '../context/sidebar_context'
import { useModalContext } from '../context/modal_context'
import CallIcon from '@mui/icons-material/Call'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import {
 Typography,
 makeStyles,
 useTheme,
 useMediaQuery,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
 nav_links: {
  width: '100%',
  position: 'absolute',
  display: 'grid',
  alignContent: 'center',
  alignItems: 'center',
  placeContent: 'center',
  justifyContent: 'center',
  padding: '0.2rem',
  bottom: '0',
 },
 '@media (max-width: 900px)': {
  nav_links: {
   visibility: 'hidden',
  },
 },
}))

export default function Navbar() {
 const classes = useStyles()
 const { openModal } = useModalContext()
 const { openSidebar } = useSideContext()

 const [value, setValue] = React.useState(2)

 const handleChange = (event, newValue) => {
  setValue(newValue)
 }

 const handleClick = (event, message) => {
  // 👇️ refers to the image element
 }

 return (
  <NavContainer>
   <div className="nav-center">
    <div className="nav-header">
     <button type="button" className="nav-toggle" onClick={openSidebar}>
      <FaBars className="faIcon" />
     </button>
    </div>

    {/* <img
      src="https://res.cloudinary.com/elpawl-llc/image/upload/v1657399779/Jeffrey_R._Lessin_Associates_P.C._1_tyxapa.png"
      alt="elpawl"
      className='logo'
     /> */}
    <div className="navbar-holder">
     <div className="logo-div"></div>

     <Tabs
      className={classes.nav_links}
      value={value}
      onChange={handleChange}
      centered
     >
      {links.map((link) => {
       const { id, text, url } = link
       return (
        <Tab label={text} to={url} component={Link}>
         {value}
        </Tab>
       )
      })}
     </Tabs>
    </div>

    <a href="tel:+2155991400" className="call-toggle">
     <CallIcon />
    </a>

    {/* <ul className="nav-links">
     {links.map((link) => {
      const { id, text, url } = link
      return (
       <li key={id}>
        <Link to={url}> {text} </Link>
       </li>
      )
     })}
    </ul> */}
   </div>
  </NavContainer>
 )
}

const NavContainer = styled.nav`
 height: 10rem;
 left: 0;
 display: flex;

 .navbar-holder {
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
 }

 .logo-div {
 }

 .logo {
  max-width: 100%;
  max-height: 300px;
  display: block;
  position: absolute;
  object-fit: cover;
  margin-left: 30%;
 }

 .faIcon:hover {
  opacity: 0.3;
 }
 .nav-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
 }

 .nav-header {
  display: flex;
  align-items: center;
 }
 .nav-toggle {
  background: transparent;
  border: transparent;
  color: black;
  cursor: pointer;
  svg {
   font-size: 2rem;
  }
 }
 .call-toggle {
  right: 20px;
  position: absolute;
  background: transparent;
  border: transparent;
  color: black;
  cursor: pointer;
  svg {
   font-size: 2rem;
  }
 }
 .call-toggle:hover {
  color: blue;
 }
 .nav-links {
  display: none;
 }

 .nav-links a {
  text-transform: capitalize;
  text-align: center;
  display: inline-block;
  font-weight: bold;
  margin-right: 0.5rem;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 1.2rem;

  transition: var(--mainTransition);
 }
 .nav-links a:hover {
  color: var(--primaryColor);
 }

 .btn:hover {
  opacity: 0.3;
 }

 @media (min-width: 1050px) {
  height: 18rem;

  .navbar-holder {
   height: 165px;
  }

  .nav-toggle {
   display: none;
  }

  .modal-overlay {
   display: none;
  }
  .show-modal {
   display: none;
  }
  .modal-container {
   display: none;
  }
  .close-modal-btn {
   display: none;
  }
  .nav-center {
   display: grid;
   grid-template-columns: auto 1fr auto;
   align-items: center;
   justify-content: center;
   grid-gap: 0.5rem;
  }
  .search-input {
   width: 30rem;
  }
  /* .nav-links {
   grid-column: 1/2;
   grid-row: 1/2;
  } */

  /* .social-icons {
   padding: 0.15rem;
   display: grid;
   justify-content: center;
   align-items: center;
   grid-column: 1/2;
   grid-row: 1/2;
   background-color: red;

   h4 {
    font-size: 1.2rem;
    margin-top: 0.5rem;
   }
  } */
  /* .social-icons {
   display: flex;
   li {
    margin-left: 1rem;
   }
  }
  .social-icons a {
   color: black;
  }
  .social-icons a:hover {
   color: grey;
  } */
  .nav-links {
   display: flex;
   justify-content: center;
   grid-column: 1/3;
   grid-row: 3/4;

   li {
    margin: 0 0.5rem;
   }
   a {
    color: var(--clr-grey-3);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    padding: 0.5rem;
    &:hover {
     border-bottom: 2px solid var(--clr-black);
    }
   }
  }
 }

 @media (max-width: 600px) {

  .logo {
   max-width: 100%;
   max-height: 300px;
   display: block;
   position: absolute;
   object-fit: cover;
   margin-left: 0%;
  }
 }

 @media (min-width: 1280px) {
  height: 16rem;

  .navbar-holder {
   height: 200px;
  }

  .nav-links {
   grid-column: 1/3;
   grid-row: 3/4;
  }

  h4 {
   font-size: 1.2rem;
   margin-top: 0.5rem;
  }
 }
`
