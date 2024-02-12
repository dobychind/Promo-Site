import React from 'react'
import { bubble as Menu } from 'react-burger-menu';
import './burger.css'


const burger = () => {
    return (
        <div>
            <Menu>
                <a className="menu-item" href="#about">О себе</a>
                <a className="menu-item" href="#cosmetology">Косметология</a>
                <a className="menu-item" href="#prevent">Превентивная медицина</a>
                <a className="menu-item" href="#AkneSchool">Школа Акне</a>
                <a className="menu-item" href="#rewards">Достижения</a>
                <a className="menu-item" href="#publications">Публикации</a>
                <a className="menu-item" href="#feedback">Отзывы</a>
            </Menu>
        </div>
    )
}

export default burger
