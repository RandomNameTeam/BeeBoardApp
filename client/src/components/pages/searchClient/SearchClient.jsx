import React from 'react';
import moduleCreateOrderPage from './CreateOrder.module.sass'

import { Link } from 'react-router-dom';

import MyInput from '../../ui/inputs/MyInput';
import MyButton from '../../ui/buttons/buttonOrange/MyButton';

const SearchClient = () => {
    return (
        <div className={moduleCreateOrderPage.create}>
            <div className={moduleCreateOrderPage.createBox}>
                <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11 12C9.9 12 8.95833 11.6083 8.175 10.825C7.39167 10.0417 7 9.1 7 8C7 6.9 7.39167 5.95833 8.175 5.175C8.95833 4.39167 9.9 4 11 4C12.1 4 13.0417 4.39167 13.825 5.175C14.6083 5.95833 15 6.9 15 8C15 9.1 14.6083 10.0417 13.825 10.825C13.0417 11.6083 12.1 12 11 12ZM11 10C11.55 10 12.0208 9.80417 12.4125 9.4125C12.8042 9.02083 13 8.55 13 8C13 7.45 12.8042 6.97917 12.4125 6.5875C12.0208 6.19583 11.55 6 11 6C10.45 6 9.97917 6.19583 9.5875 6.5875C9.19583 6.97917 9 7.45 9 8C9 8.55 9.19583 9.02083 9.5875 9.4125C9.97917 9.80417 10.45 10 11 10ZM22.1 23.5L18.9 20.3C18.55 20.5 18.175 20.6667 17.775 20.8C17.375 20.9333 16.95 21 16.5 21C15.25 21 14.1875 20.5625 13.3125 19.6875C12.4375 18.8125 12 17.75 12 16.5C12 15.25 12.4375 14.1875 13.3125 13.3125C14.1875 12.4375 15.25 12 16.5 12C17.75 12 18.8125 12.4375 19.6875 13.3125C20.5625 14.1875 21 15.25 21 16.5C21 16.95 20.9333 17.375 20.8 17.775C20.6667 18.175 20.5 18.55 20.3 18.9L23.5 22.1L22.1 23.5ZM16.5 19C17.2 19 17.7917 18.7583 18.275 18.275C18.7583 17.7917 19 17.2 19 16.5C19 15.8 18.7583 15.2083 18.275 14.725C17.7917 14.2417 17.2 14 16.5 14C15.8 14 15.2083 14.2417 14.725 14.725C14.2417 15.2083 14 15.8 14 16.5C14 17.2 14.2417 17.7917 14.725 18.275C15.2083 18.7583 15.8 19 16.5 19ZM3 20V17.225C3 16.6583 3.14167 16.1333 3.425 15.65C3.70833 15.1667 4.1 14.8 4.6 14.55C5.45 14.1167 6.40833 13.75 7.475 13.45C8.54167 13.15 9.725 13 11.025 13C10.825 13.3 10.6542 13.6208 10.5125 13.9625C10.3708 14.3042 10.2583 14.6583 10.175 15.025C9.175 15.1083 8.28333 15.2792 7.5 15.5375C6.71667 15.7958 6.05833 16.0667 5.525 16.35C5.35833 16.4333 5.22917 16.5542 5.1375 16.7125C5.04583 16.8708 5 17.0417 5 17.225V18H10.175C10.2583 18.3667 10.3708 18.7167 10.5125 19.05C10.6542 19.3833 10.825 19.7 11.025 20H3Z" fill="#FDC029" />
                    </svg>
                    <h1 style={{ 'margin-left': '10px' }}>
                        Найти клиента
                    </h1>
                </div>
                <div>
                    <h2>
                        Как к вам обращаться?
                    </h2>
                    <MyInput title='Имя' />
                </div>
                <div style={{ 'margin-top': '30px', 'display': 'flex', 'alignItems': 'right', 'justifyContent': 'right' }}>
                    <Link to='/order2'>
                        <MyButton title='Далее' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchClient;