import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors, card } from '../styles/global';
import { fontSize } from '../styles/typography';

import SavedPalette from './SavedPalette';

class SavedPaletteContainer extends Component {
  render() {
    return(
      <div className={css(styles.palettes)}>
        <div className={css(styles.palettesList)}>
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
          }
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  palettes: {
    maxWidth: '800px',
    margin: '100px auto 0',
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingTop: '40px',
    paddingBottom: '40px',
    borderRadius: card.borderRadius
  },

  palettesList: {
    marginLeft: '-80px',
    width: '960px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
})

export default SavedPaletteContainer;