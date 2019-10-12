import React, { Component } from 'react';

import Button from './../../components/Button';

class Item extends Component{
    render() {
        return(
            <li className="item">
                <header className="item__head">
                    <h3 className="item__title">{this.props.name}</h3>
                    <div className="item__action">
                        <Button text={'edit'} />
                        <Button text={'delete'} />
                    </div>
                </header>
                <p>{this.props.message}</p>
            </li>
        );
    }
}

export default Item;