import React, { Component } from "react";

class NewAppointment extends Component {
    state = {};

    render() {
        return (
            <div className="card mt-5 p-5">
                <div className="card-body">
                    <h5 className="card-title text-center mb-5">
                        Fill up the fields to schedule a new appointment
                    </h5>

                    <form>
                        <div className="form-group row">
                            <label className="col-form-label col-sm-4 col-lg-2">
                                Pet Name
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="pet"
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
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-form-label col-sm-4 col-lg-2">
                                Synthoms
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="synthoms"
                                    placeholder="describe synthoms"
                                ></textarea>
                            </div>
                        </div>

                        <button
                            className="btn btn-success btn-block py-3 mt-2"
                            type="submit"
                        >
                            Create Appointment
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewAppointment;