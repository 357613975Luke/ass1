/*
 * @Description:
 * @Author: Luke Z
 * @Date: 2021-04-20 00:20:39
 * @LastEditors: Luke Z
 * @LastEditTime: 2021-04-20 22:51:59
 * @FilePath: /ass1-Harry/src/App.js
 */
import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Luke",
      age: 0,
      gender: "Male",
      description: "I am a Coder",
    };
  }
  // componentDidUpdate(preProps, preState) {
  //   const { inputOne, inputTwo } = this.state;
  //   if (
  //     (preState.inputOne !== inputOne || preState.inputTwo !== inputTwo) &&
  //     preState.displayText !== _text
  //   ) {
  //     this.setState({
  //       displayText: _text,
  //     });
  //   }
  // }
  render() {
    const { name, age, gender, description } = this.state;
    const nameOnChange = (e) => {
      this.setState({ name: e.target.value });
    };
    const ageOnChange = (e) => {
      this.setState({ age: +e.target.value });
    };
    const genderOnChange = (e) => {
      console.log(e);
      this.setState({ gender: e.target.value });
    };
    const desOnChange = (e) => {
      this.setState({ description: e.target.value });
    };
    const submit = () => {
      const _t = `I am ${name}, ${age} years old, ${gender}, and ${description}`;
      alert(_t);
    };
    return (
      <div className="container">
        <div>
          {" "}
          name
          <input value={name} placeholder="Name" onChange={nameOnChange} />
        </div>
        <div>
          {" "}
          age
          <input
            type="number"
            name="age"
            min="1"
            max="99"
            value={age}
            placeholder="Age"
            onChange={ageOnChange}
          />
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="myRadios"
              onClick={genderOnChange}
              value="Male"
              checked={gender === "Male"}
            />
            Male
          </div>
          <div>
            <input
              checked={gender === "Female"}
              type="radio"
              name="myRadios"
              onClick={genderOnChange}
              value="Female"
            />
            Female
          </div>
        </div>
        <div>
          <textarea name="des" value={description} onChange={desOnChange} />
        </div>
        <button onClick={submit}>Submit</button>
      </div>
    );
  }
}
export default App;
