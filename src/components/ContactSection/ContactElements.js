import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'


export const ContactWrapper = styled.div`
    height: 900px;
    margin-top: 20px;   
    display: block;
    justify-content: center;

`;

export const ContactTitle = styled.h1`
    width:100%;
    text-align: center;

    &:before{
        content: "";
        position: absolute;
        margin-top: 60px;
        width: 20%;
        height: 1px;
        left: 40%;
        border-bottom: 3px solid #809FFF;
    }

    margin-bottom: 50px;

`;

export const ContactText = styled.p`
    width: 70%;    
    margin: auto;
`;

export const ContactFormWrapper = styled.div`
    display: flex;
    padding: 30px;  
    background-color: #BFCFFF;
    border-radius: 20px;
    height: 350px;
    width: 50%;
    margin: auto;
    margin-top: 20px;
`;

export const ContactFormSmallDetailWrapper = styled.div`
    flex:1; 
    display: block;
    height: 100%;
`;

export const ContactSmallText = styled.textarea`
    overflow-y:hidden;
    whitespace: nowrap;
    text-align:left;
    margin: auto;
    margin-top: 30px;
    background-color: #809FFF;
    border: 1px solid white;
    width: 80%;
    padding: 15px;
    placeholderTextColor: white;
    border-radius: 10px;
    opacity: 40%;

    &::placeholder{color:white; opacity: 110%;}
    `;


export const ContactFormLargeDetailWrapper = styled.div`
    flex:1;
    display: block;
    height: 100%;
`;

export const ContactLargeText = styled.textarea`
    margin-top: 30px; 
    background-color: #809FFF;
    border: 1px solid white;
    width: 85%;
    height: 257px;
    padding: 15px;
    placeholderTextColor: white;
    border-radius: 10px;
    opacity: 40%;

    &::placeholder{color:white; opacity: 110%;}  
`;


export const ContactBtn = styled(LinkRouter)`
border-radius : 50px;
background: #809FFF;
display: block;
width: 10%;
margin:auto;
margin-top:20px;
text-align: center;
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


