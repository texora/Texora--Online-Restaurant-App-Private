import { fetchSessionUser } from "../utils/fetchSessionData";

const sessionUser = fetchSessionUser();
export const initialState = {
    user: sessionUser,
    foodItems: null
}