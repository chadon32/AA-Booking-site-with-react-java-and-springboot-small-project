import React, {Component} from 'react';
import SingleBooking from './SingleBooking';
import AddBookings from './AddBookings';

export default class Bookings extends Component{
    constructor(props){
        super(props);
        this.state ={
            bookings:[],

        };
    }

    componentDidMount(){
        //fetch the data from server 
        fetch('http//localhost:8080/api/bookings')
        //use response from server then return as json data
        .then(response => response.json())
        //update the state bookings
        .then(data =>this.setState({bookings:data}))
    }

render(){
    return (
        <div>
            <div className="row">
                <AddBookings/>
                
            </div>
            <div className="row">
                {this.state.bookings.map((item)=> (
                    //Every item in database will be avaliable as a single item and iterated through this function
                    <SingleBooking key={item.id} item = {item}/>
                ))}
            </div>
        </div>
    )
}


}