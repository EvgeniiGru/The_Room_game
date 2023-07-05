import {pathRoot} from "../../../root/GameSpace/type";

import React from "react";

import FridgeInside from "./Kitchen/components/FridgeInside";
import Kitchen from "./Kitchen";
import Hall from "./Hall";
import Hallway from "./Hallway";
import Bedroom from "./Bedroom";



export const pathSheriffRoom = {
    Kitchen() {
        return `${pathRoot.FirstDay()}/kitchen`
    },
    FridgeInside() {
        return `${this.Kitchen()}/fridge-inside`
    },
    Hall() {
        return `${pathRoot.FirstDay()}/hall`
    },
    Hallway() {
        return `${pathRoot.FirstDay()}/hallway`
    },
    Bedroom() {
        return `${pathRoot.FirstDay()}/bedroom`
    }
}

export const mapRoutesSheriffRoom = [
    {path: pathSheriffRoom.Kitchen() , component: Kitchen, exact: true},
    {path: pathSheriffRoom.Hall() , component: Hall, exact: true},
    {path: pathSheriffRoom.Hallway() , component: Hallway, exact: true},
    {path: pathSheriffRoom.Bedroom() , component: Bedroom, exact: true},
    {path: pathSheriffRoom.FridgeInside() , component: FridgeInside, exact: true},
]
