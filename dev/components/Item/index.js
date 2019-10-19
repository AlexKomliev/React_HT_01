import React, { Component } from 'react';

import Button from '../Button';

class Item extends Component{
    render() {
        const {author, message} = this.props;
        return(
            <li className="item">
                <header className="item__head">
                    <h3 className="item__title">{author}</h3>
                    <div className="item__action">
                        <Button text={'edit'} />
                        <Button text={'delete'} />
                    </div>
                </header>
                <p>{message}</p>
            </li>
        );
    }
}

export default Item;