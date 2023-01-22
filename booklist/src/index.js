import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

const firstBook = {
    title:"Spare",
    author:"Prince Harry The Duke of Sussex",
    img:'https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL900_SR900,600_.jpg'
}

const secondBook = {
    title:"Atomic Habits",
    author:"James Clear",
    img:'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg'
}
const BookList = () => {
  return (<section className="booklist">
    <Book title={firstBook.title} author={firstBook.author} img={firstBook.img} ><p>lorem ipsum</p><button>click here</button></Book>
    <Book title={secondBook.title} author={secondBook.author} img={secondBook.img} />
  </section>);
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