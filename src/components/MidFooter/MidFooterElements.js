import styled from 'styled-components'

export const MidFooterWrapper = styled.div`
    width: 100%;
    height: 200px;
    padding: 20px;
    background: #BFCFFF;
    margin-top: 20px;
`


export const MidFooterContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 31px;
    display: grid;
    grid-auto-flow: column;
    align-content: center;
    justify-content: center;
    grid-template-columns: repeat(3,350px);  /* 3 columns */
    grid-template-rows: repeat(1,200px); /* 3 rows  */
`

export const MidFooterItemWrapper = styled.div`
    position: relative;
    margin-top: auto;
    margin-bottom: auto;
    height: 80px;
    `

export const MidFooterImage = styled.div`
    position: absolute;        
    left: 0; 
    top: 0;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    -webkit-box-shadow: 10px 3px 60px 3px grey;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow:   0px 15px 15px 10px grey;  /* Firefox 3.5 - 3.6 */
    background-color: white;
    `


export const MidFooterTextMain = styled.h2`
    position: absolute;        
    left: 95px; 
    width: 100px;
    top: 0;
    font-size: 20px;
    `

export const MidFooterTextSecondary = styled.p`
    position: absolute;        
    left: 95px; 
    top: 25px;
    font-size: 16px;
    color: grey;
    font-weight: bold;
    width: 200px;

`
