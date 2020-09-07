import React, { Component } from 'react';
import './App.css';
import Text from './components/Text/Text';
import Translate from './components/Translate/Translate';
import File from './components/File/File';

class App extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                   
                    <Text/>
                    <Translate />
                    <File />
                    
                </div>

            </div>
        );
    }

}

export default (App);
