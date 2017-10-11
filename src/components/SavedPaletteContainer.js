import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import SavedPalette from './SavedPalette';

class SavedPaletteContainer extends Component {
  render() {
    return(
      <div>
        <h1>Saved Palettes</h1>
        <div>
          {
            this.props.savedPalettes.map((palette, index) => 
              <SavedPalette changeDisplayedPalette={this.props.changeDisplayedPalette} palette={palette} key={index} />)
          }
        </div>
      </div>
    )
  }
}

const style = StyleSheet.create({
})

export default SavedPaletteContainer;