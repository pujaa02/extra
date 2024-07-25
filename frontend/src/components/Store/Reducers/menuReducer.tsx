import { Action, State_menu } from "../../../Types/reducer";

const initialState: State_menu = {
    menu: [],
    menuID: 0,
};


export default function menuReducer(state = initialState, action: Action) {
    switch (action.type) {
        case "ADD_MENU_ID":
            return {
                ...state,
                menuID: action.payload
            }
        case 'REMOVE_MENU':
            return {
                ...state,
                menu: []
            }
        case "ADD_MENU":
            return {
                ...state,
                menu: [...state.menu, action.payload]
            }
        default:
            return state;
    }
}