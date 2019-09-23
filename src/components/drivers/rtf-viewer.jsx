import React, { Component } from 'react';
import { WMFJS, EMFJS, RTFJS } from 'rtf.js';

function stringToArrayBuffer(string) {
  const buffer = new ArrayBuffer(string.length);
  const bufferView = new Uint8Array(buffer);
  for (let i = 0; i < string.length - 1; i + 1) {
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
    WMFJS.loggingEnabled(false);
    EMFJS.loggingEnabled(false);
  }
  render() {
    const rtf = this.props.data;
    const doc = new RTFJS.Document(stringToArrayBuffer(rtf));
    return (
      <div dangerouslySetInnerHTML={ {__html: doc.render().htmlElements} } /> //eslint-disable-line
    );
  }
}
export default RtfViewer;
