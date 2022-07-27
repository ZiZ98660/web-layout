import styled from "styled-components";


export const StyledFirstBar = styled.div`
display: grid;
grid-template-rows: repeat(3, 4fr);
row-gap: 18px;
grid-auto-rows: 387px;
`


export const StyledMain = styled.div`
display: grid;
background-color: ${({theme}) => theme.bgColor};
grid-template-rows: 1fr 1fr;
row-gap: 18px;
height: 233px;
`

export const StyledSecondBar = styled.div`
display: grid;
background-color: ${({theme}) => theme.bgColor};
grid-template-rows: repeat(6, 1fr);
grid-auto-rows: 233px;
row-gap: 11px;
`
