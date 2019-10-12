import React, { Component } from 'react';

class Button extends Component{
    render() {
        return(
            <button className="button button--small">{this.props.text}</button>
        );
    }
}

export default Button;