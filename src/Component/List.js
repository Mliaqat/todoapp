import React,{useState} from 'react'
import '../App.css'
import Todolist from './Todolist';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';

export default function List() {
    let [item,setitem] = useState("");
    let [itemlist,setitemlist] = useState([]);
    const handleevent =(event)=>{
        return(
            setitem(event.target.value)
        )
    }
    const addlist = ()=>{

        setitemlist((olditem)=>{

            return [...olditem,item]

        })
        setitem("");
    }

    const del=(id)=>{
        console.log("pressd")
       setitemlist((olditem)=>{
           return olditem.filter((arrel,index)=>{
               return index!==id;
           })
       })
       

    }
    return (
        <div className="list">
            <input type="Text" required placeholder="Enter a item" onChange={handleevent} value={item}/>
            <Tooltip title="Add">
            <button className="buttonadd" onClick={addlist}><AddIcon/></button>
            </Tooltip>
            
            <ol>
               
                {
                 itemlist.map((itemval,index)=>{

                     return (<Todolist key={index} 
                        id={index} 
                        value={itemval}
                         onSelect={del}/>)
                    
                    
                    


                    })
                }
            </ol>
        </div>
    )
}
