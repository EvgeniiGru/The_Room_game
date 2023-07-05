import {ReactChild, ReactChildren} from "react";

export interface AuxPropsChildren {
    children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}