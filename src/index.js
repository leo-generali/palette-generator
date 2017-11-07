import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/global.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

//React Router
import { BrowserRouter, Route } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <Route path="/palettes/:paletteId" component={App} />
      {/* <App /> */}
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();