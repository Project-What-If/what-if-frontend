import React, { useRef, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import RoomPage from './views/RoomPage/RoomPage';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={RoomPage} />
            </Switch>
        </div>
    );
}

export default App;
