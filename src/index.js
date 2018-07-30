import React, { Component } from "react";
import ReactDOM from "react-dom";

class Email extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValue: "abc@gmail.com",
      error: ""
    };
  }

  checkEmailInput = value => {
    console.log(`checkEmailInput => value`, value);
    const regEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var result = value.replace(/\s/g, "").split(/,|;/);

    for (var i = 0; i < result.length; i++) {
      //   if (!regEx.test(result[i])) {
      //     this.setState({
      //       error: 1
      //     });
      //   } else {
      //     this.setState({
      //       error: 0,
      //       emailValue: value
      //     });
      //   }
      // }

      // Check for positive instead of negative.
      // It improves the readability and
      // put less cognitive load.
      if (regEx.test(result[i])) {
        this.setState({
          error: 0,
          emailValue: value
        });
      } else {
        this.setState({
          error: 1
        });
      }
    }
  };

  changeValue = value => {
    this.setState({
      emailValue: value
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.emailValue}
          onBlur={e => this.checkEmailInput(e.target.value)}
          onChange={e => this.changeValue(e.target.value)}
        />
        {this.state.error === 1 ? <span>Invalid Email</span> : "valid!"}
      </div>
    );
  }
}

export default Email;

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Email />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
