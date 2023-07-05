
import React from "react";
import TaskList from "../../root/TaskSheet/";
import {Route} from "react-router-dom";
import KitchenProviderComponent from "./Room_Sheriff/reduser/kitchen";
import {mapRoutesSheriffRoom} from "./Room_Sheriff/type";

const FirstDay = () => {
    return <KitchenProviderComponent>
       <TaskList/>
        <>
            { mapRoutesSheriffRoom.map(route => <Route
                    key={route.path}
                    path={route.path}
                    exact={true}
                    component={route.component}
                />
            )}
        </>
        </KitchenProviderComponent>
}

export default FirstDay;