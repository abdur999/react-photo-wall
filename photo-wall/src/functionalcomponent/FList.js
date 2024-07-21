import React from "react"

function FList(props) {
    return ( <ol> 
        {this.props.tasks.map((task, index) => <li key = {index}> {task} </li>)}
      </ol> )
}

export default FList