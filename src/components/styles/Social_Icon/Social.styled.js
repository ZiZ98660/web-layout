import styled from "styled-components";
import {AiFillHeart} from 'react-icons/ai'


export const SocialLink = styled.a`
    text-decoration: none;
    color: white;
    display: grid;
   
    
    svg{
        width: 15px;
        height: 15px;
        color: white;
    }


`

export const SocialIcon = styled.div`
    display:grid;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: ${({active}) => active ? 'skyblue' : '#c9c6c6'};

    &:active{
        background-color:skyblue;
    }
`

export const Heart = () => (
    <AiFillHeart />
)