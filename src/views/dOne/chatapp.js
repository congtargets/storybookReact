import React from "react";
class MessageList extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.messages.map((msg) => (
          <li>{msg}</li>
        ))}
      </ul>
    );
  }
}

export default class ChatApp extends React.Component {
  state = {
    message: [],
    inputMsg: "",
  };

  handleInput = (evt) => {
    this.setState({
      inputMsg: evt.target.value,
    });
  };
  handleSend = () => {
    const text = this.state.inputMsg;
    if (text) {
      const newMessage = [...this.state.message, text];
      this.setState({
        message: newMessage,
        inputMeg: "",
      });
    }
  };
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <div>
          <input value={this.state.inputMsg} />
          <button onClick={this.handleSend}>Send</button>
        </div>
      </div>
    );
  }
}
