import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

function Nav() {
  return (
    <Navigation>
      <GiKnifeFork />
      <Logo to={'/'}>Deliciousss</Logo>
    </Navigation>
  );
}

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Navigation = styled.nav`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
export default Nav;
