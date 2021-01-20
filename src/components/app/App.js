import './App.css';
import React from "react";
import BasePage from "../pages/BasePage";
import {characterProps, planetProps, RESOURCE_TYPE, starshipProps} from "../../configs/pagesConfig";
import MenuItem from "../menu/MenuItem";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: RESOURCE_TYPE.characters}
    }

    render() {
        const page = this.state.page;
        let currentPage;
        switch (page) {
            case RESOURCE_TYPE.planets:
                currentPage = <BasePage key={RESOURCE_TYPE.planets} options={planetProps}/>;
                break;
            case RESOURCE_TYPE.starships:
                currentPage = <BasePage key={RESOURCE_TYPE.starships} options={starshipProps}/>;;
                break;
            default:
                currentPage = <BasePage key={RESOURCE_TYPE.characters} options={characterProps}/>;
        }

        return (
            <div className="App-wrapper">
                <div className="Menu">
                    <MenuItem isActive={page === RESOURCE_TYPE.characters}
                        name="People" onClick={() => this.setState({page: 'people'})}/>
                    <MenuItem isActive={page === RESOURCE_TYPE.planets}
                        name="Planets" onClick={() => this.setState({page: 'planets'})}/>
                    <MenuItem isActive={page === RESOURCE_TYPE.starships}
                        name="Starships" onClick={() => this.setState({page: 'starships'})}/>
                </div>
                <div>
                    {currentPage}
                </div>
            </div>
        )
    }
}

export default App;