import React from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import './index.css';



const PrevAccordeon = () => {
    return (
        <Accordion transition transitionTimeout={250} className='flex flex-col gap-2'>
            <AccordionItem className="szh-accordion__item-content text-xl flex-col text-start flex h-auto border rounded-xl p-2 text-textColor font-bold " header={<p className='hover:text-blueColor text-start'>Что такое превентивная медицина?</p>}>
                <p className='text-base ml-2 font-medium text-start'>Основная цель превентивной медицины - профилактика любого заболевания  и сохранение активного долголетия.</p>
                <ul className='ml-2 py-1'>
                    <li className='font-semibold text-base'>Это качество вашей жизни</li>
                    <li className='font-semibold text-base'>Это ваше хорошее самочувствие</li>
                    <li className='font-semibold text-base'>Высокий уровень энергии</li>
                </ul>
            </AccordionItem>

            <AccordionItem className="szh-accordion__item-content text-start text-xl flex-col flex h-auto border rounded-xl p-2 text-textColor font-semibold" header={<p className='hover:text-blueColor text-start'>С какими проблемами, запросами вы можете обратиться ко мне?</p>}>
                <ul className='ml-5 text-base
                 font-medium text-start list-disc'>
                    <li>У вас есть желание улучшить свое качество жизни</li>
                    <li>Вы чувствуете слабость ,быструю утомляемость</li>
                    <li>Вас беспокоит лишний вес</li>
                    <li>Есть выпадение волос</li>
                    <li>Депрессивное, тревожное состояние</li>
                </ul>
            </AccordionItem>

            <AccordionItem className="szh-accordion__item-content text-xl flex-col flex h-auto border rounded-xl p-2 text-textColor font-semibold " header={<p className='hover:text-blueColor text-start'>Как записаться на консультацию?</p>}>
                <p className='ml-5 text-base
                 font-medium text-start'>Запись на консультацию производится через телешрам, перейти можно по кнопке ниже</p>
            </AccordionItem>
        </Accordion>
    )
}

export default PrevAccordeon
