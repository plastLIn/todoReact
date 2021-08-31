import React, {useState} from "react";

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
/*
function onSearchChange (e) {

    const strSearch = e.target.value;
//    this.setState(strSearch);
    this.props.searchText(strSearch);
}*/

function SearchPanel(props) {
    const { buttonStatus, onFilterChange, searchText } = props;
    const [state, setState] = useState("");

    return (
        <div className="search-component">
            <input
                type="text"
                placeholder="Type here to search"
                className="search-input"
                value={ state.term }
                onChange={ (e) => {
                    searchText(e.target.value)
                    setState(e.target.value);
                }}/>
            <ItemStatusFilter
                buttonStatus={buttonStatus}
                onFilterChange={onFilterChange}/>
        </div>
    );
}

export default SearchPanel;