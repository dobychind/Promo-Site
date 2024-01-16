import React, { useState } from "react";
import './burger.css'

const Burger = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div className="w-2/5">
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
                <a href="#"><p className="text-white text-lg text-center w-auto hover:decoration-1, cursor-pointer">О себе</p></a>
                <a href="#"><p className="text-white text-lg text-center w-auto hover:decoration-1, cursor-pointer">Направления</p></a>
                <a href="#"><p className="text-white text-lg text-center w-auto hover:decoration-1, cursor-pointer">Обо мне</p></a>
            </div>
        </div>
    )
}

export default Burger