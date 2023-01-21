import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
    return(
        <>
            <div className="something">
                <h2><Person/></h2>
                <h3><Message/></h3>
            </div>
        </>
    )
}

const Person = () => <h2>Manish Kumar Namdeo</h2>;
const Message = () => {
    return <h2>My Christmas Greetings</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<Greeting />)