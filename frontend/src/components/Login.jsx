import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router";

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="linkedin logo" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
    </Container>
  );
};

const Container = styled.div``;

const Nav = styled.nav`
  max-width: 1128px;
  margin: 0 auto;
  padding: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 6rem;
  }
`;

const Join = styled.a`
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
  margin-right: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 600;
  color: #0a66c2;
  transition-duration: 167ms;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    cursor: pointer;
  }
`;

export default Login;
