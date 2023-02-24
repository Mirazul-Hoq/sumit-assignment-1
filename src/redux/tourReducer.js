import { ADDTOUR, REMOVETOUR, MESSAGE } from "./actionTypes";

const initialState = {
    id: 0,
    guestList: [],
    message: '',
}

const tourReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTOUR:
            let id = state.id + 1;
            return {
                ...state,
                guestList: [...state.guestList, {...action.payload, id}],
                id: state.id+1
            }
        case REMOVETOUR:
            let lists = state.guestList.filter(item => item.id !== action.payload)
            return {
                ...state,
                guestList: [...lists],
            }
        case MESSAGE:
            return {
                ...state,
                guestList: [...state.guestList],
                message: action.payload
            }
        default:
            return state;
    }
}

export default tourReducer;