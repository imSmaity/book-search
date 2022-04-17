import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function SearchItems({searchingItems,loading,searchData}) {

    function searchDataStore(data){
        axios.post('http://localhost:9000/',{searchItem:data, date:new Date()})
        .catch(err=>{
            console.error(err)
        })
    }
    return (
        <div className='searchI' >
            {
                loading?
                    searchingItems.length===0?
                    <div id='link' >
                        <div>Not match any books title.</div>
                        <p>Suggestions: The first letter must use <b>K/T/S/W/G/H/P</b>.</p>
                    </div>:
                    <ul>
                        {
                            searchingItems.map((value)=>{
                                return(
                                    <li key={value.id}>
                                        <Link to={`/book/${value.id}`} id='link' onClick={()=>searchDataStore(searchData)}>{value.volumeInfo.title}</Link>
                                    </li>
                                ) 
                            })
                        }
                    </ul>:
                <div>Loading...</div>
            }
            
        </div>
    )
}

export default SearchItems