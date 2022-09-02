import React, { useState } from 'react';
import styles from './Card.module.css';
//import cn from 'classnames';



const Card = ({card, deleteCardOnClick, updateCardOnClick}) => {
       
    const [editModeForId, setEditModeForId] = useState(false);
    const [editModeForName, setEditModeForName] = useState(false);
    const [editModeForPower, setEditModeForPower] = useState(false);

    return (<>
            <td className={styles.cell} 
                onClick={() => setEditModeForId(true)}>

                    {editModeForId
                    ? <input
                        type='number' 
                        placeholder={card.id}
                        onBlur={(e) => {
                            setEditModeForId(false);
                            updateCardOnClick(card.id, 'id', +e.currentTarget.value)
                        }}/>
                    :  card.id  }
            </td>


            <td className={styles.cell} 
                onClick={()=>setEditModeForName(true)}>  
                    
                    {editModeForName
                    ? <input
                        type='text'
                        placeholder={card.name}
                        onBlur={(e) => {
                            setEditModeForName(false);
                            updateCardOnClick(card.id, 'name', e.currentTarget.value)
                     }} />
                : card.name}
            </td>






            <td className={styles.cell} 
                onClick={()=>setEditModeForPower(true)}> 
                    
                    {editModeForPower
                    ? <input
                        type='number'
                        placeholder={card.power}
                        onBlur={(e) => {
                            setEditModeForPower(false);
                            updateCardOnClick(card.id, 'power', +e.currentTarget.value)
                    }} /> 
                    : card.power + ' W'  }
                
                
                
                </td>

            <td className={styles.cell} onClick={()=>deleteCardOnClick(card.id)}> 
                <span className={styles.trashBucket}> 🗑️  </span>    </td>
 </> )
   

}







export default Card;