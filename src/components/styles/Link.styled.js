import styled from 'styled-components'

export const LinkItem = styled.a`
text-decoration: none;
color: ${({active}) => active ? 'skyblue' : 'grey'};
&:active{
    color:skyblue;
}
`
