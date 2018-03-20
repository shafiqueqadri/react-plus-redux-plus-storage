import { ADD_USER, USERS, DELETE_USER } from "../fields";
import { save, deleteRecord } from "../storage";

export const userReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ADD_USER:
            save(USERS, payload.user);
            return state = [...state, payload.user];
        case DELETE_USER:
            state.forEach((user, index) => {
                if (user.id === payload.user) {
                    state.splice(index, 1);
                    deleteRecord(USERS, state);
                }
            });
            return state;
        default:
            return state;
    }
};