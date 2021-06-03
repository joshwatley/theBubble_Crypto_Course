import styled from 'styled-components'

export const IncludedWrapper = styled.div`
    margin-top: 20px;   
    margin-bottom: 100px;
    display: block;
    justify-content: center;

`;

export const IncludedTitle = styled.h1`
width:100%;
text-align: center;
margin-bottom: 3em;
    &:before{
        content: "";
        position: absolute;
        margin-top: 60px;
        width: 20%;
        height: 1px;
        left: 40%;
        border-bottom: 3px solid #809FFF;
    }
    
`;

export const IncludedContent = styled.div`
    width: 100%;
    display: inline-grid; 
    grid-auto-flow: row;
    margin-left: 35px;
    justify-content: center;
    grid-template-columns: repeat(3,350px);  /* 3 columns */
    grid-template-rows: repeat(2,200px); /* 3 rows  */

    @media screen and (max-width: 1110px){
        grid-template-columns: repeat(2,350px);  /* 3 columns */
        grid-template-rows: repeat(3,200px); /* 3 rows  */
    }

    @media screen and (max-width: 800px){
        grid-template-columns: repeat(1,350px);  /* 3 columns */
        grid-template-rows: repeat(6,170px); /* 3 rows  */
    }

`


export const IncludedItem = styled.div`
    align-items: center;
    position: relative;
`;

export const IncludedImage = styled.div`
    position: absolute;
    z-index: 2;
    left: 105px;
    top: -15px;
    width:70px;
    background-color: #809FFF;
    height: 70px;
    border-radius: 35px;

`;

export const IncludedText = styled.h2`
    position: absolute;
    text-align: center;
    padding-top: 1.8em;
    padding-bottom: 1.8em;
    border-radius: 30px;
    width: 280px;
    -webkit-box-shadow: 18px 10px 35px 10px lightgrey;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow:   0px 15px 15px 15px lightgrey;  /* Firefox 3.5 - 3.6 */


`;


