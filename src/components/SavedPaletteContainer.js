import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors, extra } from '../styles/global';
import { fontSize } from '../styles/typography';

import SavedPalette from './SavedPalette';

class SavedPaletteContainer extends Component {
  render() {
    return(
      <div>
        <h1 className={css(styles.header)}>Saved Palettes</h1>
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
      </div>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    color: colors.background,
    fontSize: fontSize.headingXLarge,
    letterSpacing: '2px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textShadow: '0px 20px 50px rgba(0,0,0,0.4)'
  },

  palettes: {

    maxWidth: '800px',
    margin: '100px auto 0',
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingTop: '40px',
    borderRadius: extra.borderRadius
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