import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'


const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">theBubble</NavLogo>
                <MobileIcon onClick={toggle}> 
                    <FaBars/>
                </MobileIcon> 
                <NavMenu> 
                    <NavItem>
                        <NavLinks to='included'>what's included</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='mission'>our mission</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='about'>about us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'>contact us</NavLinks>
                    </NavItem>
                    {/* <NavItem>
                        <NavLinks className="navbar-buynow" to='buy now'>buy now</NavLinks>
                    </NavItem> */}
                </NavMenu>
                <NavBtn>
                        <NavBtnLink to="/buynow">
                            buy now
                        </NavBtnLink>
                    </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
