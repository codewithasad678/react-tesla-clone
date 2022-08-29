import React from 'react';
import styled from 'styled-components';
import Fade from "react-reveal/Fade";

const Section = ({title,description,backgroud,leftBtnText,rightBtnText}) => {
  return (
    <Wrap bgImage = {backgroud}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
        <ButtonGroup>
            <LeftButton>
              {leftBtnText}
            </LeftButton>
            {
              rightBtnText && 
              <RightButton>
                {rightBtnText}
              </RightButton>
            }
        </ButtonGroup>
        </Fade>
        <DownArrow src="./images/down-arrow.svg" />

      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
` 
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 786px){
    flex-direction: column;
  }
  
`

const LeftButton = styled.div`
  background-color: rgba(23,26,32,0.8);
  height: 40px;
  width: 256px;   
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  margin-top: 8px;
  margin: 5px 5px;
  cursor: pointer;
`

const RightButton = styled(LeftButton)`
background-color: white;
color:rgba(23,26,32,0.8);
`
const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animationDown infinite 1.5s;
  overflow: hidden;

`
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`