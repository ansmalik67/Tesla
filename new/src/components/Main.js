import React from "react";
import Section from "./Section";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

function Main() {
  return (
    <Container>
      <Header />
      <Section
        title="Model 3"
        Description="Order Online For Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftbuttontext="Custom order"
        rightbuttontext="Existing Inventory"
        SectionImage="down.png"
      />
      <Section
        title="Model Y"
        Description="Order Online For Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftbuttontext="Custom order"
        rightbuttontext="Existing Inventory"
      />
      <Section
        title="Model S"
        Description="Order Online For Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftbuttontext="Custom order"
        rightbuttontext="Existing Inventory"
      />

      <Section
        title="Model X"
        Description="Order Online For Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftbuttontext="Custom order"
        rightbuttontext="Existing Inventory"
      />

      <Section
        title="Solar Panels"
        Description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftbuttontext="Order Now"
        rightbuttontext="Learn More"
      />

      <Section
        title="Solar Roof"
        Description="Produce Clean Energy From your Roof"
        backgroundImg="solar-roof.jpg"
        leftbuttontext="Order Now"
        rightbuttontext="Learn More"
      /> 

      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftbuttontext="Shop Now"
      />

      <Footer />
    </Container>
  );
}
const Container = styled.div`
    width= 100vw;
    height = 100vh;
    position: absolute;
    

`;

export default Main;
