import {ACTION_TYPE_LOGIN} from './type';
import { Login } from '../api';
import { payload } from './creator';
/**
 * 登录
 */
function login(params) { 
    return (dispatch) => {
      return payload(dispatch, ACTION_TYPE_LOGIN, Login.getBaseCouponList(params));
    };
  }
export default { 
    login
  }; 