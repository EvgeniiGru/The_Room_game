import './Modal.scss'

import b_ from 'b_';
import React, {
    ReactNode,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import {Button, IconType} from 'rooms';

const b = b_.with('modal');

interface IModal {
    children: ReactNode | ReactNode[],
    onClick: () => void,
    classContainer?: string,
    isOpen: boolean,
    onAnimation?: boolean,
}

const DURATION_ANIMATION_MODAL_WIN = 500;

const Modal = ({children, onClick, classContainer, isOpen, onAnimation}:IModal) => {
    const refModalWin = useRef<HTMLDivElement>(null);
    const refModalWinContainer = useRef<HTMLDivElement>(null);
    const refCross = useRef<HTMLDivElement>(null);
    const [isMountElement, setMountElement] = useState<boolean>(false);

    const animationFunctionModalWin = useCallback(async (isOpen: boolean)=> {
        if(refModalWin.current !== null && onAnimation){
            const firstPosition = isOpen ? 0 : 100;
            const currentElement = refModalWin.current;
            const durationAnimation = isOpen? 0 : DURATION_ANIMATION_MODAL_WIN;
            currentElement.style.setProperty('--translateY-modal', `${isOpen ? -100: 0}%`);
            currentElement.style.setProperty('--transition-duration-modal', `${durationAnimation}ms`);
            currentElement.style.setProperty('--blur-modal', `${isOpen ? 0 : 10}px`);
            const endAnimationPromise: Promise<boolean> = new Promise<boolean>((ex)=> {
                const endAnimation =  setTimeout(()=> {
                    currentElement.style.setProperty('--transition-duration-modal', `${DURATION_ANIMATION_MODAL_WIN}ms`);
                    currentElement.style.setProperty('--blur-modal', `${isOpen ? 10 : 0}px`);
                    currentElement.style.setProperty('--translateY-modal', `${-firstPosition}%`);
                    ex(isOpen);
                })
            })
            endAnimationPromise.then(item => {
                setTimeout(() => setMountElement(item), DURATION_ANIMATION_MODAL_WIN);
            })
        }else{
            setMountElement(isOpen)
        }
    }, []);


    useLayoutEffect(()=>{
        if(isOpen){
            setMountElement(true);
        } else {
            animationFunctionModalWin(false);
        }
    }, [isOpen]);

    useLayoutEffect(()=>{
        if(isMountElement){
            if (refModalWinContainer.current !== null && refCross.current !== null){
                const { width } = refModalWinContainer.current.getBoundingClientRect();
                refCross.current.style.setProperty('--margin-modal-cross', `${width - 50}px`);
            }
            animationFunctionModalWin(true);
        } else if(isMountElement !== isOpen){
            onClick();
        }
    }, [isMountElement])

    const handleEscapeClick = (event: KeyboardEvent) => {
        event.defaultPrevented;
        if(event.key === 'Escape') {
           animationFunctionModalWin(false);
        }
    }

    useEffect(()=> {
        document.addEventListener('keydown', handleEscapeClick)
        return () => {
            document.removeEventListener('keydown', handleEscapeClick)
        }
    }, [])

    return <>{isMountElement &&(
        <div ref = {refModalWin}

        className={b('background', {blur: !onAnimation})}>
            <div
                ref={refModalWinContainer}
                className={[
                    b('container'),
                    classContainer,
                ].join(' ')}>
                {onClick && (<div
                        ref={refCross}
                        className={b('cross-block')}>
                        <Button.Icon
                            className={b('cross')}
                            mods={{
                                [IconType.Mods.Cross]: true,
                                [IconType.SettingIcon.Color]: IconType.Color.Black,
                                [IconType.SettingIcon.HoverColor]: IconType.Color.Red,
                            }}
                            onClick={() => animationFunctionModalWin(false)}
                        />
                    </div>
                )}
                {children}
            </div>
    </div>)}</>

}


export default React.memo(Modal);
