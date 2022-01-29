import PropTypes from "prop-types"
import React, { useState } from "react"
import uuid from "uuid"
import { initialState } from "./constants"

function NewAppointment({ onCreateAppointment }) {
    const [appointment, setAppointment] = useState(initialState.appointment)
    const [error, setError] = useState(initialState.error)

    const onChangeFieldHndlr = (e) => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitFormHndlr = (e) => {
        e.preventDefault()
        const { pet, owner, date, time, symptoms } = appointment
        if (pet.trim() === "" || owner.trim() === "" || date.trim() === "" ||
            time.trim() === "" || symptoms.trim() === "") {
            setError(true)
            return
        }
        const newAppointment = { ...appointment }
        newAppointment.id = uuid()
        onCreateAppointment(newAppointment)
        // clear input fields
        setAppointment(initialState.appointment)
        setError(initialState.error)
    }

    return (
        <div className="card mt-5 p-3">
            <div className="card-body">
                <h5 className="card-title text-center mb-3">
                    Fill up the fields to schedule a new appointment
                </h5>
                {error
                    ? <div className="aler alert-danger mb-3 p-2 text-center">All fields are required</div>
                    : null
                }
                <form onSubmit={onSubmitFormHndlr}>
                    <div className="form-group row">
                        <label className="col-form-label col-sm-4 col-lg-2">Pet Name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                                className="form-control"
                                type="text"
                                name="pet"
                                onChange={onChangeFieldHndlr}
                                value={appointment.pet}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-sm-4 col-lg-2">Pet Owner Name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                                className="form-control"
                                type="text"
                                name="owner"
                                onChange={onChangeFieldHndlr}
                                value={appointment.owner}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-sm-4 col-lg-2">Date</label>
                        <div className="col-sm-8 col-lg-4 mb-2">
                            <input
                                className="form-control"
                                type="date"
                                name="date"
                                onChange={onChangeFieldHndlr}
                                value={appointment.date}
                            />
                        </div>
                        <label className="col-form-label col-sm-4 col-lg-2">Time</label>
                        <div className="col-sm-8 col-lg-4">
                            <input
                                className="form-control"
                                type="time"
                                name="time"
                                onChange={onChangeFieldHndlr}
                                value={appointment.time}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-sm-4 col-lg-2">Symptoms</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea
                                className="form-control"
                                name="symptoms"
                                placeholder="describe symptoms"
                                rows="3"
                                onChange={onChangeFieldHndlr}
                                value={appointment.symptoms}
                            />
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
    )
}

NewAppointment.propTypes = {
    onCreateAppointment: PropTypes.func.isRequired,
}

export default NewAppointment
