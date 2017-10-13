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

  //Now that I know this works - temporarily turning it off during development to avoid
  //pinging the firebase DB too much

  componentWillMount(){
    const savedPalettes = {
      '-KwBqilCVz7RafGWXCEg': {
        darkmuted: "#2E4658",
        darkvibrant: "#042444",
        lightmuted: "#D8B7A5",
        lightvibrant: "#FB5B8B",
        muted: "#6286AB",
        vibrant: "#FA5304"
      }, 
      '-KwBsZK2WKkLf-mX1Ryu': {
        darkmuted: "#45352C",
        darkvibrant: "#8E4434",
        lightmuted: "#C8B5A7",
        lightvibrant: "#F8D0AB",
        muted: "#A9615F",
        vibrant: "#EF1809"
      }, 
      '-jdfgh-mX1Ryu': {
        darkmuted: "#45352C",
        darkvibrant: "#8E4434",
        lightmuted: "#C8B5A7",
        lightvibrant: "#F8D0AB",
        muted: "#A9615F",
        vibrant: "#EF1809"
      },  
      '-rqwe-mX1Ryu': {
        darkmuted: "#45352C",
        darkvibrant: "#8E4434",
        lightmuted: "#C8B5A7",
        lightvibrant: "#F8D0AB",
        muted: "#A9615F",
        vibrant: "#EF1809"
      },  
      '-faqwe-mX1Ryu': {
        darkmuted: "#45352C",
        darkvibrant: "#8E4434",
        lightmuted: "#C8B5A7",
        lightvibrant: "#F8D0AB",
        muted: "#A9615F",
        vibrant: "#EF1809"
      },  
      '-asd-mX1Ryu': {
        darkmuted: "#45352C",
        darkvibrant: "#8E4434",
        lightmuted: "#C8B5A7",
        lightvibrant: "#F8D0AB",
        muted: "#A9615F",
        vibrant: "#EF1809"
      },  
    };
    this.setState({
      savedPalettes
    });

    // const self = this;
    // let paletteRef = firebase.database().ref('/palettes');
    // paletteRef.on('value', function(snapshot) {
    //   const savedPalettes = snapshot.val() ? snapshot.val() : []
    //   console.log(savedPalettes);
    //   self.setState({
    //     savedPalettes
    //   })
    // });
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
    paletteRef.push().set(paletteObj);
  }

  removeSavedPalette(id) {
    const { ...savedPalettes } = this.state.savedPalettes; 
    delete savedPalettes[id];
    // firebase.database().ref('/palettes').child(id).remove();
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
              <ImagePreview 
                imagePath={this.state.imagePath}
              />
              <FileUpload 
                onDrop={this.onDrop}
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
    marginBottom: '200px'
  },
  
  headerContent: {
    margin: '0 auto',
    backgroundColor: colors.background,
    borderRadius: card.borderRadius,
    position: 'relative',
    top: '100px',
    maxWidth: '480px',
    width: '100%',
    padding: '40px',
    boxShadow: card.boxShadow
  },

  container: {
    maxWidth: '960px',
    margin: '0 auto'
  }
}) 

export default App;
        