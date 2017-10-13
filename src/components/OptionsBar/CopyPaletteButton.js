import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors, card } from '../../styles/global';
import { fontSize, fontFamily } from '../../styles/typography';

import { copyText } from '../../helpers/helpers';


class CopyPaletteButon extends Component {

  copyPreprocessor(palette, preprocessor) {
    const preprocessors = {
      js: '',
      sass: '$',
      less: '@',
      stylus: ''
    }

    let string = '';
    Object.entries(palette).forEach(function(keyValuePair) {
      const key = keyValuePair[0];
      const color = keyValuePair[1];
      if(preprocessor === 'stylus') string += `${key} = ${color}\n`;
      else if(preprocessor === 'js') string += `  ${key}: '${color}',\n`;
      else string += `${preprocessors[preprocessor]}${key}: ${color};\n`;
    });

    if(preprocessor === 'js') string = `{\n${string}}`;

    copyText(string);
  }

  render() {
    return(
      <div className={css(styles.card)}>
        <button className={css(styles.button)} onClick={() => this.copyPreprocessor(this.props.palette, 'sass')}>
          <p>SASS</p>
        </button>
        <button className={css(styles.button)} onClick={() => this.copyPreprocessor(this.props.palette, 'less')}>
          <p>LESS</p>
        </button>
        <button className={css(styles.button)} onClick={() => this.copyPreprocessor(this.props.palette, 'stylus')}>
          <p>STYLUS</p>
        </button>
        <button className={css(styles.button)} onClick={() => this.copyPreprocessor(this.props.palette, 'js')}>
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
    height: '40px',
    width: '60px',
    transition: card.transition,
    cursor: 'pointer',

    ':hover': {
      color: 'red'
    }
  }
}) 

export default CopyPaletteButon;