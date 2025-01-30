import React from 'react'
import BookCard from './BookCard'
import CategoryCard from './CategoryCard'
import '/src/styles/BookApp_styles.css'
import { MyPopup } from "./MyPopup"
import { Books } from "/src/utils/mockdata.js"
import { categories } from "/src/utils/mockdata.js"
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Booklist(props) {

    const UpdatedBooks = useSelector(store => store.UpdatedBooks.Books)

    const [text, setText] = useState("")
    const [NewBookList, setNewBookList] = useState(UpdatedBooks);
    const [filtered, setFiltered] = useState(UpdatedBooks);
    const [searchFlag, setSearchFlag] = useState(false);

    console.log('text',text)

    function handleChange(e){
        
        if(text === ""){
            setFiltered(UpdatedBooks)
        }

        setText(e.target.value)
    }

    function handleSearch() {

        setSearchFlag(true)

        const filter = NewBookList.filter(book => {
            return book.title.toLowerCase().includes(text.toLowerCase());
        })

        setFiltered(filter);
    }

    return (
        <>

            <div className="search">
                <h1>SEARCH BOOK NAME</h1>
                <div>
                    <input type='text' className='inputSearch' onChange={(e) => handleChange(e)} />
                    <button style={{marginRight:'.6rem'}} className='btnSearch' onClick={() => handleSearch()}>Search</button>
                    <MyPopup />
                </div>
            </div>
            {
                searchFlag && text !== "" ? <div className='BookListStyle'>

                    {filtered.map(filter => {
                        return (
                            <BookCard key={filter.id} book={filter} />
                        )
                    })}

                </div> :

                    <div className='BookListStyle'>


                        {categories.map(category => {
                            return (
                                <CategoryCard key={category.id} category={category} />
                            )
                        })}

                    </div>
            }

        </>

    )
}
