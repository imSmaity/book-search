import React from 'react'
import { Link } from 'react-router-dom'

function SearchItems({searchingItems,loading}) {

    return (
        <div className='searchI' style={{display:searchingItems.length===0&&'none'}}>
            {
                loading?
                <ul>
                    {
                        searchingItems.map((value)=>{
                            return(
                                <li key={value.id}>
                                    <Link to={`/book/${value.id}`} id='link'>{value.volumeInfo.title}</Link>
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