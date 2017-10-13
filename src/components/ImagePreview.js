import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class ImagePreview extends Component {
  render() {
    const path = this.props.imagePath;
    
    return(
      <div className={css(styles.imagePreviewContainer)}>
        {
          path === "" ? null : <img src={path} className={css(styles.imagePreview)} />
        }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  'imagePreviewContainer': {
    flex: '1 0 auto',
    textAlign: 'center'
  },

  'imagePreview': {
    maxWidth: '398px',
    maxHeight: '202px',
  }
})

export default ImagePreview;