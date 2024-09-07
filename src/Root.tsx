import React from 'react';
import {render} from 'react-dom';
import App from "./App";
import {HashRouter} from "react-router-dom";
import LocationProviderComponent from "./component/root/NextLocation/reducer";
import ThemeProviderComponent from "./component/root/Settings/reduser";

render(
    <HashRouter>
        <ThemeProviderComponent>
            <LocationProviderComponent>
                <App/>
            </LocationProviderComponent>
        </ThemeProviderComponent>
    </HashRouter>,
    document.getElementById('root')
);
