import './DialogCloud.scss';

import b_ from 'b_';
import React from "react";

const b = b_.with('dialog');

export enum Position{
    LEFT='left',
    RIGHT = 'right',
}

interface IDialogCloud {
    text: string,
    maxWidth: number,
    position: Position,
}

const DialogCloud = () => {
    return <></>
};

export default React.memo(DialogCloud);