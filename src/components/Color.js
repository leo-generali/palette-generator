import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { colors, card } from '../styles/global';
import { fontFamily, fontSize } from '../styles/typography';
import { copyText } from '../helpers/helpers';

class Color extends Component {
  state = {
    hovering: false,
    copyIcon: true
  }

  turnHoverOn = (event) => {
    console.log(event.currentTarget);
    this.setState({
      hovering: true,
      copyIcon: true
    });
  }

  turnHoverOff = (event) => {
    console.log(event.currentTarget);
    this.setState({
      hovering: false,
      copyIcon: true
    });
  }

  copyColor(color) {
    copyText(color)
    this.setState({
      copyIcon: false
    })
  }

  render() {
    // this.state.copyIcon ? copyIcon :
    const copyIcon = (
      <svg 
        className={css(styles.saveIcon)} 
        viewBox="-2 -2 12 12"
        style={{opacity: this.state.hovering ? '1' : '0'}}
      >
        <path d="M3 0v3h-2l3 3 3-3h-2v-3h-2zm-3 7v1h8v-1h-8z" />
      </svg>
    );

    const thumbsUp = (
      <div className={css(styles.thumbsUpContainer)}>
        <span className={css(styles.thumbsUpIcon)}>👍</span>
        <p className={css(styles.thumbsUpText)}>Copied!</p>
      </div>
    );

    return (
      <div 
        className={css(styles.card)} 
        onMouseEnter={this.turnHoverOn} 
        onMouseLeave={this.turnHoverOff} 
        onClick={() => this.copyColor(this.props.color)}
      >
        <div className={css(styles.color)} style={{backgroundColor: this.props.color}}>
          { this.state.copyIcon ? copyIcon : thumbsUp }
        </div>
        <div className={css(styles.info)}>
          <p className={css(styles.text)} style={{color: this.props.color}}>{this.props.color}</p>
        </div>
      </div>
    )
  }
}

const translateKeyframes = {
    '1%': {
        transform: 'translateY(-30px)',
    },

    '100%': {
        transform: 'translateY(0)',
    },
};

const scaleKeyframes = {
    '1%': {
        transform: 'scale(0.95)'
    },

    '80%': {
        transform: 'scale(1)'
    },
};

const opacityKeyframes = {
  'from': {
    opacity: 0,
  },

  'to': {
    opacity: 1,
  }
};

const data = {
  cardHeight: 220,
  cardWidth: 150,
  infoHeight: 70
}

const styles = StyleSheet.create({
  card: {
    height: data.cardHeight,
    width: data.cardWidth,
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
    height: data.cardHeight-data.infoHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  info: {
    height: data.infoHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
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

  thumbsUpContainer: {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'block',
    textAlign: 'center',
    animationName: [translateKeyframes, opacityKeyframes],
    animationDuration: '0.4s',
    animationIterationCount: '1',
  },

  thumbsUpIcon: {
    fontSize: '50px',
  },

  thumbsUpText: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.monospace,
    padding: '5px',
    backgroundColor: colors.background,
    borderRadius: card.borderRadius
  },


  text: {
    fontFamily: fontFamily.monospace,
    color: colors.text,
    fontSize: fontSize.body,
    letterSpacing: '3px'
  }

})

export default Color;