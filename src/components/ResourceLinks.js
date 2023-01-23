import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useModalContext } from '../context/modal_context'
import Footer from './Footer'
import Header from './Header'
//import { styled } from '@mui/material/styles';
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
  return (
    <div>
      <Header />
      <Wrapper>

        <div className='backimage'>
          <img src='/links.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover' }}></img>
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
              <div className="overlay-product" />
              <div className="product-details">
              <header className='product-header'>
                  <h4 style={{ color: 'white' }}>General</h4>
                </header>
                <div className='links'>
                  <a className='link' href='http://maps.google.com/'>Google Maps</a>

                  <a className='link' href='http://www.nws.noaa.gov/'>National Weather Service</a>

                  <a className='link' href='http://maps.yahoo.com/'>Yahoo! Maps</a>

                  <a className='link' href='http://www.yellowpages.com/'>YelloPages.com</a>
                </div>
              </div>
            </article>
          </div>

          <div className="sectionCenter">
            <article className="product-card">
              <div className="overlay-product" />
              <div className="product-details">
                <header className='product-header'>
                  <h4 style={{ color: 'white' }}>Prison Guard Misconduct</h4>
                </header>
                <div className='links'>
                  <a className='link' href='http://www.nytimes.com/'>New York Times</a>

                  <a className='link' href='http://www.newspapers.com/'>Newspapers<br></br> Online</a>

                  <a className='link' href='http://www.usatoday.com/'>USA Today</a>

                  <a className='link' href='http://www.wsj.com/'>Wall Street Journal</a>

                </div>
              </div>
            </article>
          </div>

          <div className="sectionCenter">
            <article className="product-card">
              <div className="overlay-product" />
              <div className="product-details">
                <header className='product-header'>
                  <h4 style={{ color: 'white' }}>Institutional Assault</h4>
                </header>
                <div className='links'>
                  <a className='link' href='http://www.uscourts.gov/'>US Court</a>

                  <a className='link' href='http://west.thomson.com/'>West</a>

                  <a className='link' href='http://www.westlaw.com/'> West Law</a>

                </div>
              </div>
            </article>
          </div>

        </div>


        <div className='cardsHolder'>

          <div className="sectionCenter">
            <article className="product-card">
              <div className="overlay-product" />
              <div className="product-details">
                <div className='product-header'>
                  <h4 style={{ color: 'white' }}>Racial Profiling</h4>
                </div>
                <div className='links'>
                  <a  className='link' href = 'http://www.google.com/'>Google</a>
                  
                  <a  className='link' href = 'http://search.msn.com/'>MSN</a>
                  
                  <a  className='link' href = 'http://search.yahoo.com/'>Yahoo!</a>
                
              </div>
              </div>
            </article>
          </div>

          <div className="sectionCenter">
            <article className="product-card">
              <div className="overlay-product" />
              <div className="product-details">
                <header className='product-header'>
                  <h4 style={{ color: 'white' }}>Prison Guard Misconduct</h4>
                </header>
                <div className='links'>
                  <a  className='link' href = 'https://www.usa.gov/'>FirstGov</a>
                  
                  <a  className='link' href = 'http://www.loc.gov/'>Library of Congress</a>
                  
                  <a  className='link' href = 'http://www.house.gov/'>U.S. House of Representatives</a>
              
                  <a  className='link' href = 'http://www.senate.gov/'>U.S. Senate</a>
                  
                  <a  className='link' href = 'http://www.whitehouse.gov/'>White House</a>
              
              </div>
              </div>
            </article>
          </div>


        </div>

        {/* <Box className = 'box-container'>
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
      </Box> */}


      </Wrapper>
      <Footer />
    </div>
  )
}


export default ResourceLinks
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
  width: 100%;
  border-radius : 20px;
}
.image-card{

  z-index: -1;
  position:relative;
  height: 100%;
  width: 100%;

}
.link {
  width: 100%;
  text-decoration: none;
  border-radius: 10px;
  color : white;
  font-size: 15px;
  display: grid;
  place-content: center;
  text-align: center;
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
    display : grid;
    padding : 10px;
    width: 100%;
    height: 90%;
 }
 
 .article-holder{
     height: 100%;
     width: 100%;
     color: white;
     border-bottom: 2px solid #dadada;
     border-color: 'white';
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





 
 .sectionCenter {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  background-color: var(--blue);
  color: cornsilk;
}

.product-card {
  display: grid;
  height: 70vh;
  width: 50vh;
  margin-top: 4rem;
  margin-bottom: 1rem;
  /* transition: all 0.7s cubic-bezier(0.895, 0.03, 0.685, 0.22); */
  transition: box-shadow 0.3s;
  background-color: rgb(20, 39, 79);
  &:hover{
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08),
    0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14); 
  }
}

.card-image{
  object-fit:cover;
  height: 70vh;
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
    height: 70vh;
    width: 50vh;
    position: relative;
}


.overlay-product{
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: black;
    z-index: 1;
    height: 70vh;
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
  .cardsHolder{
    display: grid;
   }
 }
`

