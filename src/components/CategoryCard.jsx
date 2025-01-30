import React from 'react'
import '/src/styles/BookApp_styles.css' 
import { Link } from 'react-router-dom'

export default function CategoryCard(props) {
  return (
    <div className='Card'>
      <Link to={`/category/${props.category.title}`} style={{textDecoration: 'none', color:'inherit'}}>
        <img className='book-img' src={props.category.category_img} alt={props.category.title} width="250px" height="250px"/>
        <h2 className='Book-Title'>Title  : {props.category.title}</h2>
      </Link>
    </div>
  )
}