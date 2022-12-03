import React from "react";
import styled from "styled-components";

import { Logo, PhoneIcon } from "./icons";
import { Container } from "./styles";

const Header = styled.header`
  background: linear-gradient(0deg, #464341 0%, #010101 100%);
  color: #ffffff;

  ${Container} {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const HomeLink = styled.a`
  width: 213px;
  color: #ffffff;
  transition: color 0.2s ease;


  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const PhoneText = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

const PhoneLink = styled.a`
  font-weight: 500;
  font-size: 24px;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  transition: color 0.2s ease-in;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
  }

  .icon {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export default function Navbar() {
  return (
    <Header>
      <Container>
        <HomeLink href="/">
          <Logo width="100%" height="auto" />
        </HomeLink>
        <PhoneLink href="tel:+74954954954">
          <PhoneIcon />
          <PhoneText>+7 (495) 495-49-54</PhoneText>
        </PhoneLink>
      </Container>
    </Header>
  );
}
