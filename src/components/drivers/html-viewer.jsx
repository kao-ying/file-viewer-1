import React, { Component } from 'react';

class HtmlViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <div> {this.props.data} </div> //eslint-disable-line
    );
  }
}

export default HtmlViewer;
