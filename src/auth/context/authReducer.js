import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state, // para mantener todos los datos del estado y solo reemplazar el logged y el user. 
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                logged: false,
                user: null
            };
        default:
            return state;
    }
}