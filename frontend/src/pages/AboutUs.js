import React from "react";
import { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  background: linear-gradient(to right, #0575e6, #021b79);
  width: 100%;
  height: 100%;
  text-align: center;
  color: white;
  font-size: 34px;
`;

const LogoBackground = styled.div`
  background: url("Related_Resources/Banner.png") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  height: 700px;
`;

const Revolutionary = styled.img`
  height: 400px;
  width: 1000px;
  border-radius: 50px;
`;

const Duolingo = styled.img`
  height: 400px;
  border-radius: 50px;
`;

const Img = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  transition: all 0.3s ease;
  opacity: 0;
  background-color: #8b0000;
  height: 100%;
  width: 0;
  top: 0;
  left: 0;
  border-radius: 50%;
  &:.overlayleft {
    height: 100%;
    width: 0;
    top: 0;
    left: 0;
  }
`;

const Slider = styled.div`
  position: relative;
  width: 200px;
  height 200px;
  margin: 30px;
  display: inline-block;
  &:hover{
    .overlay{
      opacity:1;
    }
  }
  &:hover{
    .overlayLeft{
      width:100%;
    }
  }

`;

const MemberRole = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
`;

const Heading = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
  left: 0;
`;
export class AboutUs extends Component {
  render() {
    return (
      <div className="center">
          <h1 className="about_header">
            What is Citizen?
          </h1>

          <p className="about_text">
          Citizen was originally conceived as an app designed to help prospective US citizens looking to pass the citizenship test in the future. The website was intended to provide information, and quizzing material designed to teach necessary information to be able to pass the test. The login and quizzing system was built from scratch and completed using Python (Flask), SQL to handle database information (SQLAlchemy and sqlite for testing), and react on the front end. Unfortunately the club handling the content creation and distribution wasn't able to provide this content, and wasn't able to continue to work on the project. As it stands, citizen is a functioning quizzing application that can track what questions users are getting wrong and having issues with. The platform is easily extensible, as questions are simply defined in JSON, and more data collection could be easily added as needed.
          </p>
      </div>
    );
  }
}

export default AboutUs;
