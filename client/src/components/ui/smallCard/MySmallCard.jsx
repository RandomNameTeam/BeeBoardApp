import React, { useState } from 'react';
import moduelSmallCard from './MySmallCard.module.sass'

import MyUserName from '../userName/MyUserName';
import MyButton from '../buttons/buttonOrange/MyButton';
import MyButtonLight from '../buttons/buttonOrangeLight/MyButtonLight';
import BigCard from '../bigCard/BigCard';

const MySmallCard = ({ name = 'Михаил', date, title, geo = 'Владивосток', ...props }) => {

    const [modalActive, setModalActive] = useState(false)

    return (
        <div className={moduelSmallCard.cardBox}>
            <div style={{ 'padding': '20px' }}>
                <div className={moduelSmallCard.nameBox}>
                    <MyUserName name={name} />
                    <div style={{ 'color': '#817A70', 'margin-bottom': '11px', 'font-size': '20px' }}>
                        {date}
                    </div>
                </div>
                <diV className={moduelSmallCard.geoBox}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z" fill="black" />
                    </svg> {geo}
                </diV>
                <div style={{ 'padding-top': '10px' }} className={moduelSmallCard.titleBox}>
                    {title}
                </div>
                <div className={moduelSmallCard.buttonBox}>
                    <MyButton title="Скрыть" onClick={() => setModalActive(true)} />
                    <MyButtonLight title="Подробнее" />
                </div>
            </div>
            <BigCard active={modalActive}
                setActive={setModalActive} />
        </div>
    );
};

export default MySmallCard;