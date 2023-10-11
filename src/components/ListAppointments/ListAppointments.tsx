import { TAppointment } from "../../types";
import ItemAppointment from "../ItemAppointment/ItemAppointment";

export type ListAppointmentsProps = {
   appointments: TAppointment[];
   onDeleteAppointment: (id: string) => void;
};

function ListAppointments({
   appointments,
   onDeleteAppointment
}: ListAppointmentsProps) {
   return (
      <div className="card mt-2 p-3">
         <div className="card-body">
            <h3 className="card-title text-center">
               {appointments.length === 0 ? "No appointments yet" : "Appointments"}
            </h3>
            <div className="lista-citas">
               {
                  appointments.map((appointment) => (
                     <ItemAppointment
                        key={appointment.id}
                        appointment={appointment}
                        onDeleteAppointment={() => onDeleteAppointment(appointment.id ?? "")}
                     />
                  ))
               }
            </div>
         </div>
      </div>
   );
}

export default ListAppointments;
