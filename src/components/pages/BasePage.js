import React from 'react';
import {BASE_IMAGES_URL} from "../../configs/pagesConfig";
import './styles.css'


class BasePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: 1, data: {}};
        this.btnHandlerClick = this.btnHandlerClick.bind(this);
    }

    loadData(id) {
        if (id >= this.props.options.maxElements) {
            this.setState({id: 1});
        }
        this.props.options.dataFunc(id).then(data => {
            this.setState({data: data});
        });
    }

    componentDidMount() {
        this.loadData(this.state.id);
    }

    btnHandlerClick() {
        this.setState({id: this.state.id + 1}, () => {
            this.loadData(this.state.id);
        });
    }

    addDefaultSrc(e) {
        e.target.src = `${BASE_IMAGES_URL}big-placeholder.jpg`;
    }

    render() {
        const {name, img} = this.state.data;
        const {fieldsToDisplay} = this.props.options;
        const renderAttributes = () => {
            return fieldsToDisplay.map(field => {
                return (<li key={field.key}>{field.text}: {this.state.data[field.key]}</li>);
            });
        }
        if (this.state.data.errored) {
            console.log('test');
            // this.btnHandlerClick();
            return (<br/>);
        }

        return (
            <div className="Main">
                <button className="Main-button" onClick={this.btnHandlerClick}>NEXT</button>
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