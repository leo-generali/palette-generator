import React, { Component } from 'react';
import * as Vibrant from 'node-vibrant';

//Database
import firebase from '../helpers/firebase';

//Styling
import { colors, card } from '../styles/global';
import { StyleSheet, css } from 'aphrodite/no-important';

//Components
import ImagePreview from '../components/ImagePreview';
import FileUpload from '../components/FileUpload';
import OptionsBar from '../components/OptionsBar';
import CurrentPalette from '../components/CurrentPalette';
import SavedPaletteContainer from '../components/SavedPaletteContainer';
import Footer from '../components/Footer';
import Separator from '../components/Separator';

class App extends Component {
  constructor() {
    super();
    this.onDrop = this.onDrop.bind(this);
    this.savePaletteToDB = this.savePaletteToDB.bind(this);
    this.changeDisplayedPalette = this.changeDisplayedPalette.bind(this);
    this.removeSavedPalette = this.removeSavedPalette.bind(this);
  }

  componentWillMount(){
    if (localStorage.getItem('paletteId') === null ){
      const id = prompt("Please create a custom palette ID");
      const paletteIdRef = firebase.database().ref('/').child('ids');
      paletteIdRef.child(id).set(true);
      localStorage.setItem('paletteId', id);

      
      const paletteRef = firebase.database().ref('/').child('palettes');
      const paletteID = {};
      paletteID[id] = false;
      paletteRef.child(id).set(false);

      const self = this;
      const userPaletteRef = firebase.database().ref(`/palettes/${id}`);
      userPaletteRef.on('value', function(snapshot) {
        const savedPalettes = snapshot.val() ? snapshot.val() : []
        self.setState({
          id,
          savedPalettes
        })
      });
    }
    console.log(this.props.match.params.paletteId);
  }

  getLocalStoragePaletteId(){
    const paletteId = localStorage.getItem('palette-id');
    return paletteId;
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
    id: null,
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
    const paletteRef = firebase.database().ref('/').child(`palettes/${this.state.id}`);
    paletteRef.push().set(paletteObj);
  }

  removeSavedPalette(id) {
    const { ...savedPalettes } = this.state.savedPalettes; 
    delete savedPalettes[id];
    firebase.database().ref(`/palettes/${this.state.id}`).child(id).remove();
    this.setState({
      savedPalettes
    })
  }

  render() {
    return (
      <div>
        <header className={css(styles.header)}>
            <Separator text={"Palette Generator"} />
            <div className={css(styles.headerContent)} >
              <FileUpload 
                onDrop={this.onDrop}
                imagePath={this.state.imagePath}
              />
              <ImagePreview 
                imagePath={this.state.imagePath}
              />
            </div>
        </header>
        <main className={css(styles.container)}>
          <Separator text={"Current Palette"} />
          <CurrentPalette 
            palette={this.state.palette}
          />
          <OptionsBar 
            savePaletteToDB={this.savePaletteToDB}
            palette={this.state.palette}
          />
          <Separator text={"Saved Palettes"} />
          <SavedPaletteContainer 
            savedPalettes={this.state.savedPalettes}
            removeSavedPalette={this.removeSavedPalette}
            changeDisplayedPalette={this.changeDisplayedPalette}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundImage: 'linear-gradient(145deg, #2A475E, #1D2838)',
    marginBottom: '200px',
    boxShadow: card.boxShadow
  },

  headerContent: {
    margin: '0 auto',
    backgroundColor: colors.background,
    borderRadius: card.borderRadius,
    position: 'relative',
    top: '100px',
    maxWidth: '640px',
    width: '100%',
    padding: '40px',
    boxShadow: card.boxShadow,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  container: {
    maxWidth: '960px',
    margin: '0 auto'
  }
}) 

export default App;
        