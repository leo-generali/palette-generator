import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Dropzone from 'react-dropzone'

class FileUpload extends Component {
  constructor() {
    super();
  }



  render() {
    return(
      <section>
        <Dropzone onDrop={this.props.onDrop} />
      </section>
    )
  }
}

export default FileUpload;