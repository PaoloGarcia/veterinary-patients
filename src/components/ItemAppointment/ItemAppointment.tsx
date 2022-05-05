import { TAppointment } from "../../types";

type ItemAppointmentProps = {
   appointment: TAppointment;
   onDeleteAppointment: () => void;
};

function ItemAppointment({
   appointment,
   onDeleteAppointment
}: ItemAppointmentProps): JSX.Element {
   const { pet, owner, date, time, symptoms } = appointment;

   return (
      <div className="media mt-3">
         <div className="media-body">
            <h4 className="mt-0">{pet}</h4>
            <p className="card-text"><span>Pet Owner: </span>{owner}</p>
            <p className="card-text"><span>Date: </span>{date}</p>
            <p className="card-text"><span>Time: </span>{time}</p>
            <p className="card-text"><span>Symptoms: </span>{symptoms}</p>
            <button
               type="button"
               className="btn btn-danger"
               data-toggle="modal"
               data-target="#deleteModal"
            >
               Delete Appointment
            </button>
            <div
               className="modal"
               id="deleteModal"
               tabIndex={1}
               role="dialog"
               aria-labelledby="exampleModalLabel"
               aria-hidden="true"
            >
               <div className="modal-dialog" role="document">
                  <div className="modal-content">
                     <div className="modal-header" />
                     <div className="modal-body">
                        <p>Do you really want to delete this appointment?</p>
                     </div>
                     <div className="modal-footer">
                        <button
                           type="button"
                           className="btn btn-primary"
                           onClick={onDeleteAppointment}
                        >
                           Delete
                        </button>
                        <button
                           type="button"
                           className="btn btn-secondary"
                           data-dismiss="modal"
                        >
                           Close
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ItemAppointment;
