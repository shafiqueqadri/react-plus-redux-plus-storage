import { ADD_USER, DELETE_USER } from "../fields/index";
import v4 from "uuid/v4";

export const addUserAction = newUser => ({
    type: ADD_USER,
    payload: {
        user: {...newUser, id: v4()}
    }
});

export const removeUserAction = user_id => ({
    type: DELETE_USER,
    payload: {
        user: user_id
    }
});