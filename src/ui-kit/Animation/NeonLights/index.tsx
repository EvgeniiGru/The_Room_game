import './NeonLights.scss';

import b_ from 'b_';
import React, {
    FC,
    useEffect,
    useRef,
} from 'react';
import {getNeonLights, ID_NEON_LIGHTS} from "../function";
import {INeonLightsProps} from './NeonLights.types'

const b = b_.with('neon-lights');

const NeonLights: FC<INeonLightsProps> = ({children, borderSize, classNames, settings, off}) => {
    const refNeonLights = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const current = refNeonLights.current;
        current.style.setProperty('--neon-lights-border-size', `${borderSize}px`);
        if(!off) {
            getNeonLights({...settings, refElements: refNeonLights});
        } else {
            const findAnimation = current.getAnimations().find(value => value.id === ID_NEON_LIGHTS);
            if(findAnimation !== undefined){
                findAnimation.cancel();
            }
        }
    }, [off])

    return <div
        ref={refNeonLights}
        className={[
        b(),
        classNames
    ].join(' ')}>
        {children}
    </div>
};

export default React.memo(NeonLights);