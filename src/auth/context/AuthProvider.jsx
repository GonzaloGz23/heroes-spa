import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';
import { types } from '../types/types';

// estado inicial
/* const initialState = {
    logged: false,
} */

// función para inicializar el estado
const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user, // si existe el usuario, logged es true
        user
    }
}

export const AuthProvider = ({ children }) => {

    const [authState,dispatch] = useReducer(authReducer,/* initialState */{},init);

    const login = (name = '') => {

        const user = {
            id: 'ABC',
            name
        }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout
        }

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState, // es el spread de 'authState' que contiene logged y user
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
