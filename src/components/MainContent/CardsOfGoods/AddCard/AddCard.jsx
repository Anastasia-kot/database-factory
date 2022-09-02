import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import styles from './AddCard.module.css';

const AddCard = ({ addCardOnClick }) => {
 
    return (<div className={styles.mainContent}>
                     
<Formik
                initialValues={{ name: '', power:''}}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        
                        alert(values.name);
                        addCardOnClick(values.name, values.power )
                        
                        

                        setSubmitting(false);
                    }, 400);
                }}
>
                {({ values, errors, touched, handleChange, handleSubmit, isSubmitting, }) => (
                    
<form onSubmit={handleSubmit}>

                        

                        <span className={styles.spanLabel} > Добавьте новый станок: </span>
                            <input 
                                className={styles.searchInput} 
                                placeholder='Введите название'
                                name="name"
                                type="text"
                                onChange={handleChange}
                                value={values.name} 
                                 />
                      
                            <input
                                className={styles.searchInput}
                                placeholder='Введите мощность'
                                name="power"
                                type="number"
                                onChange={handleChange}
                                value={values.power}
                                  />
                                
                    

                        <button 
                            className={styles.searchButton} 
                            type="submit"
                            disabled={isSubmitting}> 
                            Добавить
                        </button>
                    </form>
                )}
</Formik>
</div>);
}


export default AddCard;