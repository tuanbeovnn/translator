import React, { Component } from 'react';

class Text extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            lang: 'en',
            result: '',
            toLang: 'fi'
        }

    }

    componentDidUpdate(preprops) {
        if(preprops.text !== this.props.text) {
            this.onSubmit();
        }
    }
    
   

    componentDidMount() {
        const textarea = document.getElementById("comment1");
        if (textarea) {
            textarea.onresize = this.checkResize;
        }
    }
    componentWillUnmount() {
        const textarea = document.getElementById("comment1");
        if (textarea) {
            textarea.removeEventListener('resize', this.checkResize)
        }
    }

    checkResize = e => {
        console.log('e.target :>> ', e);
    }
    onChangeText = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.props.setTextData(
            value
        );
        this.setState({
            [name]: value
        });
        // () => {

        // }
        // );
    }

    onScroll = (event) =>{
        this.props.setScroll(event.target.scrollTop);
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = () => {
        const { lang, toLang } = this.state;
        const { text } = this.props;
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
                'x-rapidapi-key': '463810293emsh7347ddd50ea5613p1356b2jsn448a005bcd8e',
                'accept-encoding': 'application/gzip',
                'content-type': 'application/x-www-form-urlencoded',
                'useQueryString': 'true'
            },
            body: formBody
        }).then((response) => response.json())
            .then((responseData) => {
                if(responseData && responseData.data && responseData.data.translations && responseData.data.translations.length){
                    this.props.setTranslated(responseData.data.translations[0].translatedText);
                }
            });

        // this.props.setTranslated(text);
    };
    render() {
        const { text } = this.props;
        return (
            <div className="col-6 mt-3">
                <form>
                    <div className="form-group">
                      
                        <h5>Text</h5>
                        <textarea
                            className="form-control"
                            rows="8"
                            id="comment1"
                            name="text"
                            value={text}
                            onChange={this.onChangeText}
                            onScroll={this.onScroll}
                            style={{ height: "200px" }}
                        ></textarea>
                    </div>
                    <div className="form_center">
                        <label className="my-1 mr-2 position1" htmlFor="inlineFormCustomSelectPref">From</label>
                        <select
                            className="custom-select"
                            id="inlineFormCustomSelectPref"
                            required="required"
                            name="lang"
                            value={this.state.lang}
                            onChange={this.onChange}
                        >
                            <option >Choose...</option>
                            <option value="en">English</option>
                            <option value="fi">Finnish</option>
                            <option value="vi">Vietnamese</option>
                        </select>
                        <label className="my-1 mr-2 position2" htmlFor="inlineFormCustomSelectPref">To</label>
                        <select
                            className="custom-select"
                            id="translated_text"
                            required="required"
                            name="toLang"
                            value={this.state.toLang}
                            onChange={this.onChange}
                        >
                            <option >Choose...</option>
                            <option value="en">English</option>
                            <option value="fi">Finnish</option>
                            <option value="vi">Vietnamese</option>
                        </select>
                    </div>
                
                </form>
            </div>
        );
    }

}

export default (Text);
