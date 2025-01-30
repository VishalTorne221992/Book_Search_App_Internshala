import React from 'react'
import { Link } from 'react-router-dom'

function ErrorBook(props) {
  return (
    <div>
        <Link to={`/`}><button style={{margin:'1rem', width:'12rem', height:'2.5rem', backgroundColor:'black',
                color:'white', borderRadius:'.8rem', fontWeight:'bolder', fontSize:'1em'}} id='backBtn'>🢀 Back to Home </button></Link>
       <h1 style={{margin:'2rem'}}>Please check the url. Book does not exist : <span style={{color:'red'}}>id : {props.id}</span></h1> 
    </div>
  )
}

export default ErrorBook