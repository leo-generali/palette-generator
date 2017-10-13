import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Dropzone from 'react-dropzone'

class FileUpload extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Dropzone 
        className={css(styles.dropzone)}
        onDrop={this.props.onDrop} 
        accept="image/jpeg, image/png"
        style={{
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  dropzone: {
    minHeight: '200px',
    minWidth: '200px',
    margin: '20px',
    border: '1px solid red',
  }
})

export default FileUpload;