import './NextLocation.scss';

import b_ from 'b_';
import React from "react";
import {useHistory} from "react-router-dom";
import {Button, IconType} from "rooms";

const b = b_.with('next-location');

interface INextLocation {
    urlLocation: string,
    revers?: boolean,
    disable?: boolean,
}

const NextLocation = ({urlLocation, revers, disable}:INextLocation) => {
    const history = useHistory();
    return <div className={b( {revers})}>
            <Button.Icon
                disable={disable}
                className={b('block-location', {revers})}
                onClick={() => history.push(urlLocation)}
                mods={{
                    [IconType.Mods.Arrow]: true,
                    [IconType.SettingIcon.Color]: disable ? IconType.Color.Gray : IconType.Color.White,
                    [IconType.SettingIcon.HoverColor]: disable ? IconType.Color.Gray : IconType.Color.Red
             }}
            />
    </div>
}

export default React.memo(NextLocation);