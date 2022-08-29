import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/CarSlice';
import { useSelector } from 'react-redux';
const Header = () => {
  const [burgerStatus,setBurgerStatus]  = useState(false);
  const cars = useSelector(selectCars)
  return (
    <Container>
      <a>
        <img src='./images/logo.svg'  alt='logo'/>
      </a>
      <Menu>
        {cars && cars.map((item,index) => 
          <a key={index} href='#'>{item}</a>
        )}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          {cars && cars.map((item,index) => 
          <li><a key={index} href='#'>{item}</a></li>
        )}
        <li><a href='#'>Exiting Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-In</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadaster</a></li>
      </BurgerNav>
    </Container>

  )
}

export default Header
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  overflow-x: hidden;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  @media(max-width:786px){
    justify-content: space-between;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width:786px){
    display: none;
  }
`


const RightMenu = styled.div`
display: flex;
align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right:10px;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav= styled.div`
  position:fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  padding: 20px 15px;
  width: 300px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.2s ease;
  transform: ${(props) => props.show ? 'translateX(0)' : 'translateX(100%)'};

  li{
    list-style-type: none;
    padding: 10px 40px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
      a{
        font-weight: 600;
      }
  }
  
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`

  text-align: end;
`