import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Fab, AddIcon, Grid, Itemm, Box, Text } from '@mui/material'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import styles from 'styled-components'
import { padding } from '@mui/system';
import { Twitter } from '@mui/icons-material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { links } from '../utils/constants';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Wrapper>
            <div className='dekstop'>
                <div className='top'>
                    <div className='nameHolder'>
                        <div className='companyName'>
                            {' '}
                            Jeffrey R. Lessin & Associates, P.C.{' '}
                        </div>
                        <div className='companyDetails'>
                            {' '}
                            Pennsylvania Trial Lawyers . Philadelphia Civil Rights Attorneys{' '}
                        </div>
                    </div>
                    <div className="contactButtons">
                        <div className='callButtonHolder'>
                            <a style={{ textDecoration: 'none', color: 'black' }} href="tel:+2155991400">
                                <div className='callButtonHolderInner'>
                                    <CallIcon style={{ fontSize: 'large', marginRight: '5px' }} /><div>{' '}Phone</div>
                                </div>
                                <div style={{ marginTop: '5px' }}>+215591400</div>
                            </a>
                        </div>
                        <div className='emailButtonHolder'>
                            <div className='callButtonHolder'>
                                <a style={{ textDecoration: 'none', color: 'black' }} href="mailto:info@lessinlaw.com">
                                    <div className='callButtonHolderInner'>
                                        <EmailIcon style={{ fontSize: 'large', marginRight: '5px' }} /><div>{' '}Email</div>
                                    </div>
                                    <div style={{ marginTop: '5px' }}>info@lessinlaw.com</div>
                                </a>
                            </div>
                        </div>



                        <div className='mobContactButtons'>

                            <a style={{ textDecoration: 'none', color: 'black' }} href="mailto:info@lessinlaw.com">
                                <EmailIcon style={{ fontSize: 30, marginRight: '10px' }} />
                            </a>

                            <a style={{ textDecoration: 'none', color: 'black' }} href="tel:+2155991400">
                                <CallIcon style={{ fontSize: 30, marginLeft: '10px' }} />
                            </a>

                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <div className="div-1">
                        <ul>
                            <Link style={{ textDecoration: 'none' }} to='/home'><li> Home </li></Link>
                            <Link style={{ textDecoration: 'none' }} to='/firmoverview'><li> Firm Overview </li></Link>
                            <Link style={{ textDecoration: 'none' }} to='/practiceareas'><li> Practice Areas Overview </li></Link>
                            <Link style={{ textDecoration: 'none' }} to='/attorneyprofiles'><li> Attorney Profiles </li></Link>
                            <Link style={{ textDecoration: 'none' }} to='/resourcelinks'><li> Resource Links</li></Link>
                            <Link style={{ textDecoration: 'none' }} to='/communities'><li> Communities</li></Link>
                            <Link style={{ textDecoration: 'none' }} to='/contactus'><li> Contact </li></Link>
                        </ul>
                    </div>

                    {/* Drawer for Mobile */}
                    <div className='menuMobile'>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            style={{
                                color: 'white',
                                fontWeight: 'bold'
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
                             <Link style={{textDecoration: 'none', color: 'black'}} to='/home'><MenuItem onClick={handleClose}>Home</MenuItem></Link>
                             <Link style={{textDecoration: 'none', color: 'black'}} to='/firmoverview'><MenuItem onClick={handleClose}>Firm Overview</MenuItem></Link>
                             <Link style={{textDecoration: 'none', color: 'black'}} to='/practiceareas'><MenuItem onClick={handleClose}>Practice Areas Overview</MenuItem></Link>
                             <Link style={{textDecoration: 'none', color: 'black'}} to='/attorneyprofiles'><MenuItem onClick={handleClose}>Attorney Profiles</MenuItem></Link>
                             <Link style={{textDecoration: 'none', color: 'black'}} to='/resourcelinks'><MenuItem onClick={handleClose}>Resource Links</MenuItem></Link>
                             <Link style={{textDecoration: 'none', color: 'black'}} to='/communities'><MenuItem onClick={handleClose}>Communities</MenuItem></Link>
                             <Link style={{textDecoration: 'none', color: 'black'}} to='/contactus'><MenuItem onClick={handleClose}>Contact Us</MenuItem></Link>
                        </Menu>
                    </div>

                    {/*  */}
                </div>
            </div>

        </Wrapper>
    )
}

const Wrapper = styles.main`
 height: 200px;
 width: 100%;


 .dekstop{
    width: 100%;
    height: 100%;
 }
 .tabMob{ 
    width: 100%;
    height: 100%;
 }

 .top{
    width: 100%;
    height: 70%;
    display: flex;
    
 }

.nameHolder{
    width: 30%;
    display: grid;
}
.companyDetails{
    font-size: 0.9em;
    line-height: 150%;
    text-align: center;
    letter-spacing: .5px;
    color: black;
}
.companyDetails:hover{
    cursor: pointer;
}

.companyName{
    display: grid;
    place-content: center;
    font-size: 20px;
    font-family: sans;
    line-height: 150%;
    text-align: center;
    letter-spacing: .5px;
    color: black;
    transition: 700ms ease;
}

.companyName:hover{
    font-variation-settings: "wght" 582; 
    letter-spacing: 1.5px;
    cursor: pointer;
}

.contactButtons{
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: end;
}

.callButtonHolder{
    height: 100%;
    width: 20%;
    text-align: center;
    place-content: center;
    align-items: center;
    display: grid;
}

.mobContactButtons{
    display: none;
}

.callButtonHolderInner{
    width: 100%;
    height: 100%;
    display: flex;
}

.emailButtonHolder{
    height: 100%;
    width: 20%;
    text-align: center;
    place-content: center;
    align-items: center;
    display: grid;
}

 .bottom{
    width: 100%;
    height: 30%;
    background-color: rgb(20, 39, 79);
    
 }

 .div-1 {
    flex: 1;
    height: 100%;
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
      letter-spacing: 0.10rem;
      font-size: 1rem;
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

   .menuMobile{
    visibility: hidden;
   }


  
 @media (min-width: 576px) {
  
 }

 @media only screen and (max-width: 600px) {
    height: 250px;
    .dekstop{
        
     }
     .top{
        display: grid;
     }
     .nameHolder{
        width: 100%;
        
     }
     .companyName{
        font-size: 20px;
        height: 100%;
        place-content: center;
        display: grid;
     }
     .companyDetails{
        display: none;
     }
     .div-1{
        display: none;
     }
     .contactButtons{
        width: 100%;
        place-content: center;
     }
     .callButtonHolder{
        display: none;
     }
     .emailButtonHolder{
        display: none;
     }
     .mobContactButtons{
        display: unset;
        width: 70%;
        height: 100%;
        display: flex;
        place-content: center;
     }
     .menuMobile{
        display: grid;
        place-content: center;
        visibility: visible;
        height: 100%;
       }
 }
 @media only screen and (min-width: 600px) {
 }

 @media only screen and (max-width: 768px) {
    
 }

 @media (min-width: 992px) {
 }
 @media (min-width: 1280px) {
 }
`

export default Header