import React, { Component } from 'react';

import Item from '../Item';

class List extends Component{
    render() {
        return(
            <ul className="list">
                <Item author='Николай' message='олололололололо'/>
                <Item author='Юрий' message='Всем привет'/>
            </ul>
        );
    }
}

export default List;