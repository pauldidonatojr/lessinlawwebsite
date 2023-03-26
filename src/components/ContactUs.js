import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import { Card } from '@material-ui/core';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

import CallIcon from '@mui/icons-material/Call';



const ContactUs = () => {
  return (
    <Wrapper>


      <div className='dataHolder'>


        <div className='backimage'>
          <img src='/pen.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover' }}></img>
        </div>

        <div className='transparentBackground'></div>
        <div className='header'>
              Contact Us
            </div>
      </div>
      <div className='contactus-main'>

      <div className='infoholder'>
        <Box className='hold1'>
         <h2>Call a Pennsylvania Personal Injury Lawyer</h2>
         <p style={{color:'white'}}>If you have experienced discrimination, police misconduct or other violations of your civil rights, you do have recourse. Our Philadelphia attorneys are available to advise you and help you take action to uphold your rights and obtain compensation for your damages and losses. With more than 60 years of combined experience, our lawyers are aggressive advocates who do not give up. Call us today.

You pay no legal fees unless we win. Conveniently located across from City Hall in downtown Philadelphia.

The use of the Internet or this form for communication with the firm or any individual member of the firm does not establish an attorney-client relationship. Confidential or time-sensitive information should not be sent through this form.

</p>
<a style={{ color: 'black' }} href="tel:+2155991400">
      <div style={{ justifyContent :'center',display:'grid'}}>
      <h2 style={{color: 'white'}}>CALL US NOW</h2>
      <div style={{display: 'flex'}}>
      <CallIcon style={{ fontSize: '200%', marginRight: '0px',color:'white'}}/>
      <p style={{color: 'white',marginLeft:'02%',fontSize:'28px'}}>215-599-1400</p>
      </div>
      </div>
      </a>
        </Box>
         </div>

      <div className='formholder'>
        <div className='questiontitle'>
          <h2 style={{fontSize:'32px',  fontFamily: 'optima'}}>WHAT CAN WE HELP YOU WITH ?</h2>
        </div>

        <hr  className='line'style={{
    height: '.1',
    borderColor : '#DDDDDD',
    width:'70%',
  display: 'flex',
  marginLeft:'15%',
                   }}/>

        <div className='subTitle'>
              <h3 style={{fontFamily: 'Optima' ,fontSize:'20px'}}>CONTACT DETAILS</h3>
        </div>
        <div className='input-field'>
        <input  style={{fontFamily: 'Lato, sans-serif'}} className='input-item'  type="text" name="name" placeholder='Full Name'/>
        <input className='input-item'  type="text" name="name" placeholder='Email'/>
        <input  className='input-item'  type="text" name="name" placeholder='Mobile Phone'/>
        </div>

        <hr  className='line'style={{
    height: .1,
    borderColor : '#DDDDDD',
    width:'70%',
  display: 'flex',
  marginLeft:'15%',
                   }}/>
      <div className='messageTitle'>

       <h3 style={{fontFamily: 'Optima',fontSize:'20px'}}>MESSAGE</h3>
      </div>
      <div className='messageAreaHolder'>
      <input className='messageArea' type="textarea"
          name="textValue"
          placeholder='Message'
        />
      </div>
      <div className='buttonHolder'>
      <Button className = 'submitButton'variant="contained">Submit</Button>
      </div>
      </div>
      </div>

      <Footer />
    </Wrapper>
  )
}


export default ContactUs

const Wrapper = styled.section`
 height: 100vh;
 width: 100%;

.messageAreaHolder{
  height:100%;
  width:100%;
  display: flex;
  justify-content: center;

}
.messageArea{

  height:200px;
  width:72%;
  margin-left:5%;
  margin-bottom:2.5%;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  border-radius:2px;
}
.questiontitle{
  align-items: center;
  margin:auto;
  margin-top:05%;
  margin-bottom:03%;
  padding:02%;
  display: flex;
  justify-content: center;
  font-family: "Optima";
  color: #000;
  padding: 0;
  text-transform: uppercase;
  font-weight: normal;


}


.subTitle{

  margin-top:2%;
  display: flex;
  justify-content: center;

}
.input-field{
  height:100%;
  width:75%;
  display: grid;
  margin-left:15%;
  margin-bottom:2.5%;
}

.input-item{
  font-size: 18px;
  color: black;
  font-family: Lato, sans-serif;
  font-weight: 300;
  margin:02%;
  padding:02%;
  border-radius:3px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  font-family: Lato, sans-serif;

}


.messageTitle{
  display: flex;
  justify-content: center;
  margin-top:2.5%;
}
.submitButton{
  margin:05%;
  height:25%;
  width:25%;
  border-radius:10px;
  padding:02%;
  //
  background-color: #464645;
    color: #ffffff;
    font-family: optima;
    letter-spacing: 2px;
    font-size: 12px;
    font-weight: 700;
  //
}
.buttonHolder{
  display: flex;
  justify-content: center;

}

 .formholder{
   height: 50%;
   width:50%;
   background-color: #ececec;
 }
 .infoholder{

  padding:5%;
  height: auto;
  width:50%;
  background-color : #0a2351;
}
.hold1{

  height:100%;
  width:100%;
  padding: 5%;
  background : rgba(255,255,255,.2);
  color:white;
}

.hold1:hover{

  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);}

 .contactus-main{

  display:flex;
  height:auto;
  width:100%;
  margin-top:-5%;
 }
 .dataHolder{
    height: 50vh;
    width: 100%;
  }

.backimage{
  position: absolute;
  z-index : -1;
  height: 40vh;
  width: 100%;
}

.transparentBackground{
  width: 100%;
  height: 40vh;
  background-color: black;
  opacity: 0.3;
  position: absolute;
}


.header{
  height: 10%;
  width: 100%;
  position: relative;
  display: grid;
  place-content: center;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
 }

 .card{
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
 }
 .cardInner{
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: aliceblue;
 }

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

.screen-header-button.close {
  background: #ed1c6f;
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
  .contactus-main{

    display:grid;
    height:auto;
    width:100%;
  }

 .infoholder{

  padding:5%;
  height: auto;
  width:100%;
}
.formholder{
  height:auto;
  width:100%;
  background-color: #ececec;
}
.transparentBackground{
  width: 100%;
  height: 40vh;
}
.questiontitle h2{

  padding:02%;
}

.input-field{
  height:30%;
  width:75%;
  margin-left:15%;
}
.buttonHolder{
     margin:0%;
     padding:0%;
     background-color: black;
}
.submitButton{
}

}
`