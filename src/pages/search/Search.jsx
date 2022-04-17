import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './search.css'
import SearchItems from './SearchItems'

function Search() {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const [searchData,setSearchData]=useState('')
  const [searchingItems,setSearchingItems]=useState([])

  useEffect(()=>{
      axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')
      .then((res)=>{
          setData(res.data.items)
          setLoading(true)
      })
      .catch(err=>{
          console.error(err)
      })
  },[])

  useEffect(()=>{
    let books=data
    books=books.filter((book)=>{
      const bookName=(book.volumeInfo.title).toUpperCase()
      const searchUpper=searchData.toUpperCase()
      let find=true

      if(searchData==='')
        return false
      for(let i=0;i<searchData.length;i++){
        if(bookName[i]!==searchUpper[i]){
          find=false
        }
      }
      return find;
    })
    setSearchingItems([...books])
  },[searchData,data])

  function setSearchItems(e){
    setSearchData(e.target.value)
  }
  return (
    <div className='p-5'>
      <center><input type="search" id='search' placeholder='Search for books by title...' onChange={setSearchItems}/></center>
      <SearchItems searchingItems={searchingItems} loading={loading} searchData={searchData}/>
    </div>
  )
}

export default Search