import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';


import Approuting from "./routing/routing.js"
import * as serviceWorker from './serviceWorker';


render(<Router>
                 <Approuting />
                </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
