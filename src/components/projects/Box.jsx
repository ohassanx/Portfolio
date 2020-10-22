import React from "react";
import { FaGithubAlt, FaChrome } from "react-icons/fa";
import styled from "styled-components/macro";

export default function Box({
  img,
  title,
  frontEnd,
  backBnd,
  dataBase,
  css,
  host,
  repo,
  website
}) {
  return (
    <Container className="col-lg-12 col-xl-6 mb-4 animate__animated animate__fadeIn">
        <Cover img={img}>
            <UL>
              <LI>
                <BtnRepo href={repo} target="_blank" rel="noopener noreferrer">
                  <FaGithubAlt />
                  Github
                </BtnRepo>
              </LI>
              <LI>
                <BtnWebsite 
                  href={website ? website : null}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaChrome />
                  Website
                </BtnWebsite>
              </LI>
            </UL>
        </Cover>
      <Info>
        {title ? <h5>{title}</h5> : null}
        {frontEnd ? <Span>Front-End : {frontEnd}</Span> : null}
        {backBnd ? <Span>Back-End : {backBnd}</Span> : null}
        {dataBase ? <Span>Database : {dataBase}</Span> : null}
        {css ? <Span>CSS : {css}</Span> : null}
        {host ? <Span>Host : {host}</Span> : null}
      </Info>
    </Container>
  );
}

const Cover = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  padding-top: 56.5%;
  border-radius: 18px;
  position: relative;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: block;
`;

const UL = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  background-color: #34495eda;
  border-radius: 18px;
  opacity: 0;
  transition: all 0.2s ease-in;
`;

const LI = styled.li``;

const BtnRepo = styled.a`
  display: flex;
  align-items: center;
  color: white;
  background-color: #2c3e50;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 18px;
  transform: scale(0.7);
  transition: all 0.3s cubic-bezier(0.5, 1.5, 1, 1.2);
  &:hover {
    text-decoration: none;
    color: white;
    background-color: #8e44ad;
  }
`;

const BtnWebsite = styled(BtnRepo)`
  &:hover {
    background-color: #2980b9;
  }
`;

const Info = styled.div`
  background-color: #34495e;
  width: 90%;
  height: 200px;
  padding: 40px 0px 15px 0px;
  margin: -20px auto 20px auto;
  border-radius: 16px;
  text-align: center;
`;

const Container = styled.div`
  &:hover ${UL} {
    opacity: 1;
  }
  &:hover ${BtnRepo} {
    transform: scale(1);
  }
`;

const Span = styled.span`
  display: block;
  font-size: 14px;
`;

// const Filter = styled.div`
//   top: 100%;
//   border-radius: 18px;
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   background-color: #34495eda;
//   text-align: center;
//   padding-top: 25px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.2s ease-in;
// `;

// const UL = styled.ul`
//   display: flex;
//   justify-content: center;
//   list-style-type: none;
//   padding: 0;
// `;

// const BtnRepo = styled.a`
//   display: flex;
//   align-items: center;
//   color: white;
//   background-color: #2c3e50;
//   padding: 10px 15px;
//   margin: 5px;
//   border-radius: 18px;
//   transform: scale(0);
//   transition: all 0.2s cubic-bezier(0.5, 0, 0.5, 1.8) 0.2s;
//   &:hover {
//     text-decoration: none;
//     color: white;
//     background-color: #8e44ad;
//   }
// `;

// const BtnWebsite = styled(BtnRepo)`
//   &:hover {
//     text-decoration: none;
//     color: white;
//     background-color: #2980b9;
//   }
// `;

// const Cover = styled.div`
//   background-image: url(${(props) => props.img});
//   background-size: cover;
//   padding-top: 56.25%;
//   border-radius: 18px;
//   position: relative;
//   width: 100%;
// `;
// const Container = styled.div`
//   padding-top: 56.25%;
//   border-radius: 18px;
//   overflow: hidden;
//   position: relative;
//   width: 100%;
//   &:hover ${Cover} {
//     transform: scale(1.2);
//   }
//   &:hover ${Filter} {
//     top: 0;
//   }
//   &:hover ${BtnRepo} {
//     transform: scale(1);
//   }
// `;

// const Info = styled.div`
//   background-color: #34495e;
//   width: 90%;
//   height: 200px;
//   padding: 40px 0px 15px 0px;
//   margin: -20px auto 20px auto;
//   border-radius: 16px;
//   z-index: 1;
//   box-shadow: #50505070 5px 5px;
//   text-align: center;
// `;

// const Span = styled.span`
//   display: block;
//   font-size: 14px;
// `;
