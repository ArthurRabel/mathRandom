/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useEffect } from "react";
export default function Timer({gameStarted, nextRound, round, time, setTime}) {

    const startTimer = () => {
        return setInterval(() => {
            if (time < 15 && round <= 10) {
                setTime(prevTime => prevTime + 1);
            }
        }, 1000);
    }

    useEffect(() => {
        let timer;
        if (gameStarted) {
            timer = startTimer();
        }
        return () => {
            clearInterval(timer);
        }
    }, [time, gameStarted]);

    useEffect(() => {
        if (time === 15 && round < 10) {
            setTime(0);
            nextRound(false);
        }
    }, [time, round]);

    return (
        <div className="ml-4 w-40 h-40 rounded-full border-inherit border flex justify-center items-center">
            <p className=' text-5xl'>{time} <span className="text-sm">seg</span></p>
        </div>
    )
}

Timer.propTypes = {
    gameStarted: PropTypes.bool.isRequired,
    nextRound: PropTypes.func.isRequired,
    round: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    setTime: PropTypes.func.isRequired,
};