import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import special from "../specialist/Specialist";


const NavbarContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10 1.5em;

  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#264653"};
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled(Link)`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.4);
  }
`;

const Seperator = styled.div`
  min-height: 35%;
  width: 1px;
  background-color: #fff;
`;

const Navbar = (props, { sidebarOpen, openSidebar, }) => {
  const { useTransparent } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const openSpecialist = special
  return (
    <div>
      <NavbarContainer useTransparent={useTransparent}>
        <BrandLogo />
        <AccessibilityContainer>
          {!isMobile && <AnchorLink>Specialists Portal</AnchorLink>}
          {!isMobile && <Marginer direction="horizontal" margin={10} />}
          {!isMobile && <Seperator />}
          <Marginer direction="horizontal" margin={5}/>
          <Link to="/customer/access/signup">
            <Button size={11}>Register</Button>
          </Link>
          <Marginer direction="horizontal" margin={5} />
          <Link to="/customer/access/signin">
            <Button size={11}>Login</Button>
          </Link>
        </AccessibilityContainer>
      </NavbarContainer>
    </div>);
}

export default Navbar;