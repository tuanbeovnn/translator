import React, { Component } from 'react';
import './App.css';
import Text from './components/Text/Text';
import Translate from './components/Translate/Translate';
import File from './components/File/File';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            translated: '',
            isMouseover: false
        }
    }
    
    setTextData=(text) =>{
        this.setState({
            text
        })
    }
    
    setTranslated = (translated) => {
        this.setState({
            translated
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Text 
                        setTranslated={this.setTranslated}
                        text = {this.state.text} 
                        setTextData = {this.setTextData}

                    />
                    <Translate 
                        translated={this.state.translated}
                        />
                    <File setTextData={this.setTextData} />
                    
                </div>

            </div>
        );
    }

}

export default (App);
