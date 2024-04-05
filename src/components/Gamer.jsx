/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

export default function Gamer({gameStarted, nextRound, round, correct}) {
    const [account, setAccount] = useState('');
    const [hasAnsweredCorrectly, setHasAnsweredCorrectly] = useState(false);

    const randomAccount = () => {
        const operators = ['+', '-', '*', '/'];
        let tempOperator = operators[Math.floor(Math.random() * 4)];
        let tempNumber = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1];

        setAccount(`${tempNumber[0]} ${tempOperator} ${tempNumber[1]}`);
    }

    useEffect(() => {
        if (gameStarted) {
            randomAccount()
            setHasAnsweredCorrectly(false)
          }
        }, [gameStarted, round]);

    const verify = (event) => {
        event.preventDefault();
        if(round <= 10){
            if (!hasAnsweredCorrectly && document.querySelector('input[type="text"]').value == eval(account)) {
                nextRound(true)
                setHasAnsweredCorrectly(true)
            } else {
                nextRound(false)
            }
        }
    }


    return (
        <div>
            <h1 className='text-4xl mb-7 text-secundary-color'>Math Random</h1>
            <form className='mb-5 flex items-center' onSubmit={verify}>
                <p className='text-lg'>{account}= </p>
                <input className='p-2 mx-2 rounded-md w-10 bg-bg-color'  type="text" name="" id="" placeholder='???'/>
                <input className='bg-gray-800 mx-1 py-2 px-5  rounded-md' type="submit" value="Verificar" />
            </form>
            <div className='flex justify-between'>
                <p>Acertos: {correct}/10</p>
                <p>Rodadas: {round}/10</p>
            </div>
        </div>
    )
}