import { ADD_PRODUCT } from "../fields/index";
import v4 from "uuid/v4";

export const productReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT:
            return state = [...state, { ...payload.product, id: v4() }];
        default:
            return state;
    }
};