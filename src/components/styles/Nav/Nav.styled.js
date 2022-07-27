import styled from 'styled-components'


export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
height:  17vh;
background-color: white;
`

export const BrandText  = styled.div`
flex: 3;
font-family: 'Product Sans';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 39px;

text-align: center;
color: #188F47;
span{
    text-decoration: #188F47 underline 2px;
}
`  

export const NavList = styled.div`
flex: 6;
display: flex;
justify-content: space-evenly;
align-items: center;
    li{
        list-style: none;
    }
`

export const ProfileSearch = styled.div`
flex: 3;
display: flex;
align-items: center;
justify-content: space-evenly;
height: 100%;
border-left: solid black 1px;
`

export const StyledProfileItem = styled.div`
flex: 6;
background-color: ${({profile}) =>( profile ? '#f3f3f3' : '#fff')};
height: 100%;
display: grid;
place-items: center;
`
