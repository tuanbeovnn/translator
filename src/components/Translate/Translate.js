import React, { Component } from 'react';

class Translate extends Component {
    state = {}

    handleHover = onHover => this.setState({ onHover })

    render() {

        const { translated = '' } = this.props;
        const { onHover } = this.state
        console.log('onHover :>> ', onHover);
        return (
            <div className="col-6" >
                <form >
                    <div className="form-group">
                        <label htmlFor="comment">Translated:</label>
                        <div
                            className="form-control"
                            rows="8"
                            id="comment"
                            style={{ height: "200px", overflowY: "auto" }}

                        >
                            {translated.split('.').map((string, index) => {
                                return (
                                    <span
                                        key={index}
                                        onMouseOver={() => this.handleHover(index)}
                                        onMouseLeave={() => this.handleHover()}
                                        className={"translated" + (onHover === index ? " hover" : "")}
                                        style={{ background: onHover === index ? 'red' : '#FFF' }}
                                    >
                                        {index ? "." : ''}
                                        <span dangerouslySetInnerHTML={{ __html: string.replace(/\n/g, "<br/>") }} />
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

export default (Translate);
