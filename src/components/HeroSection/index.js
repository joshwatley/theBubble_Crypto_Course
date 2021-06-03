import React from 'react'
import logo from './../../images/cryptoLogo.png'
import {HeroContainer, HeroIntro, HeroTitle, HeroText, HeroLogo, HT, HB, HeroButton1, HeroButton2} from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            
           <HeroIntro>

            <HT>
            <HeroTitle>theBubble Presents: <br></br> theCryptoCurrencyCourse</HeroTitle>
            
            <HeroText>
                Here at theBubble we try to help teach and show people the
                possibilities getting involved with investing in CryptoCurrencies.
                We have produced a course that allows anyone, even with no experience 
                to level up their crypto currency game. <br></br><br></br>
                Drawing from year of experience in the field, we provide specialised
                teaching regarding trading techniques, what to look for in an investment, 
                and our top coins. 
                <br></br><br></br>
                Check out what we have to offer down below!
            </HeroText>
            <HB>
            <HeroButton1>Buy Now</HeroButton1>
            <HeroButton2>Find out more</HeroButton2>
            </HB>
            </HT>
            <HeroLogo src={logo}></HeroLogo>
           </HeroIntro> 
        </HeroContainer>
    )
}

export default HeroSection
