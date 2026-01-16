import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LogoImage = styled.img`
   align-self: start;
   width: 72px;
   height: auto;
   `;


export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: hsl(210, 0%, 18%);
  padding: 1em;
  position: relative;
   z-index: 5;
  @media (max-width: 704px) {
    flex-direction: column;
    padding: 1rem;
     font-size: 1.5rem;
  }
`;