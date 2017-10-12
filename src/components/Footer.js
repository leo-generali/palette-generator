import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { fontSize } from '../styles/typography';
import { colors, card } from '../styles/global';

class Footer extends Component {
  render() {
    return(
      <footer className={css(styles.footer)}><p className={css(styles.footerText)}>Made with <span className={css(styles.heart)}>❤</span> by <a href="http://www.leogenerali.com/" className={css(styles.link)}>Leo Generali</a></p></footer>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    fontSize: fontSize.body,
    color: colors.text,
    backgroundColor: colors.background, 
    borderRadius: card.borderRadius,
    margin: '100px auto',
    maxWidth: '200px'
  },

  footerText: {
    padding: '20px',
    textAlign: 'center'
  },

  heart: {
    color: '#C23B22'
  },

  link: {
    textDecoration: 'none',
    color: '#A020F0',
    transition: card.transition,

    ':hover': {
      color: '#7017A8',
      borderBottom: '2px solid #A020F0'
    }
  }
}) 

export default Footer