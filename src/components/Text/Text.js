import React, { Component } from 'react';

class Text extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text:'',
            lang:'',
            result: '',
            toLang: ''
        }

    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name] : value 
        });
        // () => {
        
        // }
        // );
    }
    

    onSubmit = () => {
       let {lang, text, toLang} = this.state;
       
        let details = {
            'source': lang,
            'q': text,
            'target': toLang
        };
    
        let formBody = [];
        for (let property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
    
        fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', {
            method: 'POST',
            headers: {
                'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
                'x-rapidapi-key': '6b2e147191msh3c6f51fe8078fcfp116e7ejsnf44cf73ffa4b',
                'accept-encoding': 'application/gzip',
                'content-type': 'application/x-www-form-urlencoded',
                'useQueryString': 'true'
            },
            body: formBody
        }).then((response) => response.json())
            .then((responseData) => {
                this.props.startData(responseData.data.translations[0].translatedText);
            });
    };
    render() {
        return (
            <div className="col-6">
                <form>
                    <div className="form-group">
                        <label htmlFor="comment">Text:</label>
                        <textarea 
                        className="form-control" 
                        rows="8" 
                        id="comment"
                        name="text" 
                        value={this.state.text}
                        onChange = {(e) => this.onChange(e)} 
                        >Ozone is a form of oxygen. In Earth’s upper atmosphere, it acts as a barrier to block harmful radiation from the sun. But closer to Earth’s surface, ozone is a common pollutant. At ground level, high levels of ozone can harm people’s lungs and damage plants.</textarea>
                    </div>
                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Select Languages</label>
                    <select 
                        className="custom-select" 
                        id="inlineFormCustomSelectPref"
                        required="required"
                        name="lang" 
                        value={this.state.lang}
                        onChange = {this.onChange} 
                    >
                        <option >Choose...</option>
                        <option value="en">English</option>
                        <option value="fi">Finnish</option>
                        <option value="vi">Vietnamese</option>
                    </select>
                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">To Languages</label>
                    <select 
                        className="custom-select" 
                        id="inlineFormCustomSelectPref"
                        required="required"
                        name="toLang" 
                        value={this.state.toLang}
                        onChange = {this.onChange} 
                    >
                        <option >Choose...</option>
                        <option value="en">English</option>
                        <option value="fi">Finnish</option>
                        <option value="vi">Vietnamese</option>
                    </select>
                    <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick = {this.onSubmit}

                    >Translate</button>
                </form>
            </div>
        );
    }

}

export default (Text);
