import React from 'react'
import Burger from '../burger/burger';
import tgLogo from "/tg.png"

const header = () => {
    return (
        <div className='container rounded-b-lg bg-lightColor py-4 px-3 flex space-between items-center md:px-6 md:rounded-none'>
            <Burger />
            <div className='flex items-center gap-3'>
                <a className='width-1/2 flex justify-end' href='https://t.me/Olgadobych'><img src={tgLogo} alt='Telegram logo'></img></a>
                <div className='text-textColor w-fit text-end text-3xl font-bold'>Ольга Добычина</div>
            </div>
        </div>
    )
}

export default header;