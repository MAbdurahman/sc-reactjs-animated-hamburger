import React, {useState} from 'react';
import styled from 'styled-components';
import Logo from '../../Logo/index.jsx';
import Hamburger from '../Hamburger/index.jsx';
import {NavbarWrapper, NavLinkWrapper, StyledNavLink} from '../../../styles/Navbar.styled.jsx';


/*const Nav = styled.nav`
   width: 100%;
   height: 60px;
   padding: 0 16px;
   display: flex;
   justify-content: space-between;

   .logo {
      padding: 16px 0;
      width: 100%;
   }
`;*/

export default function Navbar() {
   const [active, setActive] = useState(false);
   const links = [
      {
         page: 'Home',
         href: '/home'
      },
      {page: 'About', href: '/about'},
      {page: 'Products', href: '/products'},
      {
         page: 'Contact',
         href: '/contact'
      },
      {page: 'Get Started', href: '/sign-in'}
   ];
   return (
      <section className='utils-container-fluid navbar-section'>
         <div className='utils-container'>
            <NavbarWrapper>
               <div className='logo__brand'>
                  <Logo />
                  <span className='logo__brand--color'>e-Mart</span>
               </div>
               <Hamburger />
               <NavLinkWrapper active={active}>
                  {links.map((link) => (
                     <StyledNavLink
                        activeclassname='active'
                        key={link.page}
                        to={link.href}
                        onClick={() => setActive(false)}
                     >
                        {link.page}
                     </StyledNavLink>
                  ))}
               </NavLinkWrapper>
            </NavbarWrapper>
         </div>
      </section>

   );
}