import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
    return(
        <>
            <div className="something">
                <h2>My Christmas Greetings</h2>
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<Greeting />)