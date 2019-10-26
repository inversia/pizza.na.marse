import React, { useRef, useContext } from 'react'
import './Footer.css'
import { YMaps, Map } from 'react-yandex-maps';

export default function Footer () {

    return <>
        <h1 className='footer-title'>Контакты</h1>
        <div className='footer-logo'></div>
        <div className='footer-content' itemscope itemtype='http://schema.org/Restaurant'>
            <div className='general-info'>
                <div className='telephone'>Телефон: <a href='tel:+7 495 005 59 36'>+7 495 005 59 36</a><a className='second' href='tel:+7 495 005 59 36'>+7 495 005 59 36</a></div>
                <div className='email'>E-mail: <a href="mailto:pizzanamarse@gmail.com">pizzanamarse@gmail.com</a></div>          
                <div className='address'>Адрес: <a href='https://yandex.ru/maps/213/moscow/?ll=37.667875%2C55.751033&mode=search&sll=37.622504%2C55.753215&sspn=1.312866%2C0.518904&text=%D0%9A%D0%BE%D1%81%D1%82%D0%BE%D0%BC%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D0%B5%D1%80%D0%B5%D1%83%D0%BB%D0%BE%D0%BA%20%D0%B4.3%20%D1%81.6%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&z=17.35'> Костомаровский переулок д.3 с.6, Москва</a></div>
                <div className='time'><span>Часы работы:</span>
                        <time itemprop='openingHours' datetime='Mo, Fr 10:00-22:00'><br/>Пн-Пт: 10:00 — 22:00</time>
                        <time itemprop='openingHours' datetime='Sa 14:00-22:00'>         Сб:<span className='weekend'>14:00 — 22:00</span></time>
                        <time itemprop='openingHours' datetime='Su 00:00-22:00'>         Вс:<span className='weekend'>00:00 — 22:00</span></time>
                        
                        <meta itemprop="openingHours" content="Mo-Fr 10:00-22:00"/>
                        <meta itemprop="openingHours" content="Sa 14:00-22:00"/>
                        <meta itemprop="openingHours" content="Su 00:00-22:00"/> 

                        <meta itemprop="acceptsReservations" content="true"/>
                </div>
            </div>
            <YMaps>
                <script  type='text/javascript' charset='utf-8' async src='https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aaac9885f941d30a51c13a1dab4e919170146be5b3d8949f52088c73939b8a542&amp;width=52vw&amp;height=52vw&amp;lang=ru_RU&amp;scroll=true'></script>
                <Map className='map' defaultState={{ center: [55.750879, 37.667644], zoom: 13 }} />
            </YMaps>
        </div>
    </>
}