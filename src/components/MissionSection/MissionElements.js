import styled from 'styled-components'

export const MissionWrapper = styled.div`
    height: 100%;
    margin-top: 20px;   
    display: block;
    justify-content: center;

`;

export const MissionTitle = styled.h1`
    width: 100%;
    text-align:center;
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

export const MissionContentWrapper = styled.div`
    margin-top: 100px;
    margin-left: 13px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,500px);  /* 3 columns */
    grid-template-rows: repeat(3,300px); /* 3 rows  */
    justify-content: center;

`

export const MissionImage = styled.img`
    width: 450px;
    margin: auto;
`
export const MissionText = styled.p`
    margin: auto;
    width: 500px;
    color: grey;

`



