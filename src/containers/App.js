import React, { Component } from 'react';
import * as Vibrant from 'node-vibrant'

import firebase from '../helpers/firebase'

import { StyleSheet, css } from 'aphrodite/no-important';
import { tagMapping, fontSize, fontWeight, lineHeight } from '../styles/typography';

import ImagePreview from '../components/ImagePreview';
import FileUpload from '../components/FileUpload';
import SaveButton from '../components/SaveButton';
import CurrentPalette from '../components/CurrentPalette';
import SavedPalettes from '../components/SavedPalettes';


class App extends Component {
  constructor() {
    super();
    this.onDrop = this.onDrop.bind(this);
    this.savePaletteToDB = this.savePaletteToDB.bind(this);
  }

  //No that I know this works - temporariliy turning it off during development to avoid
  //pinging the firebase DB too much

  componentWillMount(){
    const savedPalettes = [
      {
        darkmuted: "#2E4658",
        darkvibrant: "#042444",
        key: "-Kw6xvfJ_VOjmfwrkxro",
        lightmuted: "#D8B7A5",
        lightvibrant: "#FB5B8B",
        muted: "#6286AB",
        vibrant: "#FA5304"
      },
      {
        darkmuted: "#2E4658",
        darkvibrant: "#042444",
        key: "-Kw6xvfJ_VOjmfwrkxro",
        lightmuted: "#D8B7A5",
        lightvibrant: "#FB5B8B",
        muted: "#6286AB",
        vibrant: "#FA5304"
      },
      {
        darkmuted: "#2E4658",
        darkvibrant: "#042444",
        key: "-Kw6xvfJ_VOjmfwrkxro",
        lightmuted: "#D8B7A5",
        lightvibrant: "#FB5B8B",
        muted: "#6286AB",
        vibrant: "#FA5304"
      }
    ]
    this.setState({
      savedPalettes
    })

    // const self = this;
    // firebase.database().ref('/palettes').on('value', function(snapshot) {
    //   const savedPalettes = Object.entries(snapshot.val()).map(e => Object.assign(e[1], {key: e[0] }));
      // self.setState({
      //   savedPalettes
      // })
    // });
  }

  state = {
    imagePath: "",
    palette: [
      "#FA5304",
      "#6286AB",
      "#042444",
      "#2E4658",
      "#FB5B8B",
      "#D8B7A5",
    ],
    savedPalettes: [],
    files: []
  }

  onDrop(files) {
    const imagePath = files[0].preview;
    const self = this;
    Vibrant.from(imagePath)
      .quality(1)
      .getPalette(function(err, palette) {
        const colorPalette = self.createPalette(palette);
        self.setState({
          palette: colorPalette,
          imagePath,
          files
        });
    });
  }

  createPalette(palette) {
    const colors = [
      palette.Vibrant.getHex().toUpperCase(),
      palette.Muted.getHex().toUpperCase(),
      palette.DarkVibrant.getHex().toUpperCase(),
      palette.DarkMuted.getHex().toUpperCase(),
      palette.LightVibrant.getHex().toUpperCase(),
      palette.LightMuted.getHex().toUpperCase()
    ]
    return colors;
  }

  savePaletteToDB(e){
    e.preventDefault();
    const paletteArr = this.state.palette;
    const paletteObj = {
      vibrant: paletteArr[0],
      muted: paletteArr[1],
      darkvibrant: paletteArr[2],
      darkmuted: paletteArr[3],
      lightvibrant: paletteArr[4],
      lightmuted: paletteArr[5],
    }
    const paletteRef = firebase.database().ref('/').child('palettes');
    const newPaletteRef = paletteRef.push().set(paletteObj);
  }

  render() {
    return (
      <div className={css(styles.container)} >
        <ImagePreview 
          imagePath={this.state.imagePath}
        />
        <FileUpload 
          onDrop={this.onDrop}
          imagePath={this.state.imagePath}
        />
        <CurrentPalette 
          palette={this.state.palette}
        />
        <SaveButton 
          savePaletteToDB={this.savePaletteToDB}
        />
        <SavedPalettes 
          savedPalettes={this.state.savedPalettes}
        />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '1280px',
    margin: '0 auto'
  }
}) 

export default App;
        