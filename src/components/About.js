import React from "react"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const Background = styled.div`
  height: 80%;
  background-color: blue;
  animation: 1s ${fadeIn} ease-out;
`

export const About = () => {
  return <Background>AYO</Background>
}
