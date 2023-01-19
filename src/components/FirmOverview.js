import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useModalContext } from '../context/modal_context'
import Footer from './Footer'
import Header from './Header'

const FirmOverview = () => {
    const { openModal } = useModalContext()

    const { isModalOpen, closeModal } = useModalContext()
    return (
      <div>
      <Header />
      <Wrapper>
          <div className='backimage'>
            <img src='/injury law.jpg' style={{ height: '100%', width: '100%', objectFit: 'cover' }}></img>
          </div>
          <div className='transparentBackground'></div>
            <div className='textHolder'>
            <div className='header'>
            Firm Overview
            </div>
            <div className='innerData'>
            Our attorneys are dedicated to protecting the civil rights of our clients. We do this by aggressively pursuing compensation for them in court, seeking payment for the damage caused by police and other public employees.<br/><br/>
            At the law firm of Jeffrey R. Lessin & Associates, P.C., we know law enforcement personnel throughout the Philadelphia area. Each of our civil rights lawyers has been practicing law in this region for more than 20 years, giving them a comprehensive understanding of the individuals, organizations and policies that make up the law enforcement community in this region. Our knowledge and experience are invaluable to clients who have experienced discrimination or have had their civil rights violated.
            </div>
            </div>

            <div className='holder2'>
            <div className='innerData2'>
            Our PA civil rights practice focuses on holding public agencies responsible for the conduct of their employees. Our clients include individuals who have experienced criminal violations of their civil rights, including police misconduct, illegal search and seizure, racial profiling and assault by prison guards. We file lawsuits on behalf of these clients, seeking compensation for their damages and doing our part to force the police to reform their behavior.
            </div>
            <img src='/personal injury.jpg' style={{ borderRadius:'20px', height: '100%', width: '100%', objectFit: 'cover' }}></img>
            </div>

            <div className='holder3'>

            <img src='/contingency fee.jpg' style={{ borderRadius:'20px', height: '100%', width: '100%', objectFit: 'cover' }}></img>
            <div className='innerData3'>
            <h3>Contingency Fees in Most Cases</h3>
            In matters like these, we work on a contingent fee basis. This means that you owe no attorneys fee until we are successful. If we are unable to obtain compensation for you, we charge no attorneys fee. In addition, the court may award, or we may receive by settlement, attorney's fees directly from the defendant, which would be a setoff to any attorney's fees that you owe us. In short, there is little to lose and much to gain by pursuing justice after experiencing police misconduct or discrimination.<br/><br/>
            If you or a loved one has experienced a violation of your civil rights in Pennsylvania, contact our Philadelphia personal injury law firm to schedule a no-cost consultation about your situation.<br/><br/>
            You pay no legal fees unless we win. Conveniently located across from City Hall in downtown Philadelphia.
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

 .holder2{
  width: 100%;
  height: 500px;
  display: flex;
  place-content: center;
  border-radius: 20px;
  padding: 20px;
}

.imageHolder2{
  width: 50%;
  height: 100%;
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
  color: black;
  font-style: italic;
  padding: 20px;
 }


 .holder3{
  width: 100%;
  height: 500px;
  display: flex;
  place-content: center;
  border-radius: 20px;
  padding: 20px;
}

.imageHolder3{
  width: 50%;
  height: 100%;
  position: absolute;
  display: grid;
  place-content: center;
  padding: 20px;
  border-radius: 20px;
}

.innerData3{
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  place-content: center;
  text-align:center;
  font-size: 15px;
  font-family: sans;
  letter-spacing: 1px;
  color: black;
  font-style: italic;
  padding: 20px;
  border-radius: 20px;
 }

 .carousel{
  height: 100%;
  width: 100%;
  position: relative;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  padding: 10px;
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

