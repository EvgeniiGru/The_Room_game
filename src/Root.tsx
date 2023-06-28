import React from 'react';
import {render} from 'react-dom';
import App from "./App";
import {HashRouter} from "react-router-dom";
import LocationProviderComponent from "./component/root/reducer";


render(
    <HashRouter>
        <LocationProviderComponent>
            <App/>
        </LocationProviderComponent>
    </HashRouter>,
    document.getElementById('root')
);