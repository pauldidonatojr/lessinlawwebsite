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
height: 50vh;
width: 100%;
display: grid;
`
export default HomePage
