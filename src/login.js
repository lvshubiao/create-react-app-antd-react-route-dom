import React, { Component } from 'react';
import { Button } from 'antd';

class App1 extends Component {
  componentDidMount(){
    console.log('login props==>',this.props)
  }
  goHome(){
    const {history} = this.props;
    history.push({
      pathname: '/',
      state: { "param": "login传递的参数" }
    })
  }
  render() {
    return (
      <div className="App">
        <Button onClick={()=>this.goHome()}>这是登录页</Button>
      </div>
    );
  }
}

export default App1;
