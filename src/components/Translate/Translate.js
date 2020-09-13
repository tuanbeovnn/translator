import React, { Component } from 'react';

class Translate extends Component {

    
    render() {
        return (
            <div className="col-6">
                <form>
                    <div className="form-group">
                        <label htmlFor="comment">Translated:</label>
                        <textarea 
                            className="form-control" 
                            rows="8" 
                            id="comment"
                            value={this.props.translated}
                            onChange = {()=> {return false}}

                            ></textarea>
                    </div>
                </form>
            </div>
        );
    }

}

export default (Translate);
