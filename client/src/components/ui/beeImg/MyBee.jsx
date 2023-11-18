import React from 'react';
import moduleBee from './MyBee.module.sass'
import bee from './Sprite-0002.png'

const MyBee = () => {
    return (
        <div className={moduleBee.beeBox}>
            <img src={bee} alt='bee'/>
            <link href='/'/>
        </div>
    );
};

export default MyBee;