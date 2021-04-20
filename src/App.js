/*
 * @Description:
 * @Author: Luke Z
 * @Date: 2021-04-20 00:20:39
 * @LastEditors: Luke Z
 * @LastEditTime: 2021-04-20 00:31:55
 * @FilePath: /tutorial/ass1/src/App.js
 */
import logo from "./logo.svg";
import "./App.css";
import React from "react";
const _text = "没有计算";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOne: 0,
      inputTwo: 0,
      displayText: _text,
    };
  }
  componentDidUpdate(preProps, preState) {
    const { inputOne, inputTwo } = this.state;
    if (
      (preState.inputOne !== inputOne || preState.inputTwo !== inputTwo) &&
      preState.displayText !== _text
    ) {
      this.setState({
        displayText: _text,
      });
    }
  }
  render() {
    const { inputOne, inputTwo, displayText } = this.state;
    const numOneOnChange = (e) => {
      this.setState({ inputOne: +e.target.value });
    };
    const numTwoOnChange = (e) => {
      this.setState({ inputTwo: +e.target.value });
    };
    const getResult = (e) => {
      this.setState({ displayText: inputOne + inputTwo });
    };
    return (
      <div>
        <input value={inputOne} onChange={numOneOnChange} />+
        <input value={inputTwo} onChange={numTwoOnChange} />
        <button onClick={getResult}>calculate</button>
        <div>结果:{displayText}</div>
      </div>
    );
  }
}
export default App;
