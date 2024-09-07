import './CommonButton.scss';

import b_ from 'b_';
import React, {useEffect, useRef, useState} from "react";
import {handleOnClick} from "../../function/indes";
import {Animation} from "rooms";

const b = b_.with('common-bt');

interface ICommonBt {
    onClick: () => void,
    disable?: boolean,
    className?: string,
    text: string,
}

const CommandButton = ({
    onClick,
    disable,
    className,
    text,
}:ICommonBt) => {
    const [isOnMouseEnter] = useState<boolean>(false);
    const btCommon = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const handleOnMouseEnter = (evn: MouseEvent) => {
            const elementDivCommonBt = btCommon.current;
            const coordsElementDivCommonBt = elementDivCommonBt.getBoundingClientRect();
            const sizeElementDivCommonBt = coordsElementDivCommonBt.width >= coordsElementDivCommonBt.height ?
                coordsElementDivCommonBt.width : coordsElementDivCommonBt.height;
            const x = evn.x - coordsElementDivCommonBt.left;
            const y = evn.y - coordsElementDivCommonBt.top;
            elementDivCommonBt.style.setProperty('--size-bt', `${sizeElementDivCommonBt}px`);
            elementDivCommonBt.style.setProperty('--mouse-x', `${x}px`);
            elementDivCommonBt.style.setProperty('--mouse-y', `${y}px`);
        }

      document.addEventListener('mousemove', handleOnMouseEnter);
      if(!isOnMouseEnter){
          document.removeEventListener('mousemove', handleOnMouseEnter);
      };
      return ()=>{
          if(isOnMouseEnter) document.removeEventListener ('mousemove', handleOnMouseEnter);
      }
    }, [isOnMouseEnter])

   return <Animation.NeonLights borderSize={1} settings={{duration: 1000, iterations: Infinity}}>
        <div
            ref={btCommon}
            className={[
            b({disable}),
            className,
        ].join(' ')}
              onClick= {(event)=> handleOnClick({onClick, disable, event})}
        >
            <h5>{text}</h5>
        </div>
   </Animation.NeonLights>
}

export default React.memo(CommandButton);