import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors, card } from '../styles/global';
import { fontSize, fontFamily } from '../styles/typography';

class SavedPalette extends Component {
  render() {
    const palette = this.props.palette;
    const id = this.props.id;

    return(
      <div className={css(styles.savedPaletteContainer)}>
        <div className={css(styles.savedPaletteColors)} onClick={() => this.props.changeDisplayedPalette(palette)} >
          <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.vibrant}}></div>
          <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.muted}}></div>
          <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.darkvibrant}}></div>
          <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.darkmuted}}></div>
          <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.lightvibrant}}></div>
          <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.lightmuted}}></div>
        </div>
        <button className={css(styles.deleteButton)} onClick={() => this.props.removeSavedPalette(id)}>Del</button>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  savedPaletteContainer: {
    display: 'inline-flex',
    margin: '10px',
    padding: '15px',
    backgroundColor: colors.background,
    borderRadius: card.borderRadius,
    boxShadow: card.boxShadow,
    transition: card.transition,

    ':hover': {
      boxShadow: card.boxShadowHover,
      transform: card.transform
    }
  },

  savedPaletteColors: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: '180px'
  },

  savedPaletteColor: {
    minHeight: '50px',
    minWidth: '50px'
  },

  deleteButton: {
    height: '50px',
    width: '50px',
    transition: card.transition,
    fontFamily: fontFamily.monospace,
    letterSpacing: '5px',
    fontSize: fontSize.headingSmall,
    fontWeight: 'bold',

    ':hover': {
      color: 'red',
      cursor: 'pointer'
    }
  }
});

export default SavedPalette;