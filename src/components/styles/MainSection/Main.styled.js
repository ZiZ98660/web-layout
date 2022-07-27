import styled from "styled-components";
import {FaEllipsisH} from 'react-icons/fa'

export const Post = styled.div`
background-color: white;
display:grid;
padding: 20px;

height: 192px;
`



export const HeaderGrid = styled.div`
display: grid;
grid-template-columns: 1fr 9fr 1fr;
/* align-items: flex-start; */
svg{
    justify-self: center;
    align-self:flex-start;
    color: #a0a0a0;
}
`
export const MidGrid = styled.div`
display: grid;
margin-left:23px;
`


export const ProfilePic = styled.div`
width: 60px;
height: 60px;
border-radius: 50%;
background-color: grey;
`


export const HeaderDetails = styled.div`
display: grid;
`

export const News = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 21.83px;
`

export const PostTime = styled.div`
    align-self: flex-start;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.98px;
    color: #a0a0a0;
`

export const Options = () =>(
    <FaEllipsisH/>
)

export const Triangle = () =>(
    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71 "></path>
        </svg>
)

export const CommentBox = styled.div`
    width: 457px;
    height: 84px;
    border: solid 1.5px #c4c4c4;
    border-radius: 5px;
    /* place-self: center; */
    box-sizing: border-box;
    /* align-self: flex-start; */
svg{
    color: #c4c4c4;
    transform: rotate(121deg);
    position: relative;
    bottom: 9.9px;
    left: 22.2px;
}
div{
    background-color: skyblue;
    height: 0.7em;
    width: 0.7em;
    position: relative;
    left: 23px;
    bottom: 20.2px;
    background: white;

}

`







// export const PostHeader = styled.div`
// display: flex;
// justify-content: space-between;
// `

// export const PostContent = styled.div`
// display: grid;

// `
// export const HeaderWithMenu = styled.div`
// display: flex;
// justify-content: space-between;
// align-items: center;
// `







