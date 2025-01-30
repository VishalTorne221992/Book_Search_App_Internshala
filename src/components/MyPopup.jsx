import React , { useState } from 'react'
import Popup from 'reactjs-popup'
import '/src/styles/BookApp_styles.css' 
import { categories } from "/src/utils/mockdata.js"
import { useDispatch, useSelector } from 'react-redux'
import { addBook } from '/src/utils/BookSlice.js'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'

export const MyPopup = (props) => {

  console.log('in pop up',props)

  const Books = useSelector(store => store.UpdatedBooks.Books) 
  const dispatch = useDispatch();

  const [errors,setErrors] = useState([]);
  const [backstr, setBackstr] = useState('');
  
  function handleAddNewBook(e){
    
    e.preventDefault();
    const userdata = document.querySelector("#AddNewBookForm");
    const form = new FormData(userdata);
    console.log('form data',new FormData(userdata))
    let lastIndex = Books.length;
    console.log('last index',lastIndex,Books)

    const validateData = (data) => {
      const err = [];

      Object.entries([...data].map(m => {
        console.log('m',m)
        let key = m[0];
        let value = m[1];
        if(value.trim() === '' || value.trim() === 'Select a Category'){
          let errstr = 'Please enter ' + key + ' as it is required';
          err.push(errstr)
        }
     }))
 

     const page = document.getElementById('Pages');
     const year = document.getElementById('Year');

     let p = parseInt(page.value);
     let y = parseInt(year.value);

     let rexnum = /[0-9]|\./;
      
     console.log(typeof(p),'||',typeof(y))
     if(!rexnum.test(parseInt(page.value))){
       let errstring = 'Page number should be a number';
       err.push(errstring); 
     }

     const regexyear = /^[0-9]+$/;

    if(!regexyear.test(parseInt(year.value)) || year.value.length !== 4){
      let errstring = 'Entered is not a year. Please enter year';
      err.push(errstring); 
    }

     return err;
    }

    const errors = validateData(form)
    console.log('error',errors)
    if(errors.length !== 0){
      setErrors(errors)
      return
    }
    
    let bookval = {};

    Object.entries([...form].map(m => {
       let key = m[0];
       let value = m[1];
       bookval['id'] = uuidv4();
       bookval[key] = value;
    }))

    // props.setNewBooks(prev => [...prev,bookval]);
    // props.updateUI(prev => [...prev,bookval])
    // console.log('nwew',props.NewBookList)
    console.log('new book details',bookval.category)
    let backString = `/category/` + bookval.category;
    setBackstr(backString)
    console.log('form value',bookval)
    dispatch(addBook(bookval));

  }


  return (
    <Popup
    trigger={<button className="button"> Add New Book </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Add New Book </div>
        <div className="content">
          {' '}
          <form id='AddNewBookForm'>
            Author: <input type="text" name="author" id="auth" required/>
            Country: <input type="text" name="country" id="country" required/>
            ImageLink: <input type="text" name="imageLink" id="ImageLink" required/>
            Language: <input type="text" name="language" id="Language" required/>
            Link: <input type="text" name="link" id="Link" required/>
            pages: <input type="number" name="images" id="Pages" required/>
            title: <input type="text" name="title" id="title" required/>
            Category : <select id='categorySelect' name='category' required>
                       <option>Select a Category</option>
                       {categories.map(cat => (
                        <option key={cat.id} value={cat.title}>{cat.title}</option>
                       ))}
                       </select>
            Year:  <input type="number" name="year" id="Year" required/>
            <button id='btnSub' onClick={(e) => handleAddNewBook(e)}>Add New Book</button>
          </form>
        </div>
        {errors && errors.map((e,i) => {
            return <h3 style={{color:'red'}} key={i}>*{e}</h3>
        })}
        <div className="actions">
      
          {errors.length === 0 && <Link to={backstr}><button style={{margin:'1rem'}} id='backBtn'>🢀 Back to Browse Books </button></Link>}
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            Close Modal
          </button>
        </div>
      </div>
    )}
  </Popup>
  )
}
