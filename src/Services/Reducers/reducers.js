export const ADD_TO_CART = "ADD_TO_CART"
const initialState = {
    cardData: []
}
export default function cardItems(state=[], action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducers",action);
            return [
                ...state,
                {cardData: action.data}
            ]
            
        default:
            return state
    }
}