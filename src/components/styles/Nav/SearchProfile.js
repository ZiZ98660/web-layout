import { StyledProfileItem, ProfileSearch } from "./Nav.styled";
import { FaGithub, FaSearch, } from 'react-icons/fa'
import { LinkItem } from "../Link.styled";

export const SearchProfile = () => (
    <ProfileSearch>
        <StyledProfileItem>
            <LinkItem href="#">
                <FaSearch />
            </LinkItem>
        </StyledProfileItem>

        <StyledProfileItem profile>
            <FaGithub/>
        </StyledProfileItem>
    </ProfileSearch>
   
)

