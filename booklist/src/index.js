import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

const books = [
    {
        title:"Spare",
        author:"Prince Harry The Duke of Sussex",
        img:'https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL900_SR900,600_.jpg'
    },
    {
        title:"Atomic Habits",
        author:"James Clear",
        img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg'
    }
]
const BookList = () => {
  return (
  <section className="booklist">
    {books.map((book) => {
        const {img, title, author} = book
        return <Book img={img} title={title} author={author} />
        })
    }
  </section>
  );
}

const Book = ({title, author, img, children}) => {
  return (<article className="book">
    <img src={img} alt={title}/>
    <h2>{title}</h2>
    <h4>{author}</h4>
    {children}
  </article>);
}


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList />) 