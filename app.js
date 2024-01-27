import React from "react";
import ReactDOM  from "react-dom/client";

// React Element
const Title = () => (
    <h1 className="head" tabIndex={5}>
        Namaste React using JSX
    </h1>
);

// React Functional Component - It is a normal JS function which returns some JSX elements.

const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <Title />
        <Title></Title>
        <h1>It is a Functional Component.</h1>
    </div>
);

// const HeadingComponent = () => {
//     return <h1>It is a Functional Component.</h1>
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)