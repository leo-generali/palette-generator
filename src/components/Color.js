import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class Color extends Component {
  render() {
    return(
      <div className={css(styles.card)}>
        <div className={css(styles.color)} style={{backgroundColor: this.props.color}}></div>
        <div className={css(styles.info)}>
          <p>{this.props.color}</p>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    height: '250px',
    width: '180px',
    border: '1px solid grey',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    transition: '200ms',

    ':hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
    }
  },

  color: {
    height: '180px'
  },

  info: {
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

})

export default Color;