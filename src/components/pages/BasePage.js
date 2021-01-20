import React from 'react';
import {BASE_IMAGES_URL, NO_IMG_URL} from "../../configs/pagesConfig";
import './styles.css'


class BasePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: 1, data: {}};
        this.loadNextObject = this.loadNextObject.bind(this);
    }

    loadData(id) {
        if (id >= this.props.options.maxElements) {
            this.setState({id: 1});
        }
        this.props.options.dataFunc(id).then(data => {
            this.setState({data: data});
        }).catch((error) => {
            console.error(`Error getting data for id ${this.state.id}. Trying next one...`, error);
            this.loadNextObject();
        });
    }

    componentDidMount() {
        this.loadData(this.state.id);
    }

    loadNextObject() {
        this.setState({id: this.state.id + 1}, () => {
            this.loadData(this.state.id);
        });
    }

    addDefaultSrc(e) {
        e.target.src = NO_IMG_URL;
    }

    render() {
        const {name, img} = this.state.data;
        const {fieldsToDisplay} = this.props.options;
        const renderAttributes = () => {
            return fieldsToDisplay.map(field => {
                return (<li key={field.key}>{field.text}: {this.state.data[field.key]}</li>);
            });
        }

        return (
            <div className="Main">
                <button className="Main-button" onClick={this.loadNextObject}>NEXT</button>
                <div className="Main-header">
                    <img src={img}
                         alt={name}
                         onError={e => this.addDefaultSrc(e)}
                         className="Main-img"/>
                    <h3>{name}</h3>
                    <ul className="Main-list">
                        {renderAttributes()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BasePage;