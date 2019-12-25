import React from "react";
import PropTypes from "prop-types";

const ItemAppointment = ({ appointment, onDeleteAppointment }) => {
    return (
        <div className="media mt-3">
            <div className="media-body">
                <h4 className="mt-0">
                    {appointment.pet}
                </h4>
                <p className="card-text"><span>Pet Owner: </span>{appointment.owner}</p>
                <p className="card-text"><span>Date: </span>{appointment.date}</p>
                <p className="card-text"><span>Time: </span>{appointment.time}</p>
                <p className="card-text"><span>Symptoms: </span>{appointment.symptoms}</p>

                <button
                    className="btn btn-danger"
                    data-toggle="modal"
                    data-target="#deleteModal"
                    onClick={onDeleteAppointment}
                >
                    Delete Appointment
                </button>

                <div
                    className="modal"
                    id="deleteModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Delete</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ItemAppointment.propTypes = {
    appointment: PropTypes.objectOf(PropTypes.string).isRequired,
    onDeleteAppointment: PropTypes.func.isRequired,
};

export default ItemAppointment;