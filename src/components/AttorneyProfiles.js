import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
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

                <div className='imageC'>
                  <img src='/pen.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                </div>
                <div className='dataT'>
                  <div className='name'><h3>MARK T. RICHTER</h3></div>
                  <div className='interest'><h3>Specialization</h3>Personal Injury,Slip and Fall Injuries,Injury from dangerous Products, Medical Malpratice, Bad Faith Insurence Litigation and Disputes,Civil Rights Violation, Boating Accident Injuries, Fire Injuries</div>
                  <div className='contact'><CallIcon/><EmailIcon/></div>
                </div>

              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className='dataHolder'>
            <div className='cardHolder'>
              <div className='card'>

              <div className='imageC'>
                  <img src='/pen.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                </div>
                <div className='dataT'>
                  <div className='name'><h3>MARK T. RICHTER</h3></div>
                  <div className='interest'><h3>Specialization</h3>Personal Injury,Slip and Fall Injuries,Injury from dangerous Products, Medical Malpratice, Bad Faith Insurence Litigation and Disputes,Civil Rights Violation, Boating Accident Injuries, Fire Injuries</div>
                  <div className='contact'><CallIcon/><EmailIcon/></div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>


        <Carousel.Item>
          <div className='dataHolder'>
            <div className='cardHolder'>
              <div className='card'>

              <div className='imageC'>
                  <img src='/pen.jpg' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                </div>
                <div className='dataT'>
                  <div className='name'><h3>MARK T. RICHTER</h3></div>
                  <div className='interest'><h3>Specialization</h3>Personal Injury,Slip and Fall Injuries,Injury from dangerous Products, Medical Malpratice, Bad Faith Insurence Litigation and Disputes,Civil Rights Violation, Boating Accident Injuries, Fire Injuries</div>
                  <div className='contact'><CallIcon/><EmailIcon/></div>
                </div>
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
            ATTORNEYS
          </div>
          <div className='innerData'>Our team of lawyers provides experience, determination and a commitment to pursuing the best possible outcome in civil rights matters. If you have experienced police brutality, assault in prison, false arrest or other violations of your constitutional rights, you have options. Our Pennsylvania law firm can file suit against the at-fault agency, police department or prison and seek compensation for the damages you suffered.<br />Our attorneys are long-time legal practitioners in the Philadelphia area. We are familiar with local law enforcement agencies and use this knowledge to help clients as they seek justice.</div>
        </div>
        <div className='carousel'>
          <div className='transparentBackgroundC' />
          <h3 style={{ color: 'white', width: '100%', height: '100%', textAlign: 'center' }}>Our Attorneys</h3>
          <UncontrolledExample />
        </div>
        <div className='textHolder2'>
          <div className='imageHolder2'>
            <img src='/attorney.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '20px' }}></img>
          </div>
          <div className='innerData2'>Contact our Philadelphia civil rights law firm to schedule a no-cost consultation if you or a loved one has experienced a violation of your civil rights in Pennsylvania.<br />You pay no legal fees unless we win. Conveniently located across from City Hall in downtown Philadelphia.</div>
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
  height: 100%;
  border-radius: 10px;
  background : rgba(255,255,255,.2);
  display: flex;
  justify-content: flex-start;
  place-content: center;
}

.imageC{
  position: relative;
  width: 30%;
  height: 50%;
  border-radius: 20px;
  padding: 30px;
  display: flex;
}



  .dataT{
    height: 70%;
    width: 100%;
  }

  .name{
    font-size: large;
    width: 100%;
    height: 20%;
    display: grid;
    place-content: center;
    color: white;
    position: relative;
  }

  .interest{
    position: relative;
    width: 100%;
    height: 50%;
    font-size: 15px;
    color: white;
    padding: 20px;
  }

  .contact{
    position: relative;
    width: 100%;
    height: 30%;
    display: flex;
    place-content: center;
  }


  @media only screen and (max-width: 600px) {
    .cardHolder{
      width: 100%;
      height: 30rem;
    }
    .card{
      width: 100%;
      height: 90%;
    }
    .interest{
      display: none;
    }
    .imageC{
      width: 100%;
      height: 50%;
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
  
  .transparentBackground{
    opacity: 0.6;
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
  height: 500px;
  display: grid;
 }

 .imageHolder2{
  margin-top: 10px;
  width: 100%;
 }

 .innerData2{
  width: 100%;
 }

 }
`