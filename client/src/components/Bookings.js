import React, { Component } from 'react';
import SingleBooking from './SingleBooking';
import AddBookings from './AddBookings';

export default class Bookings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/bookings')
        .then(response => response.json())
        .then(data => this.setState({bookings: data}))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <AddBookings />
                </div>
                <div className="row">
                    { this.state.bookings.map((item) => (
                        <SingleBooking key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}
