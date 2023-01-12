import React, { useState } from 'react'
import MenuListItem from './MenuListItem';
import { DIFFICULTIES } from './content';

function MenuList(props) {

    // const [isSelected, setIsSelected] = useState(false);

    const difficultyItems =  [{id: 1, value : 'Low'},
        {id: 2, value : 'Medium'},
        {id: 3, value : 'Hard'},
        {id: 4, value : 'Insane'}] ;

        // const handleSelected = () => {
        //     setIsSelected(true);
        // }
    
        return (
        <div style={{ width: "150px", height: "150px", alignItems: "center", border:"2px solid black"}}>
            <h3>MenuList</h3>
                {/* {difficultyItems.map(function( item) {
                
                    return (
                
                        <MenuListItem 
                            key={item.id} 
                            value={item.value} 
                            setCurrentDifficulty={props.setCurrentDifficulty} 
                            onClick={props.onItemClick} 
                           
                            isSelected={item.value === "Low" ||  item.value === "Medium" || item.value === "Hard" ||item.value === "Insane" } />
                )
                })} */}
               {DIFFICULTIES.map((difficulty) => (
                    <MenuListItem 
                    // key={item.id} 
                        difficulty={difficulty} 
                        onClick={props.onItemClick} 
                        isSelected={props.difficulty === difficulty} 
                    />
               ))
               }
    </div>
  )
}

export default MenuList