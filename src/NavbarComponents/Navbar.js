import React from 'react';

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
          <NavImg src="../../public/assets/IMG_2697.jpeg" alt="Coreys face" />
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
