import { ADDTOUR, REMOVETOUR, MESSAGE } from "./actionTypes";

export const addTour = (value) => {
    return {
        type: ADDTOUR,
        payload: value
    }
}

export const removeTour = (value) => {
    return {
        type: REMOVETOUR,
        payload: value
    }
}
export const message = (value) => {
    return {
        type: MESSAGE,
        payload: value
    }
}