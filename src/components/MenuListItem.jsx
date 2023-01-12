import React, {useState } from 'react'

function MenuListItem(props) {

    const [isHovered, setIsHovered] = useState(false);

    console.log('Props... ', props)

    const activate = () => {
        setIsHovered(true);
    }
    const deActivate = () => {
        setIsHovered(false);
    }

    const getBackgroundColor = () => {
    //    return isHovered  ? "#a5e9ff"  : props.isSelected ? "#26baea" : "#eff0ef"
        if(isHovered) {
             return "#a5e9ff"
        }
        else {
            if(props.isSelected) {
               
                return "#26baea"
            }
            else {
                return "#eff0ef"
            }
        }
    }

   const onItemClick = () => {
    props.onClick(props.difficulty)
    
   }

    return  <div onMouseEnter={activate} onMouseLeave={deActivate} style={{backgroundColor: getBackgroundColor() }} onClick={onItemClick}  >{props.difficulty} </div>

}

export default MenuListItem