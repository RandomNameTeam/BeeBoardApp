import React from 'react';
import moduleMain from './MainPage.module.sass'
import MyCategory from '../../ui/category/MyCategory';
import MySmallCard from '../../ui/smallCard/MySmallCard';

const MainPage = ({ data = [1,2,3,4, 5,6, 7, 8, 8, 10] }) => {
    return (
        <div>
            <div className={moduleMain.mainPageBox}>
                <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 18" fill="none">
                        <path d="M2 16H5V10H11V16H14V7L8 2.5L2 7V16ZM0 18V6L8 0L16 6V18H9V12H7V18H0Z" fill="#FDC029" />
                    </svg>
                    <h1 style={{ 'margin-left': '10px' }}>
                        Улей
                    </h1>
                </div>
                <div style={{ 'display': 'flex' }}>
                    <MyCategory title='Категория' style={{ 'margin-right': '30px' }} />
                    <MyCategory title='Тип' />
                </div>
                <h1 style={{ 'margin-top': '40px' }}>
                        Недавние объявления </h1>.
                <div className={moduleMain.cardBox}>
                        {data.map((el) =>
                            <div>
                                <MySmallCard
                                    name={'Михаил Михалыч'}
                                    theme={'Сантехник'}
                                    title={'Сантехник со стажем. Установка стальных смесителей, ремонт керамических поверхностей.'}
                                    date={'17 ноября'}
                                />
                            </div>
                        )}
                    
                </div>
            </div>
        </div>
    );
};

export default MainPage;