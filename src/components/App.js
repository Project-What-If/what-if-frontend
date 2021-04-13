import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RoomsPage from './views/RoomsPage/RoomsPage';
import RoomPage from './views/RoomPage/RoomPage';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={RoomsPage} />
                <Route exact path="/room/:roomId" component={RoomPage} />
                <Route exact path="/edit/:roomId" component={RoomPage} />
            </Switch>
        </div>
    );
}

export default App;
