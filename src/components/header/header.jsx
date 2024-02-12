import React from 'react'
import Burger from '../burger/burger';
import tgLogo from "/tg.png"

const header = () => {
    return (
        <div className='container rounded-b-lg bg-white py-4 px-3 flex space-between items-center md:px-6 md:rounded-none'>
            <Burger />

            <div className='text-textColor items-center ml-4 flex gap-3 w-fit text-end text-3xl font-bold md:ml-auto'>
                Ольга Добычина
                <a href='https://t.me/Olgadobych'><img src={tgLogo} alt='Telegram logo'></img></a>
                </div>

        </div>
    )
}

export default header;