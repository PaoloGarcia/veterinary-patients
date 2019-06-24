import React, { Component } from "react";

class NewAppointment extends Component {
    state = {};

    render() {
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Fill up the fields to schedule a new appointment
                    </h2>
                </div>
            </div>
        );
    }
}

export default NewAppointment;