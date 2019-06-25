import React from "react";
import PropTypes from "prop-types";

// components
import ItemAppointment from "../ItemAppointment/ItemAppointment";

const ListAppointments = ({ appointments }) => {
    return (
        <div className="card mt-2 p-3">
            <div className="card-body">
                <h3 className="card-title text-center">
                    Appointments
                </h3>

                <div className="lista-citas">
                    {
                        appointments.map(appointment => {
                            return <ItemAppointment key={appointment.id} appointment={appointment} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

ListAppointments.propTypes = {
    appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListAppointments;