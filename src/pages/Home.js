import React from 'react'
import { Hero, Profiles } from '../components'
import styled from 'styled-components'
const HomePage = () => {
 return (
  <Wrapper>
   <Hero />
  </Wrapper>
 )
}
const Wrapper = styled.div`
 height: 90vh;
 width: 100%;
 display: grid;
 padding: 5rem;
 justify-content: center;
 align-items: center;
 background-color: blue;
`
export default HomePage
