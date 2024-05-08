import { useState, useEffect } from "react";

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    const handleStartStop = () => {
        setTimerOn(!timerOn);
    }

    const handleReset = () => {
        setSeconds(0);
        setTimerOn(false);
    }

    useEffect(() => {
        let timerId;
        if(timerOn){
            timerId = setInterval(() => {
                setSeconds((prevSec) => prevSec+1)
            }, 1000)
        }
        return () => clearInterval(timerId);
    }, [timerOn, seconds]);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "15px",
            marginTop: "15px"
        }}>
            <h1>Stopwatch</h1>
            <p>Time: <span>{Math.floor(seconds/60)}:{(seconds%60)>=10 ? (seconds%60) : `0${seconds%60}`}</span></p>
            <div>
                <button onClick={handleStartStop}>{!timerOn ? "Start" : "Stop"}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;