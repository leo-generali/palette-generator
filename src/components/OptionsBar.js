import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors, card } from '../styles/global';
import { fontSize, fontFamily } from '../styles/typography';

import SaveButton from './OptionsBar/SaveButton';


class OptionsBar extends Component {
  render() {
    return(
      <div className={css(styles.optionsBar)}>
        <SaveButton
          savePaletteToDB={this.props.savePaletteToDB}
        />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  optionsBar: {
    display: 'flex',
    justifyContent: 'center',
    margin: '100px 0'
  }
});

export default OptionsBar;