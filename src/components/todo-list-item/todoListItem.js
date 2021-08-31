import React, { Component } from "react";

import './todo-list-item.css';

class TodoListItem extends Component {

    render() {

        const { done, important, label, onDeleted, onDone, onImportant } = this.props;

        let classNames = 'todo-list-item'
        if(done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important';
        }

        return (
            <span className={ classNames }>
            <span className="todo-list-item-label"
                  onClick={ onDone } >
                { label }
            </span>

            <div className="buttons">
                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right button"
                    onClick={ onImportant }>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-lg" viewBox="0 0 16 16">
                  <path d="M6.002 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm.195-12.01a1.81 1.81 0 1 1 3.602 0l-.701 7.015a1.105 1.105 0 0 1-2.2 0l-.7-7.015z"/>
                </svg>
            </button>
            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right button"
                onClick={ onDeleted } >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button>
            </div>
        </span>
        );
    }
}

export default TodoListItem;