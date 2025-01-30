import React from 'react'

function ErrorCat(props) {
  return (
    <div>
       <h1 style={{margin:'2rem'}}>Please check the url. category does not exist : <span style={{color:'red'}}>{props.name}</span></h1> 
    </div>
  )
}

export default ErrorCat