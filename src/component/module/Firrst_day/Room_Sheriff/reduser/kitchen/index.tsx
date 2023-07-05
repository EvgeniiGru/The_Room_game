import React from "react";
import FridgeProviderComponent from "../../Kitchen/components/Fridge/reduser";
import {AuxPropsChildren} from "../../../../../root/type";

export const KitchenProviderComponent = ({children}: AuxPropsChildren): JSX.Element => {
    return (<FridgeProviderComponent>
        {children}
    </FridgeProviderComponent>)
}


export default KitchenProviderComponent;