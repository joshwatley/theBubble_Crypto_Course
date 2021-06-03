import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    padding: 0 30px; 
    margin: auto;
    width: 90%;
    height: 600px;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 785px){
    }

`;

export const HeroIntro = styled.div`
    display: flex;
    background: #BFCFFF;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    padding: 30px;
    // -webkit-box-shadow: 3px 3px 5px 6px lightgrey;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    // -moz-box-shadow:    3px 3px 5px 6px lightgrey;  /* Firefox 3.5 - 3.6 */


    @media screen and (max-width: 785px){
        height: 90%;
        display: block;
        justify-content: center;
        margin:auto;
    }

`;

export const HeroTitle = styled.h1`
    align-text: center;
    font-weight: bold;
    font-size: 38px;
    @media screen and (max-width: 785px){
        font-size: 24px;
    }
`

export const HT = styled.div`
    display: inline-block;
    margin-left: 60px;
    margin-top: auto;
    margin-bottom: auto;
    @media screen and (max-width: 785px){
        margin-left: 0px;
    }

`

export const HeroText = styled.p`
    color: grey;
    font-size: 24px;
    @media screen and (max-width: 785px){
        font-size: 18px;
        overflow-wrap: normal;
        margin-right: 35px;
    }
`
export const HeroButton1 = styled.nav`
color: white;
background-color: #809FFF;
padding: 10px 50px;
text-align: center;
margin-right: 60px;
font-size: 24px;
font-weight: bold;
border: 1px solid #809FFF;
border-radius: 25px;

@media screen and (max-width: 785px){
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    width: 100%%;
    margin-bottom: 15px;
}

cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        border: 1px solid #809FFF;
        background: #BFCFFF;
        color: grey;
    }

`
export const HeroButton2 = styled.nav`
color: black;
background-color: #809FFF;
opacity:40%;
font-size: 24px;

padding: 10px 50px;
font-weight: bold;
text-align: center;
border: 1px solid #809FFF;
border-radius: 25px;

@media screen and (max-width: 785px){
    margin-left: 40px;
    margin-right: 40px;
    width: 100%%;
    margin-bottom: 15px;
}

cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        border: 1px solid #809FFF;
        background: #BFCFFF;
        opacity: 100%;
        color: grey;
    }
`

export const HB = styled.div`
display: flex;
margin-top: 70px;
margin-left: 40px;
justify-content:left;
@media screen and (max-width: 785px){
    margin: auto;
    display: block;
}
`






export const HeroLogo = styled.img`
    // border: 2px solid grey;
    border-radius: 20px;
    height: 200px;
    margin-left: 20px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 30px;
    @media screen and (min-width: 1120px){
        // transition: .2s ease-in-out;
        height: 400px;
    }
    @media screen and (max-width: 785px){
        display: none;
        height: 100px;
        margin-left: 96px;
        margin-top: 30px;
    }
`