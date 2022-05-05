import { TAppointment } from "../../types";
import ItemAppointment from "../ItemAppointment/ItemAppointment";

type ListAppointmentsProps = {
   appointments: TAppointment[];
   onDeleteAppointment: (id: string) => void;
};

function ListAppointments({
   appointments,
   onDeleteAppointment
}: ListAppointmentsProps): JSX.Element {
   const title = appointments.length === 0 ? "No appointments yet" : "Appointments";

   const listAppointments: JSX.Element[] = appointments.map((appointment) => (
      <ItemAppointment
         key={appointment.id}
         appointment={appointment}
         onDeleteAppointment={() => onDeleteAppointment(appointment.id ?? "")}
      />
   ));

   return (
      <div className="card mt-2 p-3">
         <div className="card-body">
            <h3 className="card-title text-center">{title}</h3>
            <div className="lista-citas">{listAppointments}</div>
         </div>
      </div>
   );
}

export default ListAppointments;
