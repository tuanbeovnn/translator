import React, { Component } from 'react';


class Text extends Component {
    render() {
        return (
            <div class="col-6">
                <form>
                <div class="form-group">
                    <label for="comment">Text:</label>
                    <textarea class="form-control" rows="8" id="comment">Ozone is a form of oxygen. In Earth’s upper atmosphere, it acts as a barrier to block harmful radiation from the sun. But closer to Earth’s surface, ozone is a common pollutant. At ground level, high levels of ozone can harm people’s lungs and damage plants.</textarea>
                </div>
                </form>
            </div>
        );
    }

}

export default (Text);
