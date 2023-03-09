// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
display:flex;
flex-direction:column
justify-content:center;
align-items:center;
background-color:#fff;
height:100vh;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 300;
  color: #1e293b;
  align-items: center;
  margin-top: 15px;
  padding-bottom: 12px;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 100;
  color: #334155;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 18px;
  line-height: 1.5;
`

export const Image = styled.img`
  width: 100%;
  margin-top: 12px;
  @media screen and(min-width:768px) {
    margin-bottom: 16px;
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 100;
  color: #334155;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 20px;
  line-height: 1.5;
`

export const Button = styled.button`
color:#ffff;
font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  background-color: #1f81ff;
  border: none;
  border-radius: 6px;
  margin-top: 8px;
  padding: 8px 16px;
  align-self: flex-start;
  cursor: pointer;
  outline: none;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
    align-self: center;
`
