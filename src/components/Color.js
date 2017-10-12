import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors, card } from '../styles/global';
import { fontSize, fontFamily } from '../styles/typography';

class Color extends Component {
  state = {
    hovering: false
  }

  handleHover = () => {
    this.setState({
      hovering: !this.state.hovering
    });
  }

  copyColor(color) {
    const textArea = document.createElement('textarea');
    textArea.value = color;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  render() {    
    return (
      <div className={css(styles.card)} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} onClick={() => this.copyColor(this.props.color)}>
        <div className={css(styles.color)} style={{backgroundColor: this.props.color}}>
          <svg 
            className={css(styles.saveIcon)} 
            viewBox="-2 -2 12 12"
            style={{opacity: this.state.hovering ? '1' : '0'}}
          >
            <path d="M3 0v3h-2l3 3 3-3h-2v-3h-2zm-3 7v1h8v-1h-8z" />
          </svg>
        </div>
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
    height: '180px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  saveIcon: {
    height: '55px',
    width: '55px',
    padding: '10px',
    borderRadius: '100%',
    transition: card.transition,
    fill: 'rgba(0, 0, 0, 0.75)',
    backgroundColor: 'rgba(255, 255, 255, 0.20)'
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