import React from 'react';

import CoreysFace from '../assets/CoreysFace.jpeg';
import MainNavigation, {
  NavImg,
  MainNavigationLogoLink,
  MainNavigationLink,
  MainNavigationItem,
} from './NavbarStyles';

const Navbar = () => {
  return (
    <>
      <MainNavigation>
        <MainNavigationLogoLink>
          <NavImg src={CoreysFace} alt="Coreys face" />
        </MainNavigationLogoLink>
        <MainNavigationItem>
          <MainNavigationLink>
            <span>Explore</span>
          </MainNavigationLink>
        </MainNavigationItem>
      </MainNavigation>
    </>
  );
};

export default Navbar;
