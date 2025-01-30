import React from 'react'
import '/src/styles/BookApp_styles.css' 
import { Link } from 'react-router-dom'

export default function BookCard(props) {
  return (
    <div className='Card'>
      <Link to={`/book/${props.book.id}`} style={{textDecoration: 'none', color:'inherit'}}>
        <img className='book-img' src={props.book.imageLink} alt={props.book.title} width="250px" height="250px"/>
        <h2 className='Book-Title'>Title  : {props.book.title}</h2>
        <h4 className='Book-Year'>Year   : {props.book.year}</h4>
        <h4 className='Book-Author'>Author : {props.book.author}</h4>
        <h4 className='Book-Author'>Category : {props.book.category}</h4>
      </Link>
    </div>
  )
}
