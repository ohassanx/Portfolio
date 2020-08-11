import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components/macro";

export default function Nav() {
  const location = useLocation();

  return (
    <UL className="animate__animated animate__fadeIn">
      <li>
        <LinkStyled location={location} to="/">
          Home
        </LinkStyled>
      </li>
      <li>
        <LinkStyled location={location} to="/projects">
          Portfolio
        </LinkStyled>
      </li>
      <li>
        <LinkStyled location={location} to="/contact">
          Contact
        </LinkStyled>
      </li>
    </UL>
  );
}

const UL = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  margin: 30px;
  z-index: 1;
  list-style-type: none;
  display: flex;
`;

const LinkStyled = styled(Link)`
  background-color: ${props =>
    props.location.pathname === "/contact" ? "" : "#34495e"};
  color: white;
  padding: 5px 10px;
  border-radius: 8px;
  margin: 5px;
  &:hover {
    background-color: #bdc3c7;
    color: black;
    text-decoration: none;
  }
`;
