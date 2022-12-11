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
 height: 50%;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 border: 5px black solid;
`
export default HomePage
