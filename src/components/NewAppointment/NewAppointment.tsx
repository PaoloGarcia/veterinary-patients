import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { TAppointment, TAppointmentDraft } from "../../types";
import { someAreEmpty } from "./helpers";
import { initialState } from "./constants";

type NewAppointmentProps = {
   onCreateAppointment: (appointment: TAppointment) => void;
};

function NewAppointment({ onCreateAppointment }: NewAppointmentProps): JSX.Element {
   const [appointment, setAppointment] = useState<TAppointmentDraft>(
      initialState.appointment
   );
   const [error, setError] = useState<boolean>(initialState.error);

   const onChangeField = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ): void => {
      setAppointment({
         ...appointment,
         [e.target.name]: e.target.value
      });
   };

   const onSubmitForm = (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      const { pet, owner, date, time, symptoms } = appointment;

      if (someAreEmpty(pet, owner, date, time, symptoms)) {
         setError(true);
         return;
      }

      const newAppointment = { ...appointment };
      onCreateAppointment({ ...newAppointment, id: uuidv4() });
      // clear input fields
      setAppointment(initialState.appointment);
      setError(initialState.error);
   };

   return (
      <div className="card mt-5 p-3">
         <div className="card-body">
            <h5 className="card-title text-center mb-3">
               Fill up the fields to schedule a new appointment
            </h5>
            {
               error
                  ? (
                     <p className="aler alert-danger mb-3 p-2 text-center">
                        All fields are required
                     </p>
                  )
                  : null
            }
            <form onSubmit={onSubmitForm}>
               <div className="form-group row">
                  <label htmlFor="pet" className="col-form-label col-sm-4 col-lg-2">
                     Pet Name
                  </label>
                  <div className="col-sm-8 col-lg-10">
                     <input
                        id="pet"
                        className="form-control"
                        type="text"
                        name="pet"
                        onChange={onChangeField}
                        value={appointment.pet}
                     />
                  </div>
               </div>
               <div className="form-group row">
                  <label htmlFor="owner" className="col-form-label col-sm-4 col-lg-2">
                     Pet Owner Name
                  </label>
                  <div className="col-sm-8 col-lg-10">
                     <input
                        id="owner"
                        className="form-control"
                        type="text"
                        name="owner"
                        onChange={onChangeField}
                        value={appointment.owner}
                     />
                  </div>
               </div>
               <div className="form-group row">
                  <label htmlFor="date" className="col-form-label col-sm-4 col-lg-2">
                     Date
                  </label>
                  <div className="col-sm-8 col-lg-4 mb-2">
                     <input
                        id="date"
                        className="form-control"
                        type="date"
                        name="date"
                        onChange={onChangeField}
                        value={appointment.date}
                     />
                  </div>
                  <label htmlFor="time" className="col-form-label col-sm-4 col-lg-2">
                     Time
                  </label>
                  <div className="col-sm-8 col-lg-4">
                     <input
                        id="time"
                        className="form-control"
                        type="time"
                        name="time"
                        onChange={onChangeField}
                        value={appointment.time}
                     />
                  </div>
               </div>
               <div className="form-group row">
                  <label htmlFor="symptoms" className="col-form-label col-sm-4 col-lg-2">
                     Symptoms
                  </label>
                  <div className="col-sm-8 col-lg-10">
                     <textarea
                        id="symptoms"
                        className="form-control"
                        name="symptoms"
                        placeholder="describe symptoms"
                        rows={3}
                        onChange={onChangeField}
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
   );
}

export default NewAppointment;
