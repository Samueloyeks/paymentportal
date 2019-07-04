import React, { Component } from 'react';
import Avatar from 'react-avatar';
import cardiB from '../assets/img/cardi-b.jpg';

export default class Header extends Component {
    render() {
        return (
            <div id="menu">
                <Avatar name="Foo Bar" id="avatar" round={true} size="70" src={cardiB} />
                <a href="#" className="menu-item">Bookings</a>
                <a href="#" className="menu-item">Recently viewed</a>
                <a href="#" className="menu-item">Trips</a>
            </div>
        )
    }
}

