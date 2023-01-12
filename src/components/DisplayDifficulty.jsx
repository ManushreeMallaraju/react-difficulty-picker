import React from 'react'

function DisplayDifficulty(props) {
  return (
    <div className='container-list' style={{ width: "150px", height: "150px", alignItems: "center", border:"2px solid black", justifyContent: "center"}}>
      {
        props.difficulty ? `Difficulty set to  ${props.difficulty}` : "Nothing set"
      }
    </div>
  )
}

export default DisplayDifficulty
