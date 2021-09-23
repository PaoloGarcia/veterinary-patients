import React, { useEffect, useState } from 'react'
import "./bootstrap.min.css"
import Header from "./components/Header/Header"
import ListAppointments from "./components/ListAppointments/ListAppointments"
import NewAppointment from "./components/NewAppointment/NewAppointment"

function App() {
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        const appointments = localStorage.getItem("appointments")
        if (appointments) {
            setAppointments(JSON.parse(appointments))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("appointments", JSON.stringify(appointments))
    }, [appointments])

    const onCreateAppointment = (appointment) => {
        setAppointments((prevAppointments) => [...prevAppointments, appointment])
    }

    const onDeleteAppointment = (id) => {
        const newAppointments = appointments.filter((appointment) => appointment.id !== id)
        setAppointments(newAppointments)
    }

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
    )
}

export default App
