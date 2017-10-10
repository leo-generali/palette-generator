import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import Color from './Color';

class SavedPalettes extends Component {
  render() {
    return(
      <div>
        <h1>Saved Palettes</h1>
        <div>
          {this.props.savedPalettes.map((palette, index) => <h1 key={index}>{palette.key}</h1>)}
        </div>
      </div>
    )
  }
}

const style = StyleSheet.create({
})

export default SavedPalettes;