import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class ImagePreview extends Component {
  render() {
    const path = this.props.imagePath ? this.props.imagePath : "#";
    
    return(
      <div>
        <h1>Image Preview</h1>
        <img src={path} className={css(styles.imagePreview)}></img>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  'imagePreview': {
    maxWidth: '400px',
    maxHeight: '400px'
  }
})

export default ImagePreview;