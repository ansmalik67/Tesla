import React from "react";
import styled from "styled-components";


function Footer() {
  return (
    <Foooter>
      <ul>
        <li>Tesla &copy; {new Date().getFullYear()}</li>
        <li>Privacy and Legal</li>
        <li>Contact</li>
        <li>Careers</li>
        <li>News</li>
        <li>Engage</li>
        <li>Locations</li>
      </ul>
    </Foooter>
  );
}
const Foooter = styled.div`
width: 95vw;
  ul {
    display: flex;
    flex-direction: row;
    font-size: 10px;
    align-items: center;
    justify-content: center;
  }
  li {
    list-style: none;
    display: flex;
    margin: 0.7vw;
    padding: 0.5vw;
  }
`;
export default Footer;
