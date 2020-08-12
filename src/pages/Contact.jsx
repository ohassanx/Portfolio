import React from "react";
import { IconContext } from "react-icons";
import { FaGithubAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import styled from "styled-components/macro";

export default function Contact() {
  return (
    <Container img={require("../assets/bg/contact.jpg")}>
      <Filter />
      <Content>
        <ContentBox>
          <h1>Contact</h1>
          <b className="d-block mb-4">
            If you want to message me regarding a job or project. You can contact me
            from below.
          </b>
          <h5>
            <IconContext.Provider
              value={{
                className:
                  "animate__animated animate__fadeInLeft animate__delay-1s",
                size: 35,
              }}
            >
              <FaWhatsapp />
            </IconContext.Provider>
            <span className="ml-2">: 07949254578 (Only WhatsApp as my number for calls is on my CV)</span>
          </h5>
          <h5>
            <IconContext.Provider
              value={{
                className:
                  "animate__animated animate__jackInTheBox animate__delay-2s",
                size: 35,
              }}
            >
              <FaGithubAlt />
            </IconContext.Provider>
            <span className="ml-2">: github.com/ohassanx</span>
          </h5>
          <h5>
            <IconContext.Provider
              value={{
                className:
                  "animate__animated animate__fadeInUp animate__delay-3s",
                size: 35,
              }}
            >
              <FaEnvelope />
            </IconContext.Provider>
            <span className="ml-2">: omarhassan2810@hotmail.com</span>
          </h5>
        </ContentBox>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${(props) => props.img});
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Filter = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
`;

const Content = styled.div`
  padding: 150px 20% 0 20%;
  display: flex;
  @media (max-width: 1200px) {
    padding: 150px 5% 0 5%;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  padding: 40px 80px;
  border-radius: 18px;
  box-sizing: border-box;
  background-color: #2d3436;
  z-index: 1;
  @media (max-width: 1200px) {
    padding: 90px 30px;
  }
`;
