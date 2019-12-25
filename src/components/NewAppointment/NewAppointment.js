import React, { Component } from "react";
import PropTypes from "prop-types";

import uuid from "uuid";

// initial state
const initialState = {
    appointment: {
        pet: "",
        owner: "",
        date: "",
        time: "",
        symptoms: "",
    },
    error: false,
};

class NewAppointment extends Component {
    state = {
        ...initialState,
    };

    static propTypes = {
        onCreateAppointment: PropTypes.func.isRequired,
    };

    onChangeFieldHndlr = (e) => {
        this.setState({ 
            appointment: { 
                ...this.state.appointment,
                [e.target.name]: e.target.value
            },
        });
    }

    onSubmitFormHndlr = (e) => {
        e.preventDefault();

        const { pet, owner, date, time, symptoms } = this.state.appointment;

        // validate
        if (pet === "" || owner === "" || date === "" || time === "" || symptoms === "") {
            this.setState({ error: true });
            return;
        }

        // send date
        const newAppointment = { ...this.state.appointment };
        newAppointment.id = uuid();
        this.props.onCreateAppointment(newAppointment);

        // clear input fields
        this.setState({
            ...initialState,
        });
    }

    render() {
        const { appointment, error } = this.state;

        return (
            <div className="card mt-5 p-3">
                <div className="card-body">
                    <h5 className="card-title text-center mb-3">
                        Fill up the fields to schedule a new appointment
                    </h5>

                    {
                        error ?
                            <div className="aler alert-danger mb-3 p-2 text-center">
                                All fields are required
                            </div>
                            :
                            null
                    }

                    <form onSubmit={this.onSubmitFormHndlr}>
                        <div className="form-group row">
                            <label className="col-form-label col-sm-4 col-lg-2">
                                Pet Name
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="pet"
                                    onChange={this.onChangeFieldHndlr}
                                    value={appointment.pet}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-form-label col-sm-4 col-lg-2">
                                Pet Owner Name
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="owner"
                                    onChange={this.onChangeFieldHndlr}
                                    value={appointment.owner}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-form-label col-sm-4 col-lg-2">
                                Date
                            </label>
                            <div className="col-sm-8 col-lg-4 mb-2">
                                <input
                                    className="form-control"
                                    type="date"
                                    name="date"
                                    onChange={this.onChangeFieldHndlr}
                                    value={appointment.date}
                                />
                            </div>

                            <label className="col-form-label col-sm-4 col-lg-2">
                                Time
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    className="form-control"
                                    type="time"
                                    name="time"
                                    onChange={this.onChangeFieldHndlr}
                                    value={appointment.time}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-form-label col-sm-4 col-lg-2">
                                Symptoms
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="symptoms"
                                    placeholder="describe symptoms"
                                    rows="3"
                                    onChange={this.onChangeFieldHndlr}
                                    value={appointment.symptoms}
                                ></textarea>
                            </div>
                        </div>

                        <input
                            className="btn btn-success btn-block py-3 mt-2"
                            type="submit"
                            value="Create Appointment"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default NewAppointment;