import React from 'react';
import styles from './HeaderBlock.module.css';
 


const HeaderBlock = () => { 
    return (<div className={styles.headerBlockWrapper}>

        <div className={styles.headerMainWrapper}>

            <div className={styles.siteHeader}>Тестовое задание</div>
            <div className={styles.text}>


                <p> В "базе" есть массив "оборудования" с характеристиками:
                    id (number),  
                    name (string),
                    power (number). Нужно написать простое приложение, которое сможет: </p>
    
                    <ol>
                        <li> Отображать список такого оборудования с характеристиками (таблицу).</li>
                        <li>Добавлять новую единицу оборудования (без перезагрузки
                            страницы).</li>
                        <li>Удалять единицу оборудования.</li>
                        <li>Править единицу оборудования.</li>
                    </ol>
              

            </div>
        </div>


            </div>)
}

export default HeaderBlock;