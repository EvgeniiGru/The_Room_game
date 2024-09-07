import './NextLocation.scss';

import b_ from 'b_';
import React, {useState} from "react";
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
    const [isHover, setHover ] = useState<boolean>(false)

    return <div className={b( {revers})}>
        <div className={b('next-location-block ')}
             onMouseEnter={()=> {setHover(true)}}
             onMouseLeave={()=> setHover(false)}
        >
            <Button.Icon
                disable={disable}
                className={b('block-location', {revers})}
                onClick={() => history.push(urlLocation)}
                mods={{
                    [IconType.Mods.Arrow]: true,
                    [IconType.SettingIcon.Color]: isHover ? IconType.Color.Red : IconType.Color.White,
                    [IconType.SettingIcon.HoverColor]:IconType.Color.Red,
             }}
            />
        </div>
    </div>
}

export default React.memo(NextLocation);