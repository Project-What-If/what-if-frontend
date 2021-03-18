import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RoomsPage from './views/RoomsPage/RoomsPage';
import RoomPage from './views/RoomPage/RoomPage';
import '../App.css';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={RoomsPage} />
                <Route exact path={process.env.PUBLIC_URL + '/room/:roomId'} component={RoomPage} />
                <Route exact path={process.env.PUBLIC_URL + '/edit/:roomId'} component={RoomPage} />
            </Switch>
        </div>
    );
}

export default App;
