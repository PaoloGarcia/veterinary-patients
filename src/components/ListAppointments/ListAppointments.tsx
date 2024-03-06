import { TAppointment, TDraftAppointment } from "../../types";
import ItemAppointment from "../ItemAppointment/ItemAppointment";

export type ListAppointmentsProps = {
    appointments: TAppointment[];
    onUpdateAppointments: (id: string, props: TDraftAppointment) => void;
    onDeleteAppointment: (id: string) => void;
};

function ListAppointments({
    appointments,
    onUpdateAppointments,
    onDeleteAppointment
}: ListAppointmentsProps) {
    const renderedAppointments = appointments.map((appointment) => (
        <ItemAppointment
            key={appointment.id}
            appointment={appointment}
            onUpdateAppointments={
                (props: TDraftAppointment) => onUpdateAppointments(appointment.id, props)
            }
            onDeleteAppointment={() => onDeleteAppointment(appointment.id)}
        />
    ));
    
    return (
        <div className="card mt-2 p-3">
            <div className="card-body">
                <h3 className="card-title text-center">
                    {appointments.length === 0 ? "No appointments yet" : "Appointments"}
                </h3>
                <ul className="list-appointmets">{renderedAppointments}</ul>
            </div>
        </div>
    );
}

export default ListAppointments;
