import React, { Component } from 'react';
import "./bootstrap.min.css";

// components
import Header from "./components/Header/Header";
import ListAppointments from "./components/ListAppointments/ListAppointments";
import NewAppointment from "./components/NewAppointment/NewAppointment";

class App extends Component {
    state = {
        appointments: [],
    };

    componentDidMount() {
        const appointments = localStorage.getItem("appointments");

        if (appointments) {
            this.setState({ appointments: JSON.parse(appointments) });
        }
    }

    componentDidUpdate() {
        localStorage.setItem("appointments", JSON.stringify(this.state.appointments));
    }

    onCreateAppointment = (appointment) =>
        this.setState({ appointments: [...this.state.appointments, appointment] });

    onDeleteAppointment = (id) => {
        const appointments = this.state.appointments.filter((appointment) => {
            return appointment.id !== id;
        });

        this.setState({ appointments });
    };

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
                        <ListAppointments
                            appointments={appointments}
                            onDeleteAppointment={this.onDeleteAppointment}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
