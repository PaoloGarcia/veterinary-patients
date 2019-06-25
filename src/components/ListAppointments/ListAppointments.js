import React from "react";
import PropTypes from "prop-types";

// components
import ItemAppointment from "../ItemAppointment/ItemAppointment";

const ListAppointments = ({ appointments, onDeleteAppointment }) => {
    const title = appointments.length === 0 ?
        "No appointments yet" : "Appointments";

    const listAppointements = appointments.map(appointment => (
        <ItemAppointment
            key={appointment.id}
            appointment={appointment}
            onDeleteAppointment={() => onDeleteAppointment(appointment.id)}
        />
    ));

    return (
        <div className="card mt-2 p-3">
            <div className="card-body">
                <h3 className="card-title text-center">
                    {title}
                </h3>

                <div className="lista-citas">
                    {listAppointements}
                </div>
            </div>
        </div>
    );
};

ListAppointments.propTypes = {
    appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteAppointment: PropTypes.func.isRequired,
};

export default ListAppointments;