import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';


class SaveButton extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <button className={css(styles.button)} onClick={this.props.savePaletteToDB} />
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: '50px',
    width: '50px',
    backgroundColor: 'red'
  }
}) 

export default SaveButton;