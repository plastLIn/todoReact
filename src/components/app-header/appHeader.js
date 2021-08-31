import React from "react";

import './app-header.css'

const AppHeader = ( {elemCount, doneElCo} ) => {

    return (
        <div className="app-header">
            <h1>TodoListFirst</h1>
            <div className="counter-view">{ elemCount } more to do, {doneElCo} done
            </div>
        </div>
    );
}

export default AppHeader;