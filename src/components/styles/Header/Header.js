import { StyledHeader } from './Header.styled'
import { Nav, BrandText, } from '../Nav/Nav.styled'
import { SearchProfile } from '../Nav/SearchProfile'
import { NavIconList } from '../Nav/NavIconList'



export const Header = () => (

    <StyledHeader>
        <Nav>
            <BrandText>
                Pa<span>thBud</span>dy
            </BrandText>

            <NavIconList />

            <SearchProfile />
        </Nav>
    </StyledHeader>

)




