import React, { Component } from 'react';


class File extends Component {
    render() {
        return (
            <div className="col-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Choose file input</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                    </div>
                </form>
            </div>
        );
    }

}

export default (File);
