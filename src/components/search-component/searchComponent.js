import React from "react";

import './search-component.css'
import ItemStatusFilter from "../item-status-filter/itemStatusFilter";
/*
export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.searchText(term);
    };

    render() {
        return (
            <div className="search-component">
                <input
                    type="text"
                    placeholder="Type here to search"
                    className="search-input"
                    value={ this.state.term }
                    onChange={ this.onSearchChange }/>
                <ItemStatusFilter
                    buttonStatus={ this.props.buttonStatus }
                    onFilterChange={ this.props.onFilterChange }/>
            </div>
        );
    }
}*/

function onSearchChange (e) {
    const term = e.target.value;
    this.setState({ term });
    this.props.searchText(term);
}

function SearchPanel(props, state) {
    const { buttonStatus, onFilterChange } = props;
    const { term } = state;

    return (
        <div className="search-component">
            <input
                type="text"
                placeholder="Type here to search"
                className="search-input"
                value={term}
                onChange={onSearchChange}/>
            <ItemStatusFilter
                buttonStatus={buttonStatus}
                onFilterChange={onFilterChange}/>
        </div>
    );
}


export default SearchPanel;