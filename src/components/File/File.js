import React, { Component } from 'react';


class File extends Component {
    render() {
        return (
            <div class="col-3">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Choose file input</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                </form>
            </div>
        );
    }

}

export default (File);
