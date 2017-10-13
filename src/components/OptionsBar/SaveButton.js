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
      <div className={css(styles.card)}>
        <button className={css(styles.button)} onClick={this.props.savePaletteToDB}>
          <p>SAVE</p>
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
    height: '40px',
    width: '60px',
    transition: card.transition,
    cursor: 'pointer',

    ':hover': {
      color: 'red'
    }
  }
}) 

export default SaveButton;