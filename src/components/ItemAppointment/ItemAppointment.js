import React from "react";
import PropTypes from "prop-types";

const ItemAppointment = ({ appointment: { pet, owner, date, time, symptoms } }) => {
    return (
        <div className="media mt-3">
            <div className="media-body">
                <h4 className="mt-0">
                    {pet}
                </h4>
                <p className="card-text"><span>Pet Owner: </span>{owner}</p>
                <p className="card-text"><span>Date: </span>{date}</p>
                <p className="card-text"><span>Time: </span>{time}</p>
                <p className="card-text"><span>Symptoms: </span>{symptoms}</p>
            </div>
        </div>
    );
};

ItemAppointment.propTypes = {
    appointment: PropTypes.object.isRequired,
};

export default ItemAppointment;