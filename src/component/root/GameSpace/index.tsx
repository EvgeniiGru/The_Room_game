import React from "react";
import {Route, Switch} from "react-router-dom";
import {pathRoot} from "./type";
import FirstDay from "../../module/Firrst_day";


const DisplayComponent = () => {
    return <Switch>
            <Route
            path={pathRoot.FirstDay()}
            component={FirstDay}
            />
        </Switch>
}

export default DisplayComponent;