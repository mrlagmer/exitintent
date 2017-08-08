import React, { Component } from "react";
import { Modal, ModalBackground, ModalContent } from "./Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showExit: false };
    // This binding is necessary to make `this` work in the callback
    this.handleExit = this.handleExit.bind(this);
    this.handleExitClick = this.handleExitClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mouseout", this.handleExit);
  }

  handleExitClick(e) {
    this.setState({
      showExit: false,
    });
  }

  handleExit(e) {
    e = e ? e : window.event;
    // Get the current viewport width.
    var vpWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );

    // If the current mouse X position is within 50px of the right edge
    // of the viewport, return.
    if (e.clientX >= vpWidth - 50) return;

    // If the current mouse Y position is not within 50px of the top
    // edge of the viewport, return.
    if (e.clientY >= 50) return;

    // Reliable, works on mouse exiting window and
    // user switching active program
    var from = e.relatedTarget || e.toElement;
    if (!from) {
      this.setState({
        showExit: true,
      });
    }
  }

  render() {
    const { showExit } = this.state;

    return (
      <Modal showExit={showExit}>
        <ModalBackground onClick={this.handleExitClick} />
        <ModalContent>
          <h1>Please Don't Leave</h1>
          <p>
            You really should sign up to our mail list before you leave so we
            can send you stuff and get you to spend some $ with us
          </p>
        </ModalContent>
      </Modal>
    );
  }
}

export default App;
