import { Button } from "../Button/Button.styled"



const ToggleBtn = ({togglebtn, onToggle, id}) => {


  return (
    <Button togglebtn={togglebtn} id={id} onClick={onToggle}><div></div></Button> 
  )
}

export default ToggleBtn