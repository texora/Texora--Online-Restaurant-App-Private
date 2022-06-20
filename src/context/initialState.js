import { fetchSessionUser, fetchSessionUserMode } from "../utils/fetchSessionData";

const sessionUser = fetchSessionUser();
const sessionUserMode = fetchSessionUserMode();
export const initialState = {
    user: sessionUser,
    foodItems: null,
    showCart: false,
    cartItems: [],
    cartTotal: 0,
    adminMode: sessionUserMode,
}