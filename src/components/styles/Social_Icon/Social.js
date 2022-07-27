import { FaTwitter, FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { SocialFlex } from '../Grid/Grid.styled'
import { SocialLink, SocialIcon } from './Social.styled'




const Social = () => {
  return (

    <SocialFlex social>
        <SocialIcon active>
            <SocialLink active href = '#'>
                <FaLinkedin />
            </SocialLink>  
        </SocialIcon>

        <SocialIcon>
        <SocialLink href = '#'>
            <FaFacebookF />
        </SocialLink>  
        </SocialIcon>

        <SocialIcon>
            <SocialLink href = '#'>
                <FaTwitter />  
            </SocialLink>
        </SocialIcon>
    </SocialFlex>
    
  )
}

export default Social