import {FaHome, FaPhone, FaCalendar } from 'react-icons/fa'
import { AiFillNotification, AiFillContacts } from 'react-icons/ai'
import {NavList} from './Nav.styled'
import { LinkItem } from '../Link.styled'


export  const NavIconList = () => (
    <NavList>
        <li>
            <LinkItem href = '#'>
                <FaHome />
            </LinkItem>  
        </li>

        <li>
        <LinkItem href = '#'>
            <AiFillNotification />
        </LinkItem>  
        </li>

        <li>
            <LinkItem href = '#'>
              <FaPhone />  
            </LinkItem>  
        </li>

        <li>
            <LinkItem href = '#'>
        
            </LinkItem>  
        </li>

        <li>
            <LinkItem href = '#'>
            <AiFillContacts />
            </LinkItem>  
        </li>

        <li>
        <LinkItem href = '#'></LinkItem>  
        </li>

        <li>
            <LinkItem href = '#'>
                <FaCalendar />
            </LinkItem>  
        </li>
    </NavList>
   
)