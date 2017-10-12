import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors } from '../styles/global';
import { fontSize } from '../styles/typography';

class Separator extends Component {
  render() {
    return(
      <h1 className={css(styles.separator)}>{this.props.text}</h1>
    )
  }
}

const styles = StyleSheet.create({
  separator: {
    color: colors.background,
    fontSize: fontSize.headingXLarge,
    letterSpacing: '2px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textShadow: '0 6px 1px rgba(0,0,0, 0.10), 0 0px 5px rgba(0,0,0, 0.10), 0 1px 3px rgba(0,0,0, 0.30), 0 3px 5px rgba(0,0,0, 0.20), 0 5px 10px rgba(0,0,0, 0.25), 0 10px 10px rgba(0,0,0, 0.20), 0 20px 20px rgba(0,0,0, 0.15)',
    textAlign: 'center'
  },
});

export default Separator;