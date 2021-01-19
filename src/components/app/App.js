import './App.css';
import React from "react";
import { PeopleComp } from "../peopleView/PeopleComp";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <PeopleComp/>
            </header>
        </div>
    );
}

export default App;