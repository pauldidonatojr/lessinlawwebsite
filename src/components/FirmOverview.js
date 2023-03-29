import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useModalContext } from '../context/modal_context'
import Footer from '../pages/Footer'
import Header from '../pages/Header'
import { Card } from '@material-ui/core'
import Box from '@mui/material/Box';

const FirmOverview = () => {
  const { openModal } = useModalContext()

  const { isModalOpen, closeModal } = useModalContext()
  return (
    <div>
      <Wrapper>

        <div className='backimage'>
          <img src='/firm.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover' }}></img>
        </div>
        <div className='transparentBackground'></div>
        <div className='textHolder'>
          <div className='header'>
            Firm Overview
          </div>
        </div>

        <div className='cardsHolder'>
          <div className='cardV'>
            <h3 style={{color: 'white'}}>Philadelphia, PA Civil Rights Law Firm</h3>
            <p style={{width: '100%', height: '100%', color: 'white'}}>
            Our attorneys are dedicated to protecting the civil rights of our clients. We do this by aggressively pursuing compensation for them in court, seeking payment for the damage caused by police and other public employees.

            At the law firm of Jeffrey R. Lessin & Associates, P.C., we know law enforcement personnel throughout the Philadelphia area. Each of our civil rights lawyers has been practicing law in this region for more than 20 years, giving them a comprehensive understanding of the individuals, organizations and policies that make up the law enforcement community in this region. Our knowledge and experience are invaluable to clients who have experienced discrimination or have had their civil rights violated.
            </p>
          </div>
          <div className='cardV'>
          <h3 style={{color: 'white'}}>Our Civil Rights Matters</h3>
            <p style={{width: '100%', height: '100%', color: 'white'}}>
            Our PA civil rights practice focuses on holding public agencies responsible for the conduct of their employees. Our clients include individuals who have experienced criminal violations of their civil rights, including police misconduct, illegal search and seizure, racial profiling and assault by prison guards. We file lawsuits on behalf of these clients, seeking compensation for their damages and doing our part to force the police to reform their behavior.
            </p>
          </div>
          <div className='cardV'>
          <h3 style={{color: 'white'}}>Contingency Fees in Most Cases</h3>
            <p style={{width: '100%', height: '100%', color: 'white'}}>
            In matters like these, we work on a contingent fee basis. This means that you owe no attorneys fee until we are successful. If we are unable to obtain compensation for you, we charge no attorneys fee. In addition, the court may award, or we may receive by settlement, attorney's fees directly from the defendant, which would be a setoff to any attorney's fees that you owe us. In short, there is little to lose and much to gain by pursuing justice after experiencing police misconduct or discrimination.

            If you or a loved one has experienced a violation of your civil rights in Pennsylvania, contact our Philadelphia personal injury law firm to schedule a no-cost consultation about your situation.
            You pay no legal fees unless we win. Conveniently located across from City Hall in downtown Philadelphia.
            </p>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  )
}


export default FirmOverview

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
  position: relative
}

 .header{
  width: 100%;
  position: relative;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  text-align: center;
 }

 .innerData{
  width: 100%;
  text-align:center;
  font-size: 15px;
  font-family: sans;
  letter-spacing: 1px;
  color: white;
  font-style: italic;
  padding: 30px;
 }


.image-holder{
   display: inline;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 200%;
   position: relative;
 }
 .back-holder{
  height:100%;
  width: 100%;
  background-color : #0a2351;
  display: flex;
 }

 .cardsHolder{
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgb(20, 39, 79);
  display: grid;
  place-content: center;
 }

 .cardV{
  width: 100%;
  height: 80%;
  border-radius: 10px;
  text-align: center;
  display: grid;
  place-content: center;
  padding: 50px;
  margin-top: 20px;
  background : rgba(255,255,255,.2);
  transition: box-shadow 1s;
  transition: transform 1s;
 }

 .cardV:hover{
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}



 @media only screen and (max-width: 600px) {
  .cardV{
    height: 90%;
  }
  .cardV:hover{
    transform: scale(1);
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0);
  }
 }
`

