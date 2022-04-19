import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import History from './History'

function SearchItems({searchingItems,loading,searchData}) {
    const userData=JSON.parse(localStorage.getItem('_wyzr_books_'))

    
    function searchDataStore(data,id){

        const URL=process.env.REACT_APP_SERVER_URL

        axios.post(URL,{_id:userData.email,sData:{id,searchItem:data, date:new Date()}})
        .catch(err=>{
            console.error(err)
        })
    }
    return (
        <div className='searchI' >
            {
                loading?
                    searchData!==''?
                        searchingItems.length===0?
                        <div id='link' >
                            <div>Not match any books title.</div>
                            <p>Suggestions: The first letter must use <b>K/T/S/W/G/H/P</b>.</p>
                        </div>:
                        <ul className='se'>
                            {
                                searchingItems.map((value)=>{
                                    return(
                                        <li key={value.id}>
                                            <Link to={`/book/${value.id}`} id='link' onClick={()=>searchDataStore(value.volumeInfo.title,value.id)}>{value.volumeInfo.title}</Link>
                                        </li>
                                    ) 
                                })
                            }
                        </ul>:
                    <History/>:
                <div>Loading...</div>
            }
            
        </div>
    )
}

export default SearchItems