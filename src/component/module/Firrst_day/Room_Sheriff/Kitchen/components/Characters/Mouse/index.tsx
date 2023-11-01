import './Mouse.scss';

import b_ from 'b_';
import React from 'react';
import {
    DialogCloud,
    DialogType,
    Image
} from 'rooms';
import {useMikeMove} from "./hooks";
import {useInventory} from "../../../../../../../root/Inventory/reduser";

const image = b_.with('mouse-img');
const constructor = b_.with('mouse-constructor');

const Mouse = () => {

    const {
        motionCheek,
        motionHand,
    } = useMikeMove();

    const {currentThing} = useInventory();

    return <DialogCloud text={currentThing !== ''? 'Мне это определенно не нужно, так что забей':'Привет мир'}
                        maxWidth={200}
                        position={DialogType.Position.LEFT}>
            <Image
                classNameImg={image('body')}
                classNameContainer={constructor('body')}>
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
    </DialogCloud>
}

export default React.memo(Mouse);