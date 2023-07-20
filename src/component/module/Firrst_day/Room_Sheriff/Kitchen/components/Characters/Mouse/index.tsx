import './Mouse.scss';

import b_ from 'b_';
import React, {useEffect, useState} from 'react';
import {Image} from 'rooms';

const image = b_.with('mouse-img');
const constructor = b_.with('mouse-constructor');

const Mouse = () => {
    const [motionHand, setMotionHand] = useState<boolean>(false);
    const [motionCheek, setMotionCheek] = useState<boolean>(false);

    useEffect( ()=> {
        const  handleSetMotionHand = () => {
            setMotionHand(prevState => !prevState)
        }

        const  handleSetMotionCheek = () => {
            setMotionCheek(prevState => !prevState)
        }

        const motionIntervalHand = setInterval(handleSetMotionHand, 2000);
        const motionIntervalCheek = setInterval(handleSetMotionCheek, 200)
        return () => {
            clearInterval(motionIntervalHand);
            clearInterval(motionIntervalCheek);
        };

    }, []);


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