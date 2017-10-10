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
    width: '200px',
    height: '200px',
    backgroundColor: 'red'
  }
}) 

export default SaveButton;