import React, {Component} from "react";

import './adding-subj.css';

export default class AddingSubj extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubjectAdded(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {

        return (
            <form className="item-add-subject d-flex"
                  onSubmit={this.onSubmit}>

                <input placeholder="Enter new subject"
                       className="subject-input"
                       id="enter-subject"
                       onChange={this.onLabelChange}
                       value={this.state.label}
                />

                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Enter
                </button>
            </form>
        );
    }
}
