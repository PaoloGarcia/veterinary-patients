import React, { Component } from 'react';
import "./bootstrap.min.css";

// components
import Header from "./components/Header/Header";
import NewAppointment from "./components/NewAppointment/NewAppointment";

class App extends Component {
    state = {};

    render() {
        return (
            <div className="container">
                <Header title="Veterinary Patients Administrator" />
                <NewAppointment />
            </div>
        );
    }
}

export default App;
