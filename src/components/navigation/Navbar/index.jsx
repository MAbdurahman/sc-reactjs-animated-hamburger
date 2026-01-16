import styled from 'styled-components';
import Logo from '../../Logo/index.jsx';
import Hamburger from '../Hamburger/index.jsx';
import {NavbarWrapper} from '../../../styles/Navbar.styled.jsx';


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

   return (
      <section className='utils-container-fluid navbar-section'>
         <div className='utils-container'>
            <NavbarWrapper>
               <div className='logo__brand'>
                  <Logo />
                  <span className='logo__brand--color'>e-Mart</span>
               </div>

            </NavbarWrapper>
         </div>
      </section>

   );
}