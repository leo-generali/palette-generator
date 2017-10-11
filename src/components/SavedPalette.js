import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class SavedPalette extends Component {
  render() {
    const palette = this.props.palette;

    return(
      <div className={css(styles.savedPaletteContainer)} onClick={() => this.props.changeDisplayedPalette(palette)}>
        <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.vibrant}}></div>
        <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.muted}}></div>
        <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.darkvibrant}}></div>
        <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.darkmuted}}></div>
        <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.lightvibrant}}></div>
        <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.lightmuted}}></div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  savedPaletteContainer: {
    display: 'inline-flex',
    margin: '10px'
  },
  savedPaletteColor: {
    height: '50px',
    width: '50px'
  }
});

export default SavedPalette;