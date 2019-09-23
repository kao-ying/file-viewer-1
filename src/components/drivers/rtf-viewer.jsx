import React, { Component } from 'react';
import { RTFJS } from 'rtf.js';

function strinToArrayBuffer(string) {
  const buffer = new ArrayBuffer(string.length);
  const bufferView = new Uint8Array(buffer);
  for (let i = 0; i < string.length; i + 1) {
    bufferView[i] = string.charCodeAt(i);
  }
  return buffer;
}

class RtfViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  componentDidMount() {
    RTFJS.loggingEnabled(false);
  }
  render() {
    const rtf = this.props.data;
    const doc = new RTFJS.Document(strinToArrayBuffer(rtf));
    return (
      <div dangerouslySetInnerHTML={ {__html: doc.render()} } /> //eslint-disable-line
    );
  }
}
export default RtfViewer;
