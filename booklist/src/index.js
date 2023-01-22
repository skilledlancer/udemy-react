import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return <section>
    <Book/>
  </section>
}

const Book = () => {
  return <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
}

const Image = () => <h2>Book Image</h2>

const Title = () => <h2>Name of the Book</h2>

const Author = () => <h4>Writer of the book</h4>

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList />) 