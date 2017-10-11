import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors, extra } from '../styles/global';
import { fontSize } from '../styles/typography';

class Color extends Component {
  render() {
    return(
      <div className={css(styles.card)}>
        <div className={css(styles.color)} style={{backgroundColor: this.props.color}}></div>
        <div className={css(styles.info)}>
          <p className={css(styles.text)}>{this.props.color}</p>
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
    borderRadius: extra.borderRadius,
    overflow: 'hidden',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    transition: '200ms',
    cursor: 'pointer',

    ':hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      transform: 'scale(1.02)'
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
    fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace;',
    color: colors.text,
    fontSize: fontSize.body,
    letterSpacing: '3px'
  }

})

export default Color;