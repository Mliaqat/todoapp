import React from 'react'
import '../App.css'
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

export default function Todolist(props) {
    
    return (
        <>
       
        <li> <Tooltip title="Delete">
            <button className="buttondel" onClick={()=>{props.onSelect(props.id)}}><DeleteIcon/></button>
            </Tooltip>
            {props.value}  
            </li>
       
        
      
        </>
    )
}
