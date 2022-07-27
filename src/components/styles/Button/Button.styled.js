import styled from "styled-components";


export const Button = styled.div`
display: grid;
background-color: #188f47;
color: white;
box-sizing: border-box;
width: ${({togglebtn}) => togglebtn ? '50px' : '285px'};
height: ${({togglebtn}) => togglebtn ? '30px' : '50px'};
border-radius:  ${({togglebtn}) => togglebtn ? '25px' : '5px'};
justify-content:  ${({togglebtn}) => togglebtn ? 'end' : 'center'};
align-items: center;
padding: ${({togglebtn}) => togglebtn ? '0 3px' : ''};


div{
    height: 21px;
    width: 21px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
}

/* div:active{
    background-color: #188f47;
} */

/* &:active{
    justify-content: start;
    background-color: white;
    border: #188f47 1.5px solid;   
} */

`