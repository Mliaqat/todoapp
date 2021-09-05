import React from 'react'
import '../App.css'
import List from './List'

export default function Box() {
    return (
        <div className="maindiv">
            <h1 className="h1">TODo App</h1>
            <List></List>
        </div>
    )
}
