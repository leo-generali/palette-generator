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
    textShadow: '0px 20px 50px rgba(0,0,0,0.4)'
  },
});

export default Separator;