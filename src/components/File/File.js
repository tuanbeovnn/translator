import React, { Component } from 'react';


class File extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: '',
            show: true
        }

    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        const files = target.files;
        if (files.length)
            this.setState({
                [name]: files.length ? files[0] : ''

            }, () => {
                this.handleSubmit();
            });
        event.target.value = "";
    }

    handleSubmit = () => {
        let { file } = this.state;
        if (file) {

            const formData = new FormData();
            formData.append('file', file);
            fetch('http://saunakovaasa.ml:8081/uploadFile', {
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
            window.alert("Please insert file");
        }
    }

    render() {
        return (
            <div className="col-12 mt-3 ">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group mt-3 d-flex">
                        <label htmlFor="file" style={{ width: "100%" }}>
                            <div className="image-upload-wrap" style={{ maxHeight: "300px", overflowY: "auto" }}>
                                <div className="drag-text">
                                {!this.state.file ? <h3>Drag and drop a file or select add Image</h3> : 
                                <h3>{this.state.file.name}</h3>}
                                </div>
                            </div>
                        </label>
                        <input
                            className="form-control-file"
                            style={{ display: "none" }}
                            id="file"
                            type="file"
                            name="file"
                            onChange={this.onChange}
                        />
                    </div>
                </form>

            </div>
        );
    }

}

export default (File);
