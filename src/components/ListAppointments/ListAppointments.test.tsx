import { render, screen } from "@testing-library/react";
import ListAppointments, { ListAppointmentsProps } from "./ListAppointments";
import { TAppointment } from "../../types";

function createProps(additionalProps?: object): ListAppointmentsProps {
    return {
        appointments: [],
        onUpdateAppointments: jest.fn(),
        onDeleteAppointment: jest.fn(),
        ...additionalProps
    }
}

describe("Tests for ListAppointment", () => {
    it("Should render component correctly", () => {
        render(<ListAppointments {...createProps()} />);
        const title = screen.getByRole("heading", { name: /no appointments yet/i });
        expect(title).toBeInTheDocument;
    });

    it("renders 2 appointments", () => {
        const appointments: TAppointment[] = [
            {
                id: "1",
                name: "firulais",
                owner: "Paolo",
                date: new Date().toDateString(),
                time: "33:33",
                symptoms: "headache"
            },
            {
                id: "2",
                name: "cachito",
                owner: "Paulina",
                date: new Date().toDateString(),
                time: "11:33",
                symptoms: "vomit"
            }
        ];
        render(<ListAppointments {...createProps()} appointments={appointments} />);
        const appts = screen.getByRole("list");
        expect(appts).toHaveLength(2);
    });
});