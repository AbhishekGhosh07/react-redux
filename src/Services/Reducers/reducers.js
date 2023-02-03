import {ADD_TO_CART,REMOVE_TO_CART,ADD_TO_ORDER,REMOVE_TO_ORDER} from '../constants'

export  function orderDetails(state=[],action){
    switch(action.type){
        case ADD_TO_ORDER:
            console.log("order reducer",action)
            return[
                ...state,
                {orderData:action.data}
            ]
        case REMOVE_TO_ORDER:
            state.pop();
            return[...state,
            ]

        default:
            return state    
    }
}

export  function cardItems(state=[], action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducers",action);
            return [
                ...state,
                {cardData: action.data}
            ]

        case REMOVE_TO_CART:
            state.pop();
            return[
                ...state,
            ]    

    
        default:
            return state
    }
}