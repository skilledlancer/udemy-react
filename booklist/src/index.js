import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

const books = [
    {
        title:"Spare",
        author:"Prince Harry The Duke of Sussex",
        img:'https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL900_SR900,600_.jpg',
        id: 1,
    },
    {
        title:"Atomic Habits",
        author:"James Clear",
        img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
        id: 2,
    }
]
const BookList = () => {
  const getBook = (id) => {
const book = books.find((book) => book.id === id)
    console.log(book.title)
  }
  return (
  <section className="booklist">
    {books.map((book) => {
        
        return <Book {...book} key={book.id} getBook={getBook} />
        })
    }
  </section>
  );
}

const Book = (props) => {
  const {img, title, author, getBook, id} = props
  return (<article className="book">
    <img src={img} alt={title}/>
    <h2>{title}</h2>
    <h4>{author}</h4>
    <button onClick={() => getBook(id)}>Book Title</button>
  </article>);
}


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList />) 