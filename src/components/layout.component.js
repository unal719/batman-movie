import React from 'react';
import NavBarComponent from './nav-bar.component';

const Layout = ({ children }) => (
  <>
    <NavBarComponent />
      {children}
  </>
);

export default Layout;