import {RefObject} from 'react';

export interface IAnimationNeonSetting {
    colorArray?: string[],
    duration: number,
    iterations: number,
}

interface IGetNeonLightsArg extends IAnimationNeonSetting{
    refElements: RefObject<HTMLDivElement>,
}

const arrayDefaultColorForAnimation = [
    'var(--white-natural-1) 10%',
    'var(--black-natural-3) 90%'
];

export const ID_NEON_LIGHTS = 'neon-light';

export const getNeonLights = ({colorArray, duration, iterations, refElements}:IGetNeonLightsArg) => {
    const colorArrayCurrent = colorArray ?? arrayDefaultColorForAnimation;
    const elementBorderButton = refElements.current;
    const stringColor = colorArrayCurrent.join(', ');
    const animationBorder = [];
    for(let i = 0; i <= 10; i++){
        const number = i/10;
        animationBorder.push({
            background: `linear-gradient(${number}turn, ${stringColor})`,
            offset: number === 0 || number === 1 ? null : number,
        })
    };
    elementBorderButton.animate(animationBorder, {duration, iterations, id: ID_NEON_LIGHTS});
}


export const hexToRGB = (hex: string) => {
    const bigint = parseInt(hex.split('#')[1], 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `rgb(${r},${g},${b})`
}
interface AddOpacityInColorRGBProps {
    color: string,
    processOpacity: number,
}
export const addOpacityInColorRGB = ({color, processOpacity}: AddOpacityInColorRGBProps) => {
    const arrayRGN = color.replace(/[rgb()]/g, '').split(',');
    return `rgba(${arrayRGN[0]},${arrayRGN[1]},${arrayRGN[2]}, 0.${processOpacity})`
}