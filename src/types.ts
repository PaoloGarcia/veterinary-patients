export interface IAppointment {
    pet: string
    owner: string
    date: string
    time: string
    symptoms: string
}

export interface IAppointmentStorage extends IAppointment {
    id: string
}
