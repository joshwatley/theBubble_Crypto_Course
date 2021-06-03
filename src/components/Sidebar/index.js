import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SideBarRoute} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="included" onClick={toggle}>
                        whats included?
                    </SidebarLink>
                    <SidebarLink to="mission" onClick={toggle}>
                        our mission
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        about us
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        contact us
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/buynow" onClick={toggle}>
                        buy now
                    </SideBarRoute>
                </SideBtnWrap>


            </SidebarWrapper>


        </SidebarContainer>
    )
}

export default Sidebar
