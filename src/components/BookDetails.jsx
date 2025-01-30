import React from 'react'
import { useParams } from 'react-router-dom'
import { Books } from '/src/utils/mockdata.js'
import { useEffect, useState } from 'react';
import ErrorBook from './ErrorBook';

function BookDetails() {
    
    
    const params = useParams();
    const Book = Books.filter(book => book.id === params.id);
    console.log('book del',Book)

  return (
    <div className='flex flex-col gap-2'>
        { Book.length > 0 ? (
            Book.map(book => 
            <div key={book.id} style={{display: 'flex', flexDirection:"column", padding:"3rem",
            gap:"1rem", border:"2px solid black", width:"max-content", margin:"2rem"}}>
              <h1 className='underline'>{book.title}</h1>
              <h3>Author : {book.author}</h3>
              <img src={book.imageLink} alt={book.title} width='250px' height='250px'/>
              <h3>Read More at: <a href={book.link}>{book.link}</a></h3>
            </div>
            )) : <ErrorBook id={params.id}/>
        }
    </div>
  )
}

export default BookDetails