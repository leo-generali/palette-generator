import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class SavedPalette extends Component {
  render() {
    const palette = this.props.palette;
    const id = this.props.id;

    return(
      <div className={css(styles.savedPaletteContainer)} onClick={() => this.props.changeDisplayedPalette(palette)}>
        <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.vibrant}}></div>
        <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.muted}}></div>
        <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.darkvibrant}}></div>
        <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.darkmuted}}></div>
        <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.lightvibrant}}></div>
        <div className={css(styles.savedPaletteColor)} style={{backgroundColor: palette.lightmuted}}></div>
        <button className={css(styles.deleteButton)} onClick={() => this.props.removeSavedPalette(id)}/>
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
  },
  deleteButton: {
    height: '50px',
    width: '50px',
    backgroundColor: 'red',
    marginLeft: '20px'
  }
});

export default SavedPalette;