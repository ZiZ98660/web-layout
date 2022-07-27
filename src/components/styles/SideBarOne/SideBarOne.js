import { StyledFirstBar } from "../Section/Section.styled"
import { BgImg, ProfilePic, ItemOne, SubOne, SubTwo, ProfileContent, QuestionMark, ItemTwo, FavHeader, FavListItem, FavIcon, FavName, ItemThree, BioHeader, Edit } from "./SideBarOne.styled"
import ToggleBtn from "../Button/ToggleBtn"
import { useState } from "react"
import { GridDiv, ProfileFlex, SocialFlex } from "../Grid/Grid.styled"
import Social from "../Social_Icon/Social"
import { Heart } from "../Social_Icon/Social.styled"
import { BioBody } from "./SideBarOne.styled"


const SideBarOne = () => {
    const [toggleStatus, setToggleStatus] = useState(false)
    const [toggle, setToggle] =useState('')

    const Status = toggleStatus ? '' : 'toggle'

    


    const onToggle = () => {
      setToggle(Status)
      setToggleStatus(!toggleStatus)
    }

  return (
    <StyledFirstBar>
      <ItemOne>
        <SubOne>
          <BgImg></BgImg>
          <ProfilePic></ProfilePic>
          <ProfileContent>
            <h3>John Doe</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, velit voluptas. Dolores magni impedit quaerat!</p>
          </ProfileContent>
          <GridDiv>
          <ProfileFlex><ToggleBtn togglebtn  id ={toggle} onToggle={onToggle}/> <QuestionMark><div>?</div></QuestionMark></ProfileFlex>   
          </GridDiv>
        </SubOne>
        <SubTwo> 
          <div>28 profile views</div>
          <Social />
        </SubTwo>
      </ItemOne>
      <ItemTwo>
        <FavHeader>
          <h3>My Favorites</h3>
          <div><Heart /></div>
        </FavHeader>
        <FavListItem>
          <FavIcon></FavIcon>
          <FavName>Mary Jane</FavName>
        </FavListItem>
        <FavListItem>
          <FavIcon></FavIcon>
          <FavName>Mary Jane</FavName>
        </FavListItem>
        <FavListItem>
          <FavIcon></FavIcon>
          <FavName>Mary Jane</FavName>
        </FavListItem>
        <FavListItem>
          <FavIcon></FavIcon>
          <FavName>Mary Jane</FavName>
        </FavListItem>
      </ItemTwo>
      <ItemThree>
        <SocialFlex>
          <BioHeader>SHORT BIO</BioHeader>
          <Edit />
        </SocialFlex>
        <BioBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Aut aspernatur asperiores rerum sequi, quaerat omnis fuga, modi consequuntur culpa magni ea magnam, nostrum hic quae deleniti corporis voluptatem nam sed?
        </BioBody>
      </ItemThree>
    </StyledFirstBar>
  )
}

export default SideBarOne
