import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function History() {
    const [history,setHistory]=useState([{id:0,searchItem:'',date:''}])

    const userData=JSON.parse(localStorage.getItem('_wyzr_books_'))

    useEffect(()=>{
        axios.post('http://localhost:9000/history',{_id:userData.email})
        .then(res=>{
            setHistory(res.data)
        })
    },[userData.email])

    return (
        <div>
            {
                history[0].searchItem!==''?<p>Recent searches: </p>:<p>Suggestions: The first letter must use <b>K/T/S/W/G/H/P</b>.</p>
            }
            <ul>
                {
                    history.map((value)=>{
                        return(
                            <li key={value.id}>
                                <Link to={`/book/${value.id}`} id='link2'>{value.searchItem}</Link>
                            </li>
                        ) 
                    })
                }
            </ul>
        </div>
    )
}

export default History