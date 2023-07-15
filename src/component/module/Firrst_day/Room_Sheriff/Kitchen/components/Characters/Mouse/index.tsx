import './Mouse.scss';

import b_ from 'b_';
import React from 'react';
import {Image} from 'rooms';

const image = b_.with('mouse-img');
const constructor = b_.with('mouse');

const Mouse = () => {
    return <Image classNameImg={image('body')} ></Image>
}

export default React.memo(Mouse);