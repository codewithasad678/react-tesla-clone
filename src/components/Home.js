import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section 
          title="Model S"
          description= "Order Online for Touchless Delivery"
          backgroud= "model-s.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory"
        />

        <Section 
          title="Model Y"
          description= "Order Online for Touchless Delivery"
          backgroud= "model-y.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory"
        />

        < Section 
          title="Model 3"
          description= "Order Online for Touchless Delivery"
          backgroud= "model-3.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory"
        />

        < Section 
          title="Model X"
          description= "Order Online for Touchless Delivery"
          backgroud= "model-x.jpg"
          leftBtnText = "Custom Order"
          rightBtnText = "Existing Inventory"
        />
        
        
        < Section 
          title="Lowest Cost Panel in America"
          description= "Money Back Guarantee"
          backgroud= "solar-panel.jpg"
          leftBtnText = "Order Now"
          rightBtnText = "Learn More"
        />

               
        < Section 
          title="Solar for New Roofs"
          description= "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroud= "solar-roof.jpg"
          leftBtnText = "Order Now"
          rightBtnText = "Learn More"
        />
        
                       
        < Section 
          title="Accessories"
          description= ""
          backgroud= "Accessories.jpg"
          leftBtnText = "Snow Now"
        />
        
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;

`