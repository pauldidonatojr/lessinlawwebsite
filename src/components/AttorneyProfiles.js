import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Button, Fab, AddIcon, Grid, Itemm, Box, Text, Paper } from '@mui/material'
import Carousel from 'react-bootstrap/Carousel';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

function UncontrolledExample() {
  return (
    <CarouselWrapper>
      <Carousel>
        <Carousel.Item>

          <div className='dataHolder'>
            <div className='cardHolder'>
              <div className='card'>
              <img src='/human.png' className='image'/>
              <div className='header'>THOMAS A. KARPINK</div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='dataHolder'>
              <div className='cardHolder'>
              <div className='card'>
                <img src='/human.png' className='image'/>
                <div className='header'>Wrongful Detainment</div>
              </div>
              </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='dataHolder'>
              <div className='cardHolder'>
              <div className='card'>
              <img src='/human.png' className='image'/>
              <div className='header'>Excessive Force</div>
              </div>
              </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </CarouselWrapper>
  );
}

const AttorneyProfiles = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  var items = [
    {
      image: "/pen.jpg",
      name: "THOMAS A. KARPINK",
      email: "sasjl@gmail.com",
      phone: "866.920.6403",
      fax: "215.599.0120",
      intrest: "Personal Injury,Slip and Fall Injuries,Injury from dangerous Products, Medical Malpratice, Bad Faith Insurence Litigation and Disputes,Civil Rights Violation, Boating Accident Injuries, Fire Injuries",
      BarAdmission: "Pennsylvania,1986",
      Education1: "Temple University School of Law, Philadelphia,Pennsylvania J.D - 1986",
      Education2: "Temple University, Philadelphia, Pennsylvania M.B.A",
      Education3: "Penn State University College Park, Pennsylvania B.S. - 1973"
    },
    {


      image: "/pen.jpg",
      name: "THOMAS A. KARPINK",
      email: "sasjl@gmail.com",
      phone: "866.920.6403",
      fax: "215.599.0120",
      intrest: "Personal Injury,Slip and Fall Injuries,Injury from dangerous Products, Medical Malpratice, Bad Faith Insurence Litigation and Disputes,Civil Rights Violation, Boating Accident Injuries, Fire Injuries",
      BarAdmission: "Pennsylvania,1985",
      Education1: "Villanova University School of Law, Villanova, PennsylvaniaJ.D. - 1985",
      Education2: "George Washington University, Washington, District of Columbia B.A. - 1982",
      Education3: "Honors and Awards Super Lawyer, 2007 - 2010"
    },
    {
      image: "/pen.jpg",
      name: "MARK T. RICHTER",
      email: "sasjl@gmail.com",
      phone: "866.920.6403",
      fax: "215.599.0120",
      intrest: "Personal Injury,Slip and Fall Injuries,Injury from dangerous Products, Medical Malpratice, Bad Faith Insurence Litigation and Disputes,Civil Rights Violation, Boating Accident Injuries, Fire Injuries",
      BarAdmission: "Pennsylvania, 1985",
      Education1: "Villanova University School of Law, Villanova, PennsylvaniaJ.D. - 1985",
      Education2: "Temple University, Philadelphia, Pennsylvania B.A. - 1982",
      Education3: "Super Lawyers, 2008 - 2010"
    },
  ]

  return (

    <div>
      <Header />
      <Wrapper>
          <div className='backimage'>
            <img src='/attorney.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover' }}></img>
          </div>
          <div className='transparentBackground'></div>
            <div className='textHolder'>
            <div className='header'>
            PENNSYLVANIA CIVIL RIGHTS ATTORNEYS
            </div>
            <div className='innerData'>Our team of lawyers provides experience, determination and a commitment to pursuing the best possible outcome in civil rights matters. If you have experienced police brutality, assault in prison, false arrest or other violations of your constitutional rights, you have options. Our Pennsylvania law firm can file suit against the at-fault agency, police department or prison and seek compensation for the damages you suffered.<br/>Our attorneys are long-time legal practitioners in the Philadelphia area. We are familiar with local law enforcement agencies and use this knowledge to help clients as they seek justice.</div>
            </div>
            <div className='carousel'>
              <div className='transparentBackgroundC'/>
              <h3 style={{color: 'white', width: '100%', height: '100%', textAlign: 'center'}}>Our Attorneys</h3>
              <UncontrolledExample />
            </div>
            <div className='textHolder2'>
            <div className='imageHolder2'>
            <img src='/attorney.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '20px' }}></img>
            </div>
            <div className='innerData2'>Contact our Philadelphia civil rights law firm to schedule a no-cost consultation if you or a loved one has experienced a violation of your civil rights in Pennsylvania.<br/>You pay no legal fees unless we win. Conveniently located across from City Hall in downtown Philadelphia.</div>
            </div>
      </Wrapper>
      <Footer />
    </div>
  )
}


export default AttorneyProfiles
const CarouselWrapper = styled.div`
width: 100%;
height: 100%;

.dataHolder{
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
}

.cardHolder{
  width: 70rem;
  height: 30rem;
}

.card{
  width: 100%;
  height: 80%;
  border-radius: 10px;
}

.image{
  position: absolute;
  width: 30%;
  height: 100%;
  object-fit: cover;
  transition: filter 1s;
  border-radius: 20px; 
  padding: 30px;
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
 
`


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
  background-color: rgb(20, 39, 79);
}

.imageHolder2{
  width: 50%;
  height: 100%;
  padding: 20px;
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
  color: white;
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
 }

 

.transparentBackgroundC{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(20, 39, 79);
  
  z-index: -1;
}


 @media only screen and (max-width: 600px) {
  height: 100vh;
  width: 100%;

  .dataHolder{
    height: 150vh;
    width: 100%;
  }

  .transparentBackground{
  width: 100%;
  height: 150vh;
  background-color: black;
  opacity: 0.8;
  position: absolute;
}

.carousel{
  height: 100%;
  width: 100%;
  position: relative;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
 }

 .textHolder2{
  display: grid;
 }

 }
`