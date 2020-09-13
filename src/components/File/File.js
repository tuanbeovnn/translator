import React, { Component } from 'react';


class File extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: ''
        }

    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        const files = target.files;
        if (files.length)
            this.setState({
                [name]: files.length ? files[0] : ''
            });
    }

    handleSubmit = (event) => {
        let { file } = this.state;
        if (file) {
            event.preventDefault();
            const formData = new FormData();
            formData.append('file', file);
            fetch('http://localhost:8080/uploadFile', {
                method: 'POST',
                body: formData
            }).then((response) => response.json())
                .then((responseData) => {
                    if (responseData.status === true) {
                        this.props.setTextData(responseData.data);
                    }
                }).catch(e => console.log('e :>> ', e));
        }
        else {
            window.alert("Vui Long Them file");
        }
    }

    render() {
        return (
            <div className="col-3">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Choose file input</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="exampleFormControlFile1"
                            name="file"
                            // value={this.state.file}
                            onChange={this.onChange}
                        />
                        <input type="submit" />
                    </div>
                </form>
            </div>
        );
    }

}

export default (File);
