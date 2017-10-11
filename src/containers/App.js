import React, { Component } from 'react';
import * as Vibrant from 'node-vibrant';

import firebase from '../helpers/firebase';

import { StyleSheet, css } from 'aphrodite/no-important';
import { tagMapping, fontSize, fontWeight, lineHeight } from '../styles/typography';

import ImagePreview from '../components/ImagePreview';
import FileUpload from '../components/FileUpload';
import SaveButton from '../components/SaveButton';
import CurrentPalette from '../components/CurrentPalette';
import SavedPaletteContainer from '../components/SavedPaletteContainer';


class App extends Component {
  constructor() {
    super();
    this.onDrop = this.onDrop.bind(this);
    this.savePaletteToDB = this.savePaletteToDB.bind(this);
    this.changeDisplayedPalette = this.changeDisplayedPalette.bind(this);
    this.removeSavedPalette = this.removeSavedPalette.bind(this);
  }

  //Now that I know this works - temporarily turning it off during development to avoid
  //pinging the firebase DB too much

  componentWillMount(){
    // const savedPalettes = [
    //   {
    //     darkmuted: "#2E4658",
    //     darkvibrant: "#042444",
    //     key: "-Kw6xvfJ_VOjmfwrkxro",
    //     lightmuted: "#D8B7A5",
    //     lightvibrant: "#FB5B8B",
    //     muted: "#6286AB",
    //     vibrant: "#FA5304"
    //   },
    //   {
    //     darkmuted: "#2E4658",
    //     darkvibrant: "#042444",
    //     key: "-Kw6xvfJ_VOjmfwrkxro",
    //     lightmuted: "#D8B7A5",
    //     lightvibrant: "#FB5B8B",
    //     muted: "#6286AB",
    //     vibrant: "#FA5304"
    //   },
    //   {
    //     darkmuted: "#2E4658",
    //     darkvibrant: "#042444",
    //     key: "-Kw6xvfJ_VOjmfwrkxro",
    //     lightmuted: "#D8B7A5",
    //     lightvibrant: "#FB5B8B",
    //     muted: "#6286AB",
    //     vibrant: "#FA5304"
    //   }
    // ];
    // this.setState({
    //   savedPalettes
    // });

    const self = this;
    let paletteRef = firebase.database().ref('/palettes');
    console.log('Fired!!! 🔥')
    paletteRef.on('value', function(snapshot) {
      const savedPalettes = snapshot.val();
      // const savedPalettes = Object.entries(snapshot.val()).map(e => Object.assign(e[1], {key: e[0] }));
      self.setState({
        savedPalettes
      })
    });
  }

  state = {
    imagePath: "",
    palette: {
      vibrant: "#FA5304",
      muted: "#6286AB",
      darkvibrant: "#042444",
      darkmuted: "#2E4658",
      lightvibrant: "#FB5B8B",
      lightmuted: "#D8B7A5"
    },
    savedPalettes: [],
    files: []
  }

  onDrop(files) {
    const imagePath = files[0].preview;
    const self = this;
    Vibrant.from(imagePath)
      .quality(1)
      .getPalette(function(err, colorPalette) {
        const palette = self.createPalette(colorPalette);
        self.setState({
          palette,
          imagePath,
          files
        });
    });
  }

  changeDisplayedPalette(paletteToChangeTo) {
    const palette = {
      vibrant: paletteToChangeTo.vibrant,
      muted: paletteToChangeTo.muted,
      darkvibrant: paletteToChangeTo.darkvibrant,
      darkmuted: paletteToChangeTo.darkmuted,
      lightvibrant: paletteToChangeTo.lightvibrant,
      lightmuted: paletteToChangeTo.lightmuted
    }
    this.setState({
      palette
    });
  }

  createPalette(palette) {
    const colors = {
      vibrant: palette.Vibrant.getHex().toUpperCase(),
      muted: palette.Muted.getHex().toUpperCase(),
      darkvibrant: palette.DarkVibrant.getHex().toUpperCase(),
      darkmuted: palette.DarkMuted.getHex().toUpperCase(),
      lightvibrant: palette.LightVibrant.getHex().toUpperCase(),
      lightmuted: palette.LightMuted.getHex().toUpperCase()
    }
    return colors;
  }

  savePaletteToDB(e){
    e.preventDefault();
    const currentPalette = this.state.palette;
    const paletteObj = {
      vibrant: currentPalette.vibrant,
      muted: currentPalette.muted,
      darkvibrant: currentPalette.darkvibrant,
      darkmuted: currentPalette.darkmuted,
      lightvibrant: currentPalette.lightvibrant,
      lightmuted: currentPalette.lightmuted
    }
    const paletteRef = firebase.database().ref('/').child('palettes');
    const newPaletteRef = paletteRef.push().set(paletteObj);
  }

  removeSavedPalette(id) {
    const { ...savedPalettes } = this.state.savedPalettes; 
    delete savedPalettes[id];
    this.setState({
      savedPalettes
    })
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
        <SavedPaletteContainer 
          savedPalettes={this.state.savedPalettes}
          removeSavedPalette={this.removeSavedPalette}
          changeDisplayedPalette={this.changeDisplayedPalette}
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
        