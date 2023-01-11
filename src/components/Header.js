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

const Header = () => {
    return (
        <Wrapper>
            <div className='top'>
                <div className='nameHolder'>
                    <h4 className='companyName'>
                        {' '}
                        Jeffrey R. Lessin & Associates, P.C.{' '}
                    </h4>
                    <p className='companyDetails'>
                        {' '}
                        Pennsylvania Trial Lawyers . Philadelphia Civil Rights Attorneys{' '}
                    </p>
                </div>
                <div className="contactButtons">
                    <div className='callButtonHolder'>
                        <a style={{ color: 'black' }} href="tel:+2155991400">
                            <div className='callButtonHolderInner'>
                                <CallIcon style={{ fontSize: 'large', marginRight: '5px' }} /><div>{' '}Phone</div>
                            </div>
                            <div style={{ marginTop: '5px' }}>+215591400</div>
                        </a>
                    </div>
                    <div className='emailButtonHolder'>
                        <div className='callButtonHolder'>
                            <a style={{ color: 'black' }} href="mailto:info@lessinlaw.com">
                                <div className='callButtonHolderInner'>
                                    <EmailIcon style={{ fontSize: 'large', marginRight: '5px' }} /><div>{' '}Email</div>
                                </div>
                                <div style={{ marginTop: '5px' }}>info@lessinlaw.com</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className="div-1">
                    <ul>
                        <Link to='/home'><li> Home </li></Link>
                        <Link to='/firmoverview'><li> Firm Overview </li></Link>
                        <Link to='/practiceareas'><li> Practice Areas Overview </li></Link>
                        <Link to='/attorneyprofiles'><li> Attorney Profiles </li></Link>
                        <Link to='/resourcelinks'><li> Resource Links</li></Link>
                        <Link to='/communities'><li> Communities</li></Link>
                        <Link to='/contactus'><li> Contact </li></Link>
                    </ul>
                </div>
            </div>
        </Wrapper>

    )

}

const Wrapper = styles.main`
 height: 30%;
 width: 100%;
 background-color: white;

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

.companyName{
    font-family: sans;
    line-height: 150%;
    text-align: center;
    letter-spacing: .5px;
    color: black;
    margin-top: 5%;
    transition: 700ms ease;
}

.companyName:hover{
    font-variation-settings: "wght" 582; 
    letter-spacing: 1px;
    cursor: pointer;
}

.contactButtons{
    width: 70%;
    height: 100%;
    place-content: end;
    display: flex;
}

.callButtonHolder{
    height: 100%;
    width: 20%;
    text-align: center;
    place-content: center;
    align-items: center;
    display: grid;
    padding: 2rem;
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
    padding: 2rem;
}


 .bottom{
    width: 100%;
    height: 30%;
    background-color: brown;
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
     
     li {
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


  
 @media (min-width: 576px) {
  
 }

 @media only screen and (max-width: 600px) {
  .button1{
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
`

export default Header