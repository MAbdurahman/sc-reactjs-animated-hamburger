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

export const NavLinkWrapper = styled.div`
  @media (max-width: 704px) {
    display: ${(props) => (!props.active ? 'none' : 'block')};
    text-align: center;
    padding: 2rem 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
   font-weight: 800;
  transition: 0.2s;
  color: hsl(210, 0%, 98%);
  margin-left: 2rem;
   
  &:last-child {
    /*background: #007dfc;*/
    background: hsl(196.18, 77.39%, 54.9%);
    padding: 0.5rem 1rem;
    border-radius: 24px;
    &:hover {
      color: hsl(210, 0%, 98%)
    }
    &.${(props) => props.activeclassname} {
      color: hsl(210, 0%, 98%);
    }
  }

  &.${(props) => props.activeclassname} {
    color: hsl(196, 77%, 55%);
  }

  &:hover {
     color: hsl(196, 77%, 55%);
  }

  @media (max-width: 704px) {
    display: block;
    margin: 2rem auto;
  }
`;