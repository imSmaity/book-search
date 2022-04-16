import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './details.css'

function Details() {
  const [bookData,setBookData]=useState({})
  const [loading,setLoading]=useState(false)
  const prams=useParams()

  useEffect(()=>{
      axios.get(`https://www.googleapis.com/books/v1/volumes/${prams.id}`)
      .then((res)=>{
        setBookData(res.data.volumeInfo)
        setLoading(true)
      })
      .catch(err=>{
          console.error(err)
      })
  },[prams.id])

  return (
    <div className='container'>
      {
        loading?
        <>
          <center className=''>
            <img src={bookData.imageLinks.thumbnail} alt="book" />
          </center>
          <div className='' style={{textAlign:'center'}}>
            <h3>{bookData.title}</h3>
          </div>
          <div dangerouslySetInnerHTML={{__html: bookData.description}} ></div>
          <div>
            <b>ADDITIONAL INFORMATION</b>
            <table className='table'>
              <tbody>
                <tr>
                  <td>
                    <b>Authors</b>
                    {
                      bookData.authors&&
                      <div>{bookData.authors.map((value,i)=>{return <p key={i}>{value}</p>})}</div>
                    }
                    
                  </td>
                  <td>
                    <b>Publisher</b>
                    <div>{bookData.publisher}</div>
                  </td>
                  <td>
                    <b>Published on</b>
                    <div>{bookData.publishedDate}</div>
                  </td>
                  <td>
                    <b>Pages</b>
                    <div>{bookData.pageCount}</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>ISBN</b>
                    {
                      bookData.industryIdentifiers&&
                      <div>{bookData.industryIdentifiers[1].identifier}</div>
                    }
                    
                  </td>
                  <td>
                    <b>Language</b>
                    <div>{bookData.language}</div>
                  </td>
                  <td>
                    <b>Height</b>
                    {
                      bookData.dimensions&&
                      <div>{bookData.dimensions.height}</div>
                    }
                  </td>
                  <td>
                    <b>PrintType</b>
                    <div>{bookData.printType}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>:
        <div>Loading...</div>
      }
      
    </div>
  )
}

export default Details