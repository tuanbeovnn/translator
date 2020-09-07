import React, { Component } from 'react';

class Translate extends Component {
    render() {
        return (
            <div class="col-6">
                <form>
                    <div class="form-group">
                        <label for="comment">Translated:</label>
                        <textarea class="form-control" rows="8" id="comment"></textarea>
                    </div>
                </form>
            </div>
        );
    }

}

export default (Translate);
