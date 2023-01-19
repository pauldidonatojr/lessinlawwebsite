import styleM from 'styled-components'
import React, { useState, useEffect } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useModalContext } from '../context/modal_context'
import Footer from './Footer'
import Header from './Header'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ResourceLinks = () => {
  const { openModal } = useModalContext()

  const { isModalOpen, closeModal } = useModalContext()
  return (
    <Wrapper>
      <Header />
      <div className='image-holder'>
        <img src='./links.jpg' style={{ position: 'relative', width: '100%', height: '50vh', top: '0px', left: '0px', objectFit: 'cover' }}></img>
        <div
          className='info-holder'
        >

          <div className='article-holder'>
            <h2 style={{ opacity: '1' }}> Resource Links </h2>
          </div>
        </div>
      </div>

      <Box className = 'box-container'>
        <Grid style ={{marginLeft :'15%',marginTop : '2%'}} container spacing={2}>
        <Grid style={{borderRadius:'25px'}} item xs={4}>
            <Item className='grid-item1'><div className='titlebar'>
                 <h2 style = {{color : 'white'}}>General</h2>
              </div>
              <div className='links'>
                  <a  className='link' href = 'http://maps.google.com/'>Google Maps</a>
                  
                  <a  className='link' href = 'http://www.nws.noaa.gov/'>National Weather Service</a>
                  
                  <a  className='link' href = 'http://maps.yahoo.com/'>Yahoo! Maps</a>
                  
                  <a  className='link' href = 'http://www.yellowpages.com/'>YelloPages.com</a>
              </div>
              </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className='grid-item2'>
              <div className='titlebar' style= {{display : 'grid',padding:'10%'}}>
                 <h2 style = {{color : 'white'}}>News</h2>
              </div>
              <div className='links'>
                  <a  className='link' href = 'http://www.nytimes.com/'>New York Times</a>
                  
                  <a  className='link' href = 'http://www.newspapers.com/'>Newspapers<br></br> Online</a>
                  
                  <a  className='link' href = 'http://www.usatoday.com/'>USA Today</a>
                  
                  <a  className='link' href = 'http://www.wsj.com/'>Wall Street Journal</a>
                  
              </div>
              </Item>
          </Grid>
          
          
        </Grid>

      <br></br>
        
        <Grid style ={{marginLeft :'15%'}} container spacing={2}>
        <Grid item xs={4}>
            <Item className='grid-item3'>
              <div className='titlebar'>
                 <h2 style = {{color : 'white'}}>Legal</h2>
              </div>
              <div className='links'>
                  <a  className='link' href = 'http://www.uscourts.gov/'>US Court</a>
                  
                  <a  className='link' href = 'http://west.thomson.com/'>West</a>
                  
                  <a  className='link' href = 'http://www.westlaw.com/'> West Law</a>
                  
              </div>

            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item className='grid-item4' ><div className='titlebar'>
                 <h2 style = {{color : 'white'}}>Search Engines</h2>
              </div>
              <div className='links'>
                  <a  className='link' href = 'http://www.google.com/'>Google</a>
                  
                  <a  className='link' href = 'http://search.msn.com/'>MSN</a>
                  
                  <a  className='link' href = 'http://search.yahoo.com/'>Yahoo!</a>
                
              </div>
              </Item>
          </Grid>
          </Grid>
        <br></br>
        <Grid style ={{marginLeft :'31%'}}container spacing={2}>
        
            
        <Grid item xs={4}>
            <Item className='grid-item5'>
              
             <div className='titlebar'>
                 <h2 style = {{ color : 'white'}}>Government</h2>
              </div>
              <div className='links'>
                  <a  className='link' href = 'https://www.usa.gov/'>FirstGov</a>
                  
                  <a  className='link' href = 'http://www.loc.gov/'>Library of Congress</a>
                  
                  <a  className='link' href = 'http://www.house.gov/'>U.S. House of Representatives</a>
              
                  <a  className='link' href = 'http://www.senate.gov/'>U.S. Senate</a>
                  
                  <a  className='link' href = 'http://www.whitehouse.gov/'>White House</a>
              
              </div>
              </Item>
          </Grid>
          </Grid> 
      </Box>

      <Footer />
    </Wrapper>
  )
}


