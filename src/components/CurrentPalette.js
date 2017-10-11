import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import Color from './Color';

class CurrentPalette extends Component {
  render() {
    const colorsArr = Object.values(this.props.palette);

    return(
      <div className={css(style.paletteContainer)}>
        {
          colorsArr.map((color, index) => <Color key={index} className={css(style.color)} color={color} />)
        }
      </div>
    )
  }
}

const style = StyleSheet.create({
  paletteContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
})

export default CurrentPalette;