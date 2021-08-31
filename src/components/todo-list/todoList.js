import React from "react";

import TodoListItem from '../todo-list-item/todoListItem';
import './todo-list.css';

const TodoList = ( { todos, onDeleted, onChangeDone, onChangeImportant } ) => {

    const elements = todos.map( (item) => {

        const { id, ...itemProps } = item;
        return (
            <li key={ id } className="list-group-item">
                <TodoListItem
                    { ...itemProps }
                    onDeleted={() => onDeleted(id) }
                    onImportant={() => onChangeImportant(id) }
                    onDone={() => onChangeDone(id) }
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
}

export default TodoList;