type RequireOnly<T, P extends keyof T> = Pick<T, P> & Partial<Omit<T, P>>;

export type TAppointment = {
   id: string;
   pet: string;
   owner: string;
   date: string;
   time: string;
   symptoms: string;
};

export type TDraftAppointment = Partial<Omit<TAppointment, "id">>;

export type TAppointmentDraft = {
   pet: string;
   owner: string;
   date: string;
   time: string;
   symptoms: string;
};
