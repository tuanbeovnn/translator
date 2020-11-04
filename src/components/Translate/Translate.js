import React, { Component } from 'react';

class Translate extends Component {
    state = {}

    handleHover = onHover => this.setState({ onHover })
    componentWillReceiveProps(nextProps) {
        console.log("321312312312: "+this.props.scrollTop);
        if(nextProps.scrollTop !== this.props.scrollTop){
            const textArea = document.getElementById("comment");
            console.log("dasdsadasdas: " +textArea);
            if(textArea) {
                textArea.scrollTop= nextProps.scrollTop;
            }
        }
    }
    render() {
        const { translated = '' } = this.props;
        const { onHover } = this.state
        
        return (
            <div className="col-6 mt-3" >
                <form >
                    <div className="form-group">
                        {/* <label htmlFor="comment">TRANSLATED:</label> */}
                        <h5>Translate</h5>
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
                                        style={{ background: onHover === index ? 'red' : '#FFF', cursor:"pointer"}}
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
