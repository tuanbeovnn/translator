import React, { Component } from 'react';
import apiCaller from './../../utils/apiCaller';




class Text extends Component {


    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name] : value 
        });
    }
    onSubmit = (event) =>{
        
        console.log(this.onSubmit);
        const source = document.getElementById("inlineFormCustomSelectPref").innerHTML;
        const q = document.getElementById("comment").innerHTML;
        const target = document.getElementById("translated").innerHTML;
        apiCaller('POST', {
            "source": "en",
            "q": "Hello, world!",
            "target": "es"
        }).then(res =>{
            console.log(res);
        })
    }
    render() {
        return (
            <div className="col-6">
                <form onSubmit = {()=>console.log("Hello")}>
                    <div className="form-group">
                        <label htmlFor="comment">Text:</label>
                        <textarea 
                        className="form-control" 
                        rows="8" 
                        id="comment"
                        name="text" 
                        value=""
                        onChange = {this.onChange} 
                        >Ozone is a form of oxygen. In Earth’s upper atmosphere, it acts as a barrier to block harmful radiation from the sun. But closer to Earth’s surface, ozone is a common pollutant. At ground level, high levels of ozone can harm people’s lungs and damage plants.</textarea>
                    </div>
                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Languages</label>
                    <select 
                        className="custom-select" 
                        id="inlineFormCustomSelectPref"
                        required="required"
                        name="lang" 
                        value=""
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
