import React, {Component} from 'react'

export default class AddBookings extends Component {

    submitBooking(event){
        event.preventDefault();

        let bookings = {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value,
        }
        //post method for boookings
        fetch("http://localhost:8080/api/bookings", {
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            body:JSON.stringify(bookings)
            
        })
        //check to see if we get a response from server
        .then(response => response.json());

        window.location.reload();
    }


    render(){
        return (
            <div className="row">
            <form className="col s12" onSubmit={this.submitBooking.bind(this)}>
              <div className="row">
                <div className="input-field col s6">
                     <input placeholder="Placeholder" ref="first_name" type="text" className="validate"/>
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                    <input ref="last_name" type="text" className="validate"/>
                    <label htmlFor="last_name">Last Name</label>
                </div>
              </div>
              
              <div className="row">
                <div className="input-field col s12">
                    <input ref="email" type="email" className="validate"/>
                    <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                  <button classNameName ="waves-effect waves-light btn" type ="submit" name="action">Submit</button>
            </div>
            </form>
          </div>
        )
    }
}