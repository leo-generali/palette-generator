import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors, card } from '../../styles/global';
import { fontSize, fontFamily } from '../../styles/typography';


class SaveButton extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <button className={css(styles.button)} onClick={this.props.savePaletteToDB}>Save</button>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: '50px',
    width: '80px',
    backgroundColor: colors.background,
    borderRadius: card.borderRadius,
    fontFamily: fontFamily.monospace,
    letterSpacing: '5px',
    fontSize: fontSize.headingSmall,
    fontWeight: 'bold',
    transition: card.transition,

    ':hover': {
      color: 'green',
      cursor: 'pointer',
      transform: card.transform,
    }
  }
}) 

export default SaveButton;