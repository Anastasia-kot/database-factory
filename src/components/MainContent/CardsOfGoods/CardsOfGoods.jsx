import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/app-reducer.ts';
import AddCard from './AddCard/AddCard';
import Card from './Card/Card';
import styles from './CardsOfGoods.module.css';


const CardsOfGoods = () => {


    const count = useSelector(state => state.appPage.count);
    const currentPage = useSelector(state => state.appPage.currentPage);
    const data = useSelector(state => state.appPage.data);


    let finishIndex = currentPage * (count) - 1;
    let startIndex = finishIndex - count + 1;

    let cards = [];

    for (let i = 0; i < data.length; i++) {
        if (i >= startIndex && i <= finishIndex) {
            let item = data[i];
            cards.push(item)
        }
    };

    const dispatch = useDispatch();

    let sortingDataByName = () => {    
        dispatch(actions.sortingData('name'))
    }
    let sortingDataById = () => {
        dispatch(actions.sortingData('id'))
    }
    let sortingDataByPower = () => {
        dispatch(actions.sortingData('power'))
    }
 
    let deleteCardOnClick = (id) => {
        dispatch(actions.deleteCard(id))
    }
 
    let updateCardOnClick = ( id, valueName,value ) => {
        dispatch(actions.updateCard({
            id: id,
            valueName: valueName,
            value: value
        }))
    }

    let addCardOnClick = (name, power) => {
        dispatch(actions.addCard({
            name: name,
            power: power,
        }))
    }



    return (<div className={styles.mainContent}>
           
            <div className={styles.cardsList}>

            <table>
                <thead><tr>
                    <th onClick={() => sortingDataById()}>
                        id ⬆⬇
                    </th>
                    <th onClick={() => sortingDataByName()}>
                        name ⬆⬇
                    </th>
        
                    <th onClick={() => sortingDataByPower()}>
                        power ⬆⬇
                    </th>
                    <th >   </th>
                
                </tr></thead>
<tbody>
            {cards.map(c => {
                return (<tr>
                    <Card card={c} key={c['id']} 
                        deleteCardOnClick={deleteCardOnClick}
                        updateCardOnClick={updateCardOnClick}/>
                    </tr> )
            })}
</tbody>
</table>
            <AddCard addCardOnClick={addCardOnClick}/>

</div>
</div>);
}


export default CardsOfGoods;