import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge'
import 'bootstrap/dist/css/bootstrap.css'
import './Global.css';
import userPhoto from "./images/4fb6dd0d-b0c4-47a3-9c7e-8141db526a25.jpg"


const container = document.getElementById('app');

ReactDOM.render(
    <Badge 
        avatar={userPhoto}
        name="Victor" 
        surnames="Gea" 
        jobTitle="Frontend Developer"
        twitter="@VitoYeah"

    />
    , container);
