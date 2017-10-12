import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors, card } from '../styles/global';
import { fontSize, fontFamily } from '../styles/typography';

class Color extends Component {
  render() {
    return(
      <div className={css(styles.card)}>
        <div className={css(styles.color)} style={{backgroundColor: this.props.color}}></div>
        <div className={css(styles.info)}>
          <p className={css(styles.text)} style={{color: this.props.color}}>{this.props.color}</p>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    height: '250px',
    width: '180px',
    border: '1px solid '+ colors.text,
    borderRadius: card.borderRadius,
    overflow: 'hidden',
    boxShadow: card.boxShadow,
    transition: card.transition,
    cursor: 'pointer',

    ':hover': {
      boxShadow: card.boxShadowHover,
      transform: card.transform
    }
  },

  color: {
    height: '180px'
  },

  info: {
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },

  text: {
    fontFamily: fontFamily.monospace,
    color: colors.text,
    fontSize: fontSize.body,
    letterSpacing: '3px'
  }

})

export default Color;