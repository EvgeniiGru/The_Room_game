import './BackButton.scss';

import b_ from 'b_';
import React, {useEffect, useState} from 'react';
import {createPortal} from "react-dom";
import {useHistory} from 'react-router-dom'
import {Button} from "rooms";

const b = b_.with('back-button');

export const ButtonBack = () => {
    const history = useHistory();
    const [domReady, setDomReady] = useState(false)

    useEffect(() => {
        setDomReady(true)
    }, [])

    return <>
        {domReady && createPortal(<div
                className={b()}
            >
                <Button.Command className={b('back-bt-style')}
                                onClick={()=>{history.goBack()}}
                                text={'Назад'}/>
            </div>,
            document.getElementById('background')
        )}
        </>
}


