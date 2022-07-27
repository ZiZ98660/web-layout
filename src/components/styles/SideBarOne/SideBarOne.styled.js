import styled from 'styled-components';
import {FaPencilAlt} from 'react-icons/fa'

//    Item one

export const ItemOne = styled.div`
/* background-color: white; */
display: grid;
//grid-template-rows: 9fr 3fr;
row-gap: 10px;
`

export const SubOne = styled.div`
display:grid;
background-color: white;
`
export const SubTwo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: space-between;
background-color: white;
height: 96px;
align-items: center;
padding: 0 12px;
`

export const BgImg = styled.div`
position: relative;
height: 74px;
width: 100%;
background-color:pink;
` 
export const ProfilePic = styled.div`
position: relative;
width: 80px;
height: 80px;
place-self:center;
bottom: 50%;
background: red;
border: 0.5px solid white;
border-radius: 50%;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`


export const ProfileContent = styled.div`
text-align: center;
color: #333333;
margin-top: -50px;
padding: 0 10px;

h3{
   font-size: 24px;
   font-weight: 400;
   line-height: 29px;
}
p{
    font-size: 16px;
    line-height: 23px;
}
`

export const QuestionMark = styled.div`
margin-left: 8px;
display: grid;
justify-content: center;
align-items: center;
background-color: #767676;
width: 20px;
height: 20px;
border-radius: 50%;
div{
    font-size: 14px;
    color: white;
    /* place-self: center; */
}
`



// Item Two

export const ItemTwo = styled.div`
background-color: white;
display:grid;
padding: 15px;
grid-template-rows: repeat(5, 1fr);
row-gap: 4px;
align-items: center;
`

export const FavHeader = styled.div`
display: flex;
align-items: center;
h3{ 
    font-weight: 700;
    font-size: 18px;
    color: #333333;
    flex: 0.8;
}

div{
    flex: 1;
    margin-top:6px;
    svg{
        height: 16px;
        width: 16px;
        color: red;
        
    }
}
`

export const FavListItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`

export const FavIcon = styled.div`
    height: 50px;
    width: 50px;
    background-color: skyblue;
    border-radius: 50%;
`

export const FavName = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-left: 25px
`

// Item three
export const ItemThree = styled.div`
background-color: white;
padding: 20px;
align-self: flex-start;

h3{
    font-size: 18px;
    color: #333333;
    font-weight: 700;
}

svg{
    color: #188f47;
    width: 18px;
    height: 17px;
}
`

export const BioHeader = styled.h3`

` 
export const BioBody = styled.p`
margin-top: 5px;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #676767;
`

export const Edit = () => (
    <div><FaPencilAlt/></div>
)
