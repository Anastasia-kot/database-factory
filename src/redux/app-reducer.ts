import { InferActionsTypes } from './redux-store';

 
let initialState =  {
    totalCount: 8,
    count: 4,
    editModePaginationSize: false,
    currentPage: 1,
    lastSort: 'id' as lastSortType,
    data: [
        {
            'id': 1,
            "name": "Станок 1",
            "power": 220,
        },
        {
            "id": 2,
            "name": "Станок 2 ",
            "power": "220",
        },
        {
            "id": 3,
            "name": "Станок 3",
            "power": 220,
        },
        {
            "id": 4,
            "name": "Станок 4",
            "power": 220,
        },
        {
            "id": 5,
            "name": "Станок 5",
            "power": 220,
        },
        {
            "id": 6,
            "name": "Станок 6",
            "power": 220,
        },
        {
            "id": 7,
            "name": "Станок 7",
            "power": 220,
        },
        {
            "id": 8,
            "name": "Станок 8",
            "power": 220,
        }
    ] as Array<machineType>
 
};

export type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: ActionTypes): InitialStateType => {
     switch (action.type) {

         case 'SET_CURRENT_PAGE':
            return {
                 ...state,
                 currentPage: action.page
            };

         case 'SET_EDIT_MODE_PAGINATION_SIZE':
             let newEditMode = !(state.editModePaginationSize);
             console.log(newEditMode)
            return {
                ...state,
                editModePaginationSize: newEditMode
            };

         case 'SET_PAGINATION_SIZE':
            return {
                 ...state,
                count: (+action.size)
            };

         case 'SORT_DATA':
            let myarray = [...state.data];
            if (state.lastSort === action.sortingParameter) {
                myarray.reverse();
            } else {
                switch (action.sortingParameter) {
                    case 'id': myarray = myarray.sort((a, b) => a.id > b.id ? 1 : -1); break;
                    case 'name': myarray = myarray.sort((a, b) => a.name > b.name ? 1 : -1); break;
                    case 'power': myarray = myarray.sort((a, b) => a.power > b.power ? 1 : -1); break;
                 }
             }
             return {
                 ...state, data: [...myarray], lastSort: action.sortingParameter
             };

         case 'DELETE_CARD':
           
             return {
                 ...state, 
                 data: 
                    state.data.filter( (item) =>  item['id'] !==action.id)             
                };

         case 'ADD_CARD':
            debugger
            let generatedId = state.data[state.data.length - 1].id + 1;
            let newMachine: machineType = { 'name': action.payload.name, 'power': action.payload.power, 'id': generatedId };
            console.log(newMachine)
            return {
                 ...state, data: [...state.data, newMachine]  
            };

         case 'UPDATE_CARD':
             
             let arr =  state.data.map(card => {
             if ( card['id'] === action.payload.id ) {
                 for (let key in card) {
                     if ( key === action.payload.valueName ) {
                             let newCard = {...card};
                         newCard[key] = action.payload.value
                         return newCard
                      }
                 } return card
             } else {
                return card
             }
            })
       
            return {
                ...state,   data: arr  
            };


        default: 
            return state;
    }
}

type ActionTypes =  InferActionsTypes<typeof actions>
export const actions = {
    setCurrentPage : (page: number)  => ({ type: 'SET_CURRENT_PAGE', page } as const),
    setPaginationSize: (size: number)  => ({ type: 'SET_PAGINATION_SIZE', size } as const),
    setEditModePaginationSize: ()  => ({ type: 'SET_EDIT_MODE_PAGINATION_SIZE' } as const),
    sortingData: (sortingParameter: lastSortType)  => ({ type: 'SORT_DATA', sortingParameter } as const),
    deleteCard: (id: number) => ({ type: 'DELETE_CARD', id } as const),
    addCard: (payload: {
            name: string,
            power: number
        } ) => ({ type: 'ADD_CARD', payload } as const),
    updateCard: (payload: {
        id: number,
        valueName: string,
        value: string | number 
        } ) => ({ type: 'UPDATE_CARD', payload } as const),


}
 


export default appReducer;


export type lastSortType = 'id' | "name" | "power";
export type machineType =  {
    'id': number,
    "name": string,
    "power": number
}
