import './Mouse.scss';

import b_ from 'b_';
import React from 'react';
import {Image} from 'rooms';
import {useMousesMove} from "./hooks";

const image = b_.with('mouse-img');
const constructor = b_.with('mouse-constructor');

const Mouse = () => {

    const {
        motionCheek,
        motionHand,
    } = useMousesMove();

    return <Image
        classNameImg={image('body')}
        classNameContainer={constructor('body')}
    >
        <div className={constructor('block-cheek')}>
            <Image
                classNameImg={image('cheek')}
                classNameContainer={constructor('cheek', {motion: motionCheek})}
            />
        </div>
        <Image
            classNameImg={image('hand')}
            classNameContainer={constructor('hand', {motion: motionHand})}
        />
    </Image>
}

export default React.memo(Mouse);