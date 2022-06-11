export const actionTypes = {
    SET_USER: 'SET_USER',
    SET_FOOD_ITEMS: 'SET_FOOD_ITEMS',
    TOGGLE_CART: 'TOGGLE_CART',
    // SET_ORDERS: 'SET_ORDERS',
    // SET_PRODUCTS: 'SET_PRODUCTS',
    // SET_CART: 'SET_CART',

}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.SET_FOOD_ITEMS:
            return {
                ...state,
                foodItems: action.foodItems,
            };
        case actionTypes.TOGGLE_CART:
            return {
                ...state,
                showCart: action.showCart,
            };
            default:
                return state;
    }
}

export default reducer;