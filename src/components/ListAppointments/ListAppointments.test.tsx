import { render, screen } from "@testing-library/react";
import ListAppointments, { ListAppointmentsProps } from "./ListAppointments";

function createProps(additionalProps?: object): ListAppointmentsProps {
    return {
        appointments: [],
        onDeleteAppointment: jest.fn(),
        ...additionalProps
    }
}

describe("Tests for ListAppointment", () => {
    beforeEach(() => {
        render(<ListAppointments {...createProps()} />);
    });

    it("Should render component correctly", () => {
        const title = screen.getByRole("heading", { name: /no appointments yet/i });
        expect(title).toBeInTheDocument;
    });
});