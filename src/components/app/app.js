import React, {Component} from 'react';

import AppHeader from "../app-header/appHeader";
import SearchPanel from '../search-component/searchComponent';
import TodoList from "../todo-list/todoList";
import AddingSubj from "../adding-subj";
import './app.css'

export default class App extends Component {

    createSubjectForm = (subject) => {
        return {
            label: subject,
            important: false,
            done: false,
            id: this.localId++
        };
    };

    localId = 100;

    state = {
        todoData: [
            this.createSubjectForm('Drink Coffee'),
            this.createSubjectForm('Make Awesome App'),
            this.createSubjectForm('Have a lunch')
        ],
        newSubj: null,
        term: '',
        filterButton: 'all'
    };

    deleteItem = (id) => {
        this.setState( ({ todoData }) => {
           const newArray =  todoData.filter((todo) => todo.id !== id )
            return {
                todoData: newArray
            };
        })
    };

    addItem = (subj) => {
        const newSubject = this.createSubjectForm(subj);
        this.setState(({ todoData }) => {
            const newArray = [
                ...todoData,
                newSubject
            ];
            return {
                todoData: newArray
            };
        });
    };

    togglePropStatus = (arr, id, propName) => arr.map((el) => {
        if (el.id === id) {
            el[propName] = !el[propName];
        }
        return el;
    });//(el.id === id) ? el[propName] = !el[propName] : el);   В 1 строку попробовать


    changeImportantStatus = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.togglePropStatus(todoData, id, 'important')
            };
        });
    }

    changeDoneStatus = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.togglePropStatus(todoData, id, 'done')
            };
        });
    }

    onSearch = (term) => {
        this.setState({ term });
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }

    filterShow (items, filterButton) {
        switch (filterButton) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    onFilterChange = (filterButton) => {
        this.setState({ filterButton });
    }


    render() {
        const { todoData, term, filterButton } = this.state;
        const visibleItems = this.filterShow(this.search(todoData, term), filterButton);
        const doneElemCount = this.state.todoData.filter((el) => el.done === true).length;
        const elementCount = this.state.todoData.length - doneElemCount;
        return (
            <div className="main">
                <AppHeader
                    elemCount={ elementCount }
                    doneElCo={ doneElemCount }
                />
                <SearchPanel
                    searchText={ this.onSearch }
                    buttonStatus={ this.state.filterButton }
                    onFilterChange={ this.onFilterChange }
                />
                <TodoList
                    todos={ visibleItems }
                    onDeleted={ this.deleteItem }
                    onChangeImportant={ this.changeImportantStatus }
                    onChangeDone={ this.changeDoneStatus }
                />
                <AddingSubj
                    onSubjectAdded={ this.addItem }
                />
            </div>
        );
    }
}