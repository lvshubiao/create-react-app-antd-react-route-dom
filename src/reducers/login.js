import { ACTION_TYPE_LOGIN } from '../actions/type';
import { defaultParam, patchValue } from './creator';
const initialState = {
    login: {
        ...defaultParam
    },
};
function login(state = initialState, action) {
    let { type, data, error, status } = action;
    let newState = { ...state };
    switch (type) {
        case ACTION_TYPE_LOGIN:
            patchValue(newState.login, data, error, status);
            return { ...newState };
        default:
            return state;
    }
}

export default login;