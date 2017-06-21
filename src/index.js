import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import cards from './playing-cards.json';
import './index.css';

ReactDOM.render(<App cards={cards} />, document.getElementById('root'));
registerServiceWorker();
