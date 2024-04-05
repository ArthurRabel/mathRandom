/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Alert ({initGame}) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        initGame();
    }

    if (isVisible == false) {
        return null;
    }

    return (
        <div className='w-1/2 max-w-3xl absolute h-96 bg-main-color flex flex-col items-center justify-center' id="alert">
            <h2 className='text-4xl mb-3 text-secundary-color'>Como Funciona?</h2>
            <p className='text-lg text-white w-3/4'>Após clicar em &apos;Entendi&apos;, o jogo iniciará. Você enfrentará 10 contas, e terá 15 segundos para resolver cada uma delas. Vamos lá!.</p>
            <input className=' bg-secundary-color py-4 px-24 rounded-md text-xl mt-5' type="button" value="Entendi" onClick={handleClose}/>
        </div>
    )
}