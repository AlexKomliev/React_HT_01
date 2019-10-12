import React, { Component } from 'react';

import Item from './../../components/Item';

class List extends Component{
    render() {
        return(
            <ul className="list">
                <Item name={'Николай'} message={'олололололололо'}/>
                <Item name={'Юрий'} message={'Всем привет'}/>
            </ul>
        );
    }
}

export default List;