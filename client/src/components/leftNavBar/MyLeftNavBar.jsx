import React from 'react';

import moduleNavBar from './MyLeftNavBar.module.sass'
import MyUserName from '../ui/userName/MyUserName';
import MyButtonHome from '../ui/buttons/buttonHome/MyButtonHome';
import MyButtonCreateOrder from '../ui/buttons/buttonHome/MyButtonCreateOrder';
import MyButtonSearch from '../ui/buttons/buttonHome/MyButtonSearch';
import MyButtonFavorite from '../ui/buttons/buttonHome/MyButtonFavorite';
import MySmallCard from '../ui/smallCard/MySmallCard';
import { Link } from 'react-router-dom';

const MyLeftNavBar = () => {
    return (
        <div>
            <div className={moduleNavBar.navbarBox}>
                <MyUserName name={'Михал Михалыч'} />
                <ul>
                    <li>
                        <Link to='/'><MyButtonHome/></Link>
                    </li>
                    <li>
                        <Link to='/user'><MyButtonCreateOrder/></Link>
                    </li>
                    <li>
                        <Link to='/order'><MyButtonSearch/></Link>
                    </li>
                    <li>
                        <Link to='/favorite'><MyButtonFavorite/></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MyLeftNavBar;