export default ResourceLinks
const Wrapper = styleM.section`
height: 100vh;
width: 100%;
 

.image-holder{
   display: inline;
   justify-content: center;
   align-items: center; 
   width: 100%;
   height: auto;
   position: relative;
 }
 .image-news{
  padding : 1%;
  width : 100%;
  z-index : -1;
}
.grid-item1{

  border-radius:10px;
  padding:15%;
  background-color : #0a2351;

}
.grid-item2{

  border-radius:10px;
  padding:15%;
  background-color : #0a2351;

}

.grid-item3{

  border-radius:10px;
  padding:15%;
  background-color : #0a2351;

}


.grid-item4{

  border-radius:10px;
  padding:15%;
  background-color : #0a2351;

}

.grid-item5{

  border-radius:10px;
  padding:15%;
  background-color : #0a2351;
}
.back-image{

  position: absolute;
  height: 100%;
  width: 100%;
}
.box-container{
  flexGrow: 2;
  background-color ;
  padding: 1%;
  width: 80%;
  border-radius : 30px;
  margin-left: 10%;

}
.image-card{

  z-index: -1;
  position:relative;
  height: 100%;
  width: 100%;

}
.link {

  text-decoration: none;
  padding:5%;
  border-radius: 10px;
  margin: 1%;
  font-family : sans;
  font-style: italic;
  color : white;
  font-size:25px;
  box-shadow: 1px 1px 2px(blue);
}
.links{

  padding : 10%;
  text-color : black;
}

.link:hover{
   
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  background-color:brown;
}
 
 .info-holder{
   top: 0;
   display: grid;
   position: absolute;
   height: 50%;
   width: 100%;
   justify-content: center;
   place-content: center;
   align-items: center;
   border-radius: 25px;
   z-index: 1;
 }
 .titlebar{
    height : 25%;
    width : 100%;
    text-align: center;
    display : grid;
    padding:10%;
  }

 .links{

  
    font-size : 30px;
    display : grid;
    padding : 2%;


 }
 
 .article-holder{
     height: 100%;
     width: 100%;
     color: white;
     borderBottom: 2px solid #dadada;
     borderColor: 'white';
     opacity: 1;
     
 }

 .form-holder{
   display: grid;
   justify-content: center;
   align-items: center; 
   width: 100%;
   height: 120vh;
   position: relative;
 }


 .form {
   background-color: #15172b;
   border-radius: 20px;
   box-sizing: border-box;
   height: auto;
   padding: 20px;
   width: 320px;
 }
 
 .title {
   color: #eee;
   font-family: sans-serif;
   font-size: 36px;
   font-weight: 600;
   margin-top: 30px;
 }
 
 .subtitle {
   color: #eee;
   font-family: sans-serif;
   font-size: 16px;
   font-weight: 600;
   margin-top: 10px;
 }
 
 .input-container {
   height: 50px;
   position: relative;
   width: 100%;
 }

 .input-container2 {
   height: 100px;
   position: relative;
   width: 100%;
   margin-top: 30px;
 }
 
 .ic1 {
   margin-top: 40px;
 }
 
 .ic2 {
   margin-top: 30px;
 }
 
 .input {
   background-color: #303245;
   border-radius: 12px;
   border: 0;
   box-sizing: border-box;
   color: #eee;
   font-size: 18px;
   height: 100%;
   outline: 0;
   padding: 4px 20px 0;
   width: 100%;
 }
 
 .cut {
   background-color: #15172b;
   border-radius: 10px;
   height: 20px;
   left: 20px;
   position: absolute;
   top: -20px;
   transform: translateY(0);
   transition: transform 200ms;
   width: 76px;
 }
 
 .cut-short {
   width: 70px;
 }
 
 .input:focus ~ .cut,
 .input:not(:placeholder-shown) ~ .cut {
   transform: translateY(8px);
 }
 
 .placeholder {
   color: #65657b;
   font-family: sans-serif;
   left: 20px;
   line-height: 14px;
   pointer-events: none;
   position: absolute;
   transform-origin: 0 50%;
   transition: transform 200ms, color 200ms;
   top: 20px;
 }
 
 .input:focus ~ .placeholder,
 .input:not(:placeholder-shown) ~ .placeholder {
   transform: translateY(-30px) translateX(10px) scale(0.75);
 }
 
 .input:not(:placeholder-shown) ~ .placeholder {
   color: #808097;
 }
 
 .input:focus ~ .placeholder {
   color: #dc2f55;
 }
 
 .submit {
   background-color: #08d;
   border-radius: 12px;
   border: 0;
   box-sizing: border-box;
   color: #eee;
   cursor: pointer;
   font-size: 18px;
   height: 50px;
   margin-top: 38px;
   // outline: 0;
   text-align: center;
   width: 100%;
 }
 
 .submit:active {
   background-color: #06b;
 }

 @media only screen and (max-width: 600px) {
 
 }
`

