export const ADD_TO_CART = "ADD_TO_CART"
const initialState = {
    cardData: []
}
export default function cardItems(state=initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...StaticRange,
                cardData: action.data
            }
            break;
        default:
            return state
    }
}