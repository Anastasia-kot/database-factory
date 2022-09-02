import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/app-reducer.ts';
 import styles from './Paginator.module.css';




const Paginator = (props) => {
    
    const totalCount = useSelector(state => state.appPage.totalCount);
    const count = useSelector(state =>  state.appPage.count);
    const currentPage = useSelector(state => state.appPage.currentPage);
    const editModePaginationSize = useSelector(state => state.appPage.editModePaginationSize);
 

    let pagesCount = Math.ceil( totalCount / count);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) { pages.push(i) }



    const dispatch = useDispatch();

    let setCurrentPageOnClick = (page) => { 
        dispatch(actions.setCurrentPage(page))
    }
    let setPaginationSizeOnClick=(size)=>{
        dispatch(actions.setPaginationSize(size))
    }
    let setEditModePaginationSizeOnClick = () => {
        dispatch(actions.setEditModePaginationSize())
    }



    return ( 
        <div className={styles.categoriesWrapper}>
        {pages.map(p => {
                return (
                    <span key={p}
                        className={(p === currentPage) ? styles.selected : ''}
                        onClick={() => setCurrentPageOnClick(p)}> 
                            {p} 
                    </span>
                )
            })
        }

            <span className={styles.settings}>
                <span className={styles.settings} onClick={() => setEditModePaginationSizeOnClick() }>⚙️</span>
                
                {editModePaginationSize &&
                <select className={styles.selectWrapper}
                    name="paginationSizeSelect" 
                    onChange={(e) => {
                        setPaginationSizeOnClick(e.target.value);
                        setEditModePaginationSizeOnClick();
                        setCurrentPageOnClick(1);

                    }
                    }
                >

                    <option value='20'>Выберите значение</option>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                    <option value='25'>25</option >
                    <option value='30'>30</option>
                    <option value='35' >35</option >
                    <option value='40' >40</option >
                    <option value='45' >45</option >
                    <option value='50' >50</option >
                                
                
                </select>}
            </span>


        </div>

);}

export default Paginator;