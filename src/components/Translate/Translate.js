import React, { Component } from 'react';

class Translate extends Component {
    render() {
        return (
            <div className="col-6">
                <form>
                    <div className="form-group">
                        <label htmlFor="comment">Translated:</label>
                        <textarea className="form-control" rows="8" id="comment"></textarea>
                    </div>
                    <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">To Languages</label>
                    <select className="custom-select" id="translated">
                        <option defaultValue>Choose...</option>
                        <option value="en">English</option>
                        <option value="fi">Finnish</option>
                        <option value="vi">Vietnamese</option>
                    </select>
                </form>
            </div>
        );
    }

}

export default (Translate);
