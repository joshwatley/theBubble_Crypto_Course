import React from 'react'
import {ContactWrapper, ContactTitle, ContactText, ContactFormWrapper, ContactSmallText, ContactFormSmallDetailWrapper, ContactFormLargeDetailWrapper, ContactLargeText, ContactBtn} from './ContactElements'



function ContactSection() {
    return (
        <div>
            <ContactWrapper>
                <ContactTitle>
                    Contact Us
                </ContactTitle>
                <ContactText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqu psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna.
                </ContactText>
                <ContactFormWrapper>
                    <ContactFormSmallDetailWrapper>
                      <ContactSmallText placeholder="First Name" rows="1" placeholderTextColor="#fff"></ContactSmallText>
                    
                      <ContactSmallText id="test" rows="1" placeholder="Last Name" placeholderTextColor="#fff"></ContactSmallText>
                      
                      <ContactSmallText id="test" rows="1" placeholder="Email" placeholderTextColor="#fff"></ContactSmallText>

                      <ContactSmallText id="test" rows="1" placeholder="Mobile Number" placeholderTextColor="#fff"></ContactSmallText>
                    </ContactFormSmallDetailWrapper>

                    <ContactFormLargeDetailWrapper>
                      <ContactLargeText placeholder="Enter Your Message:" placeholderTextColor="#fff"></ContactLargeText>
                    </ContactFormLargeDetailWrapper>
                
                </ContactFormWrapper>
                <ContactBtn>Submit</ContactBtn>
            </ContactWrapper>
        </div>
    )
}

export default ContactSection
