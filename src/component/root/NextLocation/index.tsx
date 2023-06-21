import './NextLocation.scss';

import b_ from 'b_';
import React from "react";
import {useHistory} from "react-router-dom";
import {Button, IconType} from "rooms";

const b = b_.with('next-location');

interface INextLocation {
    urlLocation: string,
    revers?: boolean,
}

const NextLocation = ({urlLocation, revers}:INextLocation) => {
    const history = useHistory();
    return <div className={b( {revers})}>
            <Button.Icon
            className={b('block-location', {revers})}
            onClick={() => history.push(urlLocation)}
            mods={{
                [IconType.Mods.Arrow]: true,
            }}
            />
    </div>
}

export default React.memo(NextLocation);