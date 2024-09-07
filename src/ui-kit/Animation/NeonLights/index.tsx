import './NeonLights.scss';

import b_ from 'b_';
import React, {
    useEffect,
    useRef,
} from 'react';
import {AuxPropsChildren} from "../../../component/root/type";
import {getNeonLights, IAnimationNeonSetting, ID_NEON_LIGHTS} from "../function";

const b = b_.with('neon-lights');

interface INeonLights extends AuxPropsChildren{
    classNames?: string,
    settings: IAnimationNeonSetting,
    borderSize: number,
    off?: boolean
};

const NeonLights = ({children, borderSize, classNames, settings, off}:INeonLights) => {
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