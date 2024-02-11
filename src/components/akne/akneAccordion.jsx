import React from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import './index.css';

const AkneAccordion = () => {
    return (
        <div className='p-2 md:p-4'>
            <Accordion transition transitionTimeout={250} className='flex flex-col gap-2'>
                <AccordionItem className="szh-accordion__item-content text-xl flex-col text-start flex h-auto border rounded-xl p-2 text-textColor font-bold" header={<p className='hover:text-blueColor text-start'>Для кого проводится?</p>}>
                    <p className='text-base ml-2 font-medium text-start'>Обучение предназначено для врачей, косметологов-эстетистов.</p>
                </AccordionItem>

                <AccordionItem className="szh-accordion__item-content text-xl flex-col text-start flex h-auto border rounded-xl p-2 text-textColor font-bold" header={<p className='hover:text-blueColor text-start'>Что будет рассматриваться?</p>}>
                    <p className='text-base ml-2 font-medium text-start'>Интегративная школа акне включает в себя самые актуальные данные по
                        классификации,
                        этиологии,
                        патогенезу</p>
                </AccordionItem>

                <AccordionItem className="szh-accordion__item-content text-xl flex-col text-start flex h-auto border rounded-xl p-2 text-textColor font-bold" header={<p className='hover:text-blueColor text-start'>Примеры разбираемых тем</p>}>
                    <ul className='ml-5 text-base
                    font-medium text-start list-disc'>
                        <li>Диета при акне</li>
                        <li>Нутрицевтическая коррекция</li>
                        <li>Аптечные средства</li>
                        <li>Протоколы лечения акне</li>
                    </ul>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AkneAccordion;
