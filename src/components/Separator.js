import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors, card } from '../styles/global';
import { fontSize } from '../styles/typography';

class Separator extends Component {
  render() {
    return(
      <div className={css(styles.separatorContainer)}>
        <h1 className={css(styles.separator)}>{this.props.text}</h1>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  separatorContainer: {
    textAlign: 'center'
  },

  separator: {
    color: colors.background,
    display: 'inline-block',
    fontSize: fontSize.headingXLarge,
    letterSpacing: '2px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: '20px'
  },
});

export default Separator;