import React, { useState, useEffect } from 'react'
import BookCard from './BookCard'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CatBooks(props) {

    const params = useParams();
    let name = params.name;
    
    const Books = useSelector(store => store.UpdatedBooks.Books) 
    const [categoryBooks, setCategoryBooks] = useState([]);

    useEffect(() => {
      
        getCatBooks();
        
    }, [name])
    
    function getCatBooks(){
        const catBooks = Books.filter(book => {
            return book.category === name;
        })
        setCategoryBooks(catBooks);
    }

    return (
        <div>
            <Link to={`/`}><button style={{margin:'1rem', width:'12rem', height:'2.5rem', backgroundColor:'black',
                color:'white', borderRadius:'.8rem', fontWeight:'bolder', fontSize:'1em'}} id='backBtn'>🢀 Back to Home </button></Link>
            <div className='BookListStyle'>

                {categoryBooks.map(book => {
                    return (
                        <BookCard key={book.id} book={book} />
                    )
                })}

            </div>

        </div>
    )
}

export default CatBooks