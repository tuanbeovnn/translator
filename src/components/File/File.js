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

            }, () =>{
                this.handleSubmit();
            });
        event.target.value = "";
    }

    handleSubmit = () => {
        let { file } = this.state;
        if (file) {

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
            window.alert("Please insert file");
        }
    }

    render() {
        return (
            <div className="col-6 mt-3 ">
               
                    <div className="border border-success rounded p-2">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group mt-3 d-flex">
                                <label htmlFor="file"></label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="file"
                                    name="file"
                                    // value={this.state.file}
                                    onChange={this.onChange}
                                />
                            </div>

                        </form>
                    </div>
              

            </div>
        );
    }

}

export default (File);
