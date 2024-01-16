import React from 'react'
import Burger from '../burger/burger';
import tgLogo from "/tg.png"

const header = () => {
    return (
        <div className='container rounded-b-lg bg-mainColor py-4 px-3 flex space-between items-center md:px-6'>
            <Burger />
            <div className='flex items-center gap-3'>
                <a href='https://t.me/Olgadobych'><img src={tgLogo} alt='Telegram logo'></img></a>
                <p className='text-white text-3xl font-bold'>Ольга Добычина</p>
            </div>
        </div>
    )
}

export default header;