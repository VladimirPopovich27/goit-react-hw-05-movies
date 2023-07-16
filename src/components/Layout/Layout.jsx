import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from '@emotion/styled';
import { LayoutList, LayoutHeader } from './Layout.styled';
const StyledLink = styled(NavLink)`
  color: #212121;
  font-weight: 600;
  margin-right: 80px;

  &.active {
    color: orange;
  }
`;
const Layout = () => {
  return (
    <div>
      <LayoutHeader>
        <LayoutList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </LayoutList>
      </LayoutHeader>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
