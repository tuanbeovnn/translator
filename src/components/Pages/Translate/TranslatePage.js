import React, { Component } from 'react';
import Text from '../../Text/Text';
import Translate from '../../Translate/Translate';
import File from '../../File/File';

class TranslatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            translated: '',
            isMouseover: false,
            scrollTop:0
        }
    }

    setTextData = (text) => {
        this.setState({
            text
        })
    }

    setScroll =(scrollTop)=>{
        this.setState({
            scrollTop
        })
    }

    setTranslated = (translated) => {
        this.setState({
            translated
        })
    }

    render() {
        console.log("daylka srare: "+ this.state);
        return (
            <div className="container-fluid">
                <div className="row">
                    <Text
                        setTranslated={this.setTranslated}
                        text={this.state.text}
                        setTextData={this.setTextData}
                        setScroll={this.setScroll}
                    />
                    <Translate
                        translated={this.state.translated}
                        scrollTop = {this.state.scrollTop}
                    />
                    <File setTextData={this.setTextData} />
                </div>
            </div>

        );
    }
}

export default TranslatePage;
