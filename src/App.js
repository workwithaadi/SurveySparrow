//import React from "react";
import "./styles.css";
import React, { Component } from "react";
import {
  Chat,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage
} from "react-chat-popup";
class App extends Component {
  componentDidMount() {
    addResponseMessage("The team typically replies in a few minutes.");
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  };
  render() {
    return (
      <div className="App">
        <div class="chatBot">
          <Chat
            handleNewUserMessage={this.handleNewUserMessage}
            title="Hi There"
            subtitle="The team typically replies in a few minutes."
            senderPlaceHolder="Type a message..."
          />
        </div>
        <div class="row">
          <div class="col-sm-6 col-6 logoText">Maxeon</div>
          <nav class="col-sm-6 col-6 navbar navbar-expand-md navbar-dark menuContainer">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav menuItemContainer">
                <li class="nav-item menuItem">
                  <a class="nav-link" href="#">
                    Products
                  </a>
                </li>
                <li class="nav-item menuItem">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item menuItem">
                  <a class="nav-link" href="#">
                    Cases
                  </a>
                </li>
                <li class="nav-item menuItem">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item menuItemLogin">
                  <a class="nav-link colorBlue" href="#">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </nav>{" "}
        </div>
        <div class="row">
          <div class="col-sm-4 headingText">
            <b>
              Where
              <br />
              words
              <br />
              fail,
              <br />
              Music
              <br />
              speaks.
              <br />
            </b>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
