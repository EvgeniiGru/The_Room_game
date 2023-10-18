import React, {useEffect, useState} from "react";

export const useMousesMove = () => {
    const [motionHand, setMotionHand] = useState<boolean>(false);
    const [motionCheek, setMotionCheek] = useState<boolean>(false);

    useEffect( ()=> {
        const  handleSetMotionHand = () => {
            setMotionHand(prevState => !prevState)
        }

        const  handleSetMotionCheek = () => {
            setMotionCheek(prevState => !prevState)
        }

        const motionIntervalHand = setInterval(handleSetMotionHand, 2000);
        const motionIntervalCheek = setInterval(handleSetMotionCheek, 200)
        return () => {
            clearInterval(motionIntervalHand);
            clearInterval(motionIntervalCheek);
        };

    }, []);

    return {motionCheek, motionHand}
}