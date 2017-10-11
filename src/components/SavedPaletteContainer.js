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
            Object.entries(this.props.savedPalettes).map((elem, index) => 
              <SavedPalette 
                changeDisplayedPalette={this.props.changeDisplayedPalette}
                removeSavedPalette={this.props.removeSavedPalette} 
                id={elem[0]}
                palette={elem[1]}
                key={index}
              />
            )

            // this.props.savedPalettes.map((palette, index) => 
            //   <SavedPalette
            //     changeDisplayedPalette={this.props.changeDisplayedPalette} 
            //     palette={palette} 
            //     key={index}
            //     removeSavedPalette={this.props.removeSavedPalette} 
            //   />
            // )
          }
        </div>
      </div>
    )
  }
}

const style = StyleSheet.create({
})

export default SavedPaletteContainer;