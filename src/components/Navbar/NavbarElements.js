import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'


export const Nav = styled.nav`
    background: white;
    height: 80px;
    width: 100%;
//  margin-top: -80px;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    // max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
    color: grey;
    text-align: left;
    justify-self: left;
    left:20%;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    //  margin-left: 24px;
    // font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon =  styled.div`
display: none;

@media screen and (max-width: 785px){
    display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: grey;
}
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 785px){
        display:none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
    color: grey;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 785px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkRouter)`
    border-radius : 50px;
    background: #809FFF;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: 1px solid #809FFF;

    
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        border: 1px solid #809FFF;
        background: #fff;
        color: grey;
    }
`;