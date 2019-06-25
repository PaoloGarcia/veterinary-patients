import React, { Component } from 'react';
import "./bootstrap.min.css";

// components
import Header from "./components/Header/Header";
import NewAppointment from "./components/NewAppointment/NewAppointment";
import ListAppointments from "./components/ListAppointments/ListAppointments";

class App extends Component {
    state = {
        appointments: [],
    };

    onCreateAppointment = appointment => {
        this.setState({
            appointments: [...this.state.appointments, appointment],
        });
    }

    render() {
        const { appointments } = this.state;

        return (
            <div className="container">
                <Header title="Veterinary Patients Administrator" />
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <NewAppointment onCreateAppointment={this.onCreateAppointment} />
                    </div>
                </div>
                <div className="row">
                    <div className="mt-5 col-md-10 mx-auto">
                        <ListAppointments appointments={appointments} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
