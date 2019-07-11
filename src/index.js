import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {LogoClass, CalendarClass, MemberClass, ResourcesClass, AboutClass} from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<LogoClass/>, document.getElementById('logo'));
ReactDOM.render(<CalendarClass/>, document.getElementById('calendar'));
ReactDOM.render(<MemberClass/>, document.getElementById('member'));
ReactDOM.render(<ResourcesClass/>, document.getElementById('resources'));
ReactDOM.render(<AboutClass/>, document.getElementById('about'));
//ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
