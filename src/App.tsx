import { useEffect, useState } from 'react';
import { TAppointment } from "./types";
import Header from "./components/Header/Header";
import ListAppointments from "./components/ListAppointments/ListAppointments";
import NewAppointment from "./components/NewAppointment/NewAppointment";

function App(): JSX.Element {
    const [appointments, setAppointments] = useState<TAppointment[]>([]);

    useEffect(() => {
        const appointments: string = localStorage.getItem("appointments") ?? "[]";
        setAppointments(JSON.parse(appointments));
    }, []);

    useEffect(() => {
        localStorage.setItem("appointments", JSON.stringify(appointments));
    }, [appointments]);

    const onCreateAppointment = (appointment: TAppointment): void => {
        setAppointments((prevAppointments) => [...prevAppointments, appointment]);
    };

    const onDeleteAppointment = (id: string): void => {
        const newAppointments = appointments.filter(
            (appointment) => appointment.id !== id
        );
        setAppointments(newAppointments);
    };

    return (
        <div className="container">
            <Header title="Veterinary Patients Administrator" />
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <NewAppointment onCreateAppointment={onCreateAppointment} />
                </div>
            </div>
            <div className="row">
                <div className="mt-5 col-md-10 mx-auto">
                    <ListAppointments
                        appointments={appointments}
                        onDeleteAppointment={onDeleteAppointment}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
