import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors, card } from '../../styles/global';
import { fontSize, fontFamily } from '../../styles/typography';

import { copyText } from '../../helpers/helpers';


class CopyPaletteButon extends Component {
  render() {
    return(
      <div className={css(styles.card)}>
        <button className={css(styles.button)}>
          <p>SASS</p>
        </button>
        <button className={css(styles.button)} onClick={() => copyText(this.props.palette)}>
          <p>JS</p>
        </button>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: card.borderRadius,
    fontFamily: fontFamily.monospace,
    fontSize: fontSize.headingSmall,
    transition: card.transition,
  },

  button: {
    height: '20px',
    width: '60px',
  }
}) 

export default CopyPaletteButon;