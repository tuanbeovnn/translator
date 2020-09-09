import React, { Component } from 'react';
import './App.css';
import Text from './components/Text/Text';
import Translate from './components/Translate/Translate';
import File from './components/File/File';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    

    startData(data) {
        this.setState({
            data
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Text startData={(d) => this.startData(d)}/>
                    <Translate endData={this.state.data} />
                    <File />
                    
                </div>

            </div>
        );
    }

}

export default (App);
