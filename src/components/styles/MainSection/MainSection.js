import { StyledMain } from "../Section/Section.styled"
import { Post, HeaderGrid, ProfilePic, HeaderDetails, Options, News, PostTime, CommentBox, Triangle, MidGrid } from "./Main.styled"





const MainSection = () => {
  return (
    <StyledMain>
      <Post>
        <HeaderGrid>
          <ProfilePic></ProfilePic>
          <MidGrid>
            <HeaderDetails>
              <News>Lorem ipsum dolor sit amet.</News>
              <PostTime>16 mins ago</PostTime>
            </HeaderDetails>
            <CommentBox><Triangle /><div></div></CommentBox>
          </MidGrid>
          <Options />
        </HeaderGrid>
      </Post>
      <Post>
        <HeaderGrid>
          <ProfilePic></ProfilePic>
          <MidGrid>
            <HeaderDetails>
              <News>Lorem ipsum dolor sit amet.</News>
              <PostTime>16 mins ago</PostTime>
            </HeaderDetails>
            <CommentBox><Triangle /><div></div></CommentBox>
          </MidGrid>
          <Options />
        </HeaderGrid>
      </Post>
      <Post>
        <HeaderGrid>
          <ProfilePic></ProfilePic>
          <MidGrid>
            <HeaderDetails>
              <News>Lorem ipsum dolor sit amet.</News>
              <PostTime>16 mins ago</PostTime>
            </HeaderDetails>
            <CommentBox><Triangle /><div></div></CommentBox>
          </MidGrid>
          <Options />
        </HeaderGrid>
      </Post>
      <Post>
        <HeaderGrid>
          <ProfilePic></ProfilePic>
          <MidGrid>
            <HeaderDetails>
              <News>Lorem ipsum dolor sit amet.</News>
              <PostTime>16 mins ago</PostTime>
            </HeaderDetails>
            <CommentBox><Triangle /><div></div></CommentBox>
          </MidGrid>
          <Options />
        </HeaderGrid>
      </Post>
      <Post>
        <HeaderGrid>
          <ProfilePic></ProfilePic>
          <MidGrid>
            <HeaderDetails>
              <News>Lorem ipsum dolor sit amet.</News>
              <PostTime>16 mins ago</PostTime>
            </HeaderDetails>
            <CommentBox><Triangle /><div></div></CommentBox>
          </MidGrid>
          <Options />
        </HeaderGrid>
      </Post>
    </StyledMain>
  )
}

export default MainSection





// <HeaderWithMenu>
//             <HeaderDetails>
              
//             </HeaderDetails>
//             <Options />
//           </HeaderWithMenu>
//           <CommentBox></CommentBox>