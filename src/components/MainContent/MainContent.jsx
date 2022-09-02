import React from 'react';
import styles from './MainContent.module.css';
import CardsOfGoods from './CardsOfGoods/CardsOfGoods';
import Paginator from './Paginator/Paginator';




const MainContent = (props) => {
    
    return (<div className={styles.pageMainContent}>

        <Paginator  />
        <CardsOfGoods />

    </div>);
}
 

export default  MainContent;