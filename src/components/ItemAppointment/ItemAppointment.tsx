import { ChangeEvent, FormEvent, useState } from "react";
import { TAppointment, TAppointmentDraft } from "../../types";
import { initialState } from "../NewAppointment/constants";

type ItemAppointmentProps = {
   appointment: TAppointment;
   onDeleteAppointment: () => void;
};

function ItemAppointment({
   appointment,
   onDeleteAppointment
}: ItemAppointmentProps): JSX.Element {
   const [isEditMode, setIsEditMode] = useState(false);
   const [appt, setAppointment] = useState<TAppointmentDraft>(
      initialState.appointment
   );
   const { pet, owner, date, time, symptoms } = appointment;

   const onChangeField = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setAppointment({
         ...appointment,
         [e.target.name]: e.target.value
      });
   };

   const onSubmitForm = (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      // const { pet, owner, date, time, symptoms } = appointment;

      // if (someAreEmpty(pet, owner, date, time, symptoms)) {
      //    setError(true);
      //    return;
      // }

      // const newAppointment = { ...appointment };
      // onCreateAppointment({ ...newAppointment, id: uuidv4() });
      // // clear input fields
      // setAppointment(initialState.appointment);
      // setError(initialState.error);
   };

   const onCancelEditing = (): void => {
      setAppointment(initialState.appointment);
      setIsEditMode(false);
   };

   const onStartEditing = () => {
      setIsEditMode(true);
      setAppointment({
         ...appointment,
      });
   };

   return (
      <div className="media mt-3">
         <div className="media-body">
            {!isEditMode ? (
               <div>
                  <h4 className="mt-0">{pet}</h4>
                  <p className="card-text"><span>Pet Owner: </span>{owner}</p>
                  <p className="card-text"><span>Date: </span>{date}</p>
                  <p className="card-text"><span>Time: </span>{time}</p>
                  <p className="card-text"><span>Symptoms: </span>{symptoms}</p>
               </div>
            ) : (
               <form onSubmit={onSubmitForm}>
                  <div className="form-group row">
                     <label className="col-form-label col-sm-4 col-lg-2">
                        Pet Name
                     </label>
                     <div className="col-sm-8 col-lg-10">
                        <input
                           className="form-control"
                           type="text"
                           name="pet"
                           onChange={onChangeField}
                           value={appt.pet}
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
                           onChange={onChangeField}
                           value={appt.owner}
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
                           onChange={onChangeField}
                           value={appt.date}
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
                           onChange={onChangeField}
                           value={appt.time}
                        />
                     </div>
                  </div>
                  <div className="form-group row">
                     <label className="col-form-label col-sm-4 col-lg-2">
                        Symptoms
                     </label>
                     <div className="col-sm-8 col-lg-10">
                        <textarea
                           className="form-control"
                           name="symptoms"
                           placeholder="describe symptoms"
                           rows={3}
                           onChange={onChangeField}
                           value={appt.symptoms}
                        />
                     </div>
                  </div>
                  <input
                     className="btn btn-success mt-1"
                     type="submit"
                     value="Save Changes"
                  />
               </form>
            )}
            <button
               type="button"
               className="btn btn-danger ml-3"
               data-toggle="modal"
               data-target="#deleteModal"
            >
               Delete Appointment
            </button>
            {!isEditMode ? (
               <button
                  type="button"
                  className="btn btn-warning ml-3"
                  onClick={onStartEditing}
               >
                  Edit Appointment
               </button>
            ) : null}
            {isEditMode ? (
               <button
                  type="button"
                  className="btn btn-secondary ml-3"
                  onClick={onCancelEditing}
               >
                  Cancel
               </button>
            ) : null}
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
