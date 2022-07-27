import styled from 'styled-components'


export const Grid = styled.div`
display: grid;
grid-template-columns: 3fr 6fr 3fr;
gap: 18px;
`

export const GridDiv = styled.div`
display: grid
`
export const ProfileFlex = styled.div`
display: flex;
place-items: center;
justify-content: center;
margin-bottom: 40px;
margin-top: 7px;
`
export const SocialFlex = styled.div`
display: flex;
place-items: center;
justify-content:${({social}) => social ? 'space-around' : 'space-between'} ;
li{
    list-style: none;
}
`
