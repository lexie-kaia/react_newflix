import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const SHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0px 10px;
  background: #424242;
  color: white;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.2);
`;

const SUl = styled.ul`
  display: flex;
`;

const SLi = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const SLink = styled(Link)`
  display: block;
  width: 80px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? '#3498db' : 'transparent')};
  transition: border-bottom 200ms ease-in-out;
`;

const Header = (props) => {
  const { pathname } = useLocation();

  return (
    <SHeader>
      <SUl>
        <SLi>
          <SLink current={pathname === '/'} to="/">
            Movies
          </SLink>
        </SLi>
        <SLi>
          <SLink current={pathname === '/tv'} to="/tv">
            TV
          </SLink>
        </SLi>
        <SLi>
          <SLink current={pathname === '/search'} to="/search">
            Search
          </SLink>
        </SLi>
      </SUl>
    </SHeader>
  );
};

export default Header;
