import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import './App.css';
import login from './actions/login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log('index props==>', this.props);
    //异步执行
    this.setState({ count: this.state.count + 1 });
    //参考链接 https://juejin.im/post/5bd0191a6fb9a05cf9087284
    console.log(this.state.count)
  }
  goLogin() {
    const { history } = this.props;
    history.push({
      pathname: '/login',
      state: { "param": "首页传递的参数" }
    })
  }
  login(){
    const param = {
      "activityDesc": "",
      "activityId": "0000000070",
      "activityName": "",
      "orderColumn": "",
      "pageNo": 0,
      "pageSize": 0,
      "tenantId": "pubgo"
    }
  this.props.login(param).then(res=>{
      console.log('res',res);
      console.log(this.props.logins)
    })
  }
  render() {
    return (
      <div className="App">
        <Button onClick={() => this.goLogin()} type="primary">这是首页</Button>
        <Button onClick={() => this.login()} type="primary">登录(ajax请求)</Button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  logins: state.login.login,
});

/**
 * 这里指定要map到props的事件
 * 一般情况下该conponent需要发送的action事件都应该定义在这里
 * 如果偷懒不定义这个方法，那么在component中，直接引用dispatch去发送action
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
  login: (param) => dispatch(login.login(param))
});

/**
 * 如果没有传入mapDispatchToProps，默认会把dispatch map到props
 * 如果传入的话，必须显示的指定，否则会undefined
 */
export default connect(mapStateToProps,mapDispatchToProps)(App);
