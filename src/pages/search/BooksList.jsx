import React from 'react'

function BooksList({data,loading}) {
    

    return (
        <div>
            {
                loading?
                <ul>
                    {
                        data.map((value)=>{
                            return <li key={value.id}>{value.volumeInfo.title}</li>
                        })
                    }
                </ul>:
                <div>Loading...</div>
            }
            
        </div>
    )
}

export default BooksList