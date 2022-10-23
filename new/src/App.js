// import React from "react";
// import Main from "./components/Main";
// function App() {
//   return (
//     <Routes>
//       <Route path='/' element={<Section {...props.path} />} />
//       <Route path='/modelx' element={<Section {...props.path} />} />
//       <Route path='/modely' element={<Section {...props.path} />} />
//       <Route path='/solarroof' element={<Section {...props.path} />} />
//       <Route path='/models' element={<Section {...props.path} />} />
//       <Route path='/solarpanels' element={<Section {...props.path} />} />
//     </Routes>
//   );
// }

// export default App;

import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
}

const Container = styled.div`
    width= 100vw;
    height = 100vh;
    position: absolute;
    

`;

export default App;
