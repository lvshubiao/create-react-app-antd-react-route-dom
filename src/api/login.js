import Restful from './ajax';

/**
 *
 * 
 * 登录restful接口
 */

export class Login {

  /**
   * 
   * @param {*} params  
   */
  static async getBaseCouponList(params) {
    return Restful.post('/marketing/activityBase/getBaseInfoList', params);
  }
  
}