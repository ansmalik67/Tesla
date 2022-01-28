import React from "react";
import arrowimage from "../down.png";
import styled from "styled-components";

function Section(props) {
  return (
    <Wrap
      className="main"
      bgimage={props.backgroundImg}
      SecImage={props.SectionImage}
    >
      <Head>
        <div className="GroupModel">
          <p className="Headh1">{props.title}</p>
          <p className="headbottom">{props.Description}</p>
        </div>
      </Head>
      <Buttongroup className="Buttongroup">
        <Leftbutton className="btn1">{props.leftbuttontext}</Leftbutton>
        {props.rightbuttontext && (
          <Rightbutton className="btn2">{props.rightbuttontext}</Rightbutton>
        )}
      </Buttongroup>
      <img src={arrowimage} alt="" width="30px" height="22px" />
    </Wrap>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 98.75vw;
  background-image: ${(props) => `url('/images/${props.bgimage}')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  ${'' /* background-overflow:hidden; */}
  @media screen and (max-width: 600px) {
    .Buttongroup {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  @media screen and (max-width: 400px) {
    .main {
      width: 96vw;
      color:white;
    }
  }
  img {
    animation: animateDown infinite 1.5s;
    @keyframes animateDown {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(5px);
      }
      60% {
        transform: translateY(3px);
      }
    }
  }
`;

const Head = styled.div`
  width: 80vw;
  height: 60vh;
  margin-top: 5vh;
  item-align: center;
  justify-content: center;
  .Headh1 {
    font-family: sans-serif;
    font-size: 7vh;
    text-align: center;
  }
  .headbottom {
    margin-top: -6vh;
    text-align: center;
    justify-content: center;
    color: rgb(180, 181, 184);
  }
`;
const Buttongroup = styled.div`
  display: flex;
  text-align: center;
  width: 98vw;
  flex-direction: row;
  justify-content: center;
`;

const Leftbutton = styled.button`
  width: 18vw;
  height: 6vh;
  min-width: 200px;
  min-height: 35px;
  border-radius: 100px;
  padding: 1vh;
  border: none;
  color: white;
  margin: 1vw;
  align-items: center;
  justify-content: center;
  opacity: 0.75;
  background-color: black;
  cursor: pointer;
`;

const Rightbutton = styled.button`
  width: 18vw;
  height: 6vh;
  min-width: 200px;
  min-height: 35px;
  margin: 1vw;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding: 1vh;
  border: none;
  color: black;
  opacity: 0.75;
  background-color: white;
  cursor: pointer;
`;

export default Section;
