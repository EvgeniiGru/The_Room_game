import './DialogCloud.scss';

import b_ from 'b_';
import React, {
    cloneElement,
    ReactElement,
    ReactNode, useCallback,
    useEffect, useLayoutEffect,
    useRef,
    useState
} from "react";
import {createPortal} from "react-dom";

const b = b_.with('dialog');

export enum Position{
    LEFT='left',
    RIGHT = 'right',
    DOWN_LEFT = 'down_left',
    DOWN_RIGHT='down_right',
}

interface IDialogCloud {
    text: string,
    maxWidth: number,
    position: Position,
    children: ReactNode,
}

const standardSizeDialogClouds: number = 33.5;

interface ICoords {
    left?: number,
    right?: number,
    top?: number,
    bottom?: number,
}

const getCoords = (position: Position, childElement: DOMRect, dialogElement?: DOMRect): ICoords => {
    const dialogHeight = dialogElement ? dialogElement.height : 0;
    switch (position) {
        case Position.LEFT:
            return {
                left: childElement.left + childElement.width / 2,
                top: childElement.y - dialogHeight - standardSizeDialogClouds + 10,
            }
        case Position.RIGHT:
            return {
                left: childElement.x - dialogElement.width + childElement.width / 2,
                top: childElement.y - dialogHeight - standardSizeDialogClouds + 10,
            }
        case Position.DOWN_RIGHT:
            return {
                left: childElement.left + childElement.width / 2,
                top: childElement.y + childElement.height + 10,
            }
        case Position.DOWN_LEFT:
            return {
                left: childElement.x - dialogElement.width + childElement.width / 2,
                top: childElement.y + childElement.height + 10,
            }
    }
}

const DialogCloud = ({position, text, maxWidth, children}: IDialogCloud) => {

    const dialogRef = useRef<HTMLDivElement>(null)
    const childrenRef = useRef<HTMLDivElement>(null)
    const [coords, setCoords] = useState<ICoords>();
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleChangeCoordinatesAccordingToScreenSize = useCallback((entries:  ResizeObserverEntry[]) => {
        if(childrenRef && dialogRef.current) {
            window.requestAnimationFrame(() => {
                if (!Array.isArray(entries) || !entries.length) {
                    return;
                }
            })
            const childElements = childrenRef.current.getBoundingClientRect();
            const dialogElement = dialogRef.current.getBoundingClientRect();
            setCoords(getCoords(position, childElements, dialogElement));
        }
    }, [])

    const handleTriggerElementClick = useCallback((e: MouseEvent ) => {
        const { target } = e;
        if (target instanceof HTMLElement) {
            const triggerElement = childrenRef.current.getElementsByClassName(target.className);
            const isTriggerObjClick = triggerElement.length > 0 && triggerElement[0].className === target.className

            if(isTriggerObjClick){
              setOpen(prev => !isOpen ? !prev: true);
            } else {
                setOpen( false)
            }
        }
    }, [])

    useLayoutEffect(()=> {
        const resizeObject = new ResizeObserver(handleChangeCoordinatesAccordingToScreenSize);
        if(childrenRef && dialogRef.current){
            resizeObject.observe(childrenRef.current);
        }
        return () => {
            resizeObject.disconnect();
        };
    }, [isOpen])

    useEffect(()=>{
        if(childrenRef && dialogRef){
            setCoords(getCoords(position, childrenRef.current.getBoundingClientRect(), childrenRef.current.getBoundingClientRect()));
            document.addEventListener('mousedown',  handleTriggerElementClick)
        }
        return ()=> document.removeEventListener('mousedown', handleTriggerElementClick)
    }, [])


    return <>
        {cloneElement(children as ReactElement,
            {
                ref: childrenRef,
            })}
        {isOpen && createPortal(<div
                ref = {dialogRef}
                className={b({[position]: true})}
                style={{...coords, maxWidth}}
            >
                <span>{text}</span>
            </div>,
            document.getElementById('root')
        )}
    </>
};

export default React.memo(DialogCloud);

