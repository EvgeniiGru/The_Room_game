import './Fridge.scss';

import b_ from 'b_';
import React from "react";
import {Image, Song,} from "rooms";
import useSound from "use-sound";
import {useFridge} from "./reduser";
import {useHistory} from 'react-router-dom'
import {pathSheriffRoom} from "../../../type";


const img = b_.with('fridge-img');
const construction = b_.with('fridge-construction');

const Fridge = () => {

    const [songDoor] = useSound(Song.fridgeOpenCloseDoor,{sprite: {open: [0, 1500], close:[2500, 3000]}});
    const history = useHistory();

    const {
        setOpenBottomDoorFridge:setOpenBottomDoor,
        setOpenTopDoorFridge:setOpenTopDoor,
        isOpenTopDoor:isOpenTopDoor,
        isOpenBottomDoor:isOpenBottomDoor
    } = useFridge();

    return <Image
        classNameContainer={construction({main: true})}
        classNameImg={img({main: true})}
    >
        <Image
            onClick={() => {
                songDoor({id: 'close'})
                setOpenTopDoor(!isOpenTopDoor)
            }}
            classNameContainer={construction({top_open: isOpenTopDoor, top: !isOpenTopDoor})}
            classNameImg={img({top_open: isOpenTopDoor, top: !isOpenTopDoor})}/>
            <div className={construction('bottom-block-door')}>
        <Image
            onClick={() => {
                if(!isOpenBottomDoor) {
                    songDoor({id: 'close'})
                    setOpenBottomDoor(true)
                } else {
                    history.push(pathSheriffRoom.FridgeInside());
                }
            }}
            classNameContainer={construction({bottom: !isOpenBottomDoor, bottom_open: isOpenBottomDoor })}
            classNameImg={img({bottom: !isOpenBottomDoor, bottom_open: isOpenBottomDoor})}>
        </Image>
                {isOpenBottomDoor && (<Image
                    onClick={()=>{
                        songDoor({id: 'close'})
                        setOpenBottomDoor(false)
                    }}
                    classNameContainer={construction({opened_door: true})}
                    classNameImg={img({opened_door: true})}
                />)}
            </div>
    </Image>
}

export default React.memo(Fridge);