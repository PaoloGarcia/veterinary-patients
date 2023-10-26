import { render, screen, within } from "@testing-library/react";
import ListAppointments, { ListAppointmentsProps } from "./ListAppointments";
import { TAppointment } from "../../types";
import { describe, expect, it, vi } from "vitest";

function createProps(additionalProps?: object): ListAppointmentsProps {
    return {
        appointments: [],
        onUpdateAppointments: vi.fn(),
        onDeleteAppointment: vi.fn(),
        ...additionalProps
    }
}

const appointments: TAppointment[] = [
    {
        id: "1",
        pet: "firulais",
        owner: "Paolo",
        date: new Date().toDateString(),
        time: "33:33",
        symptoms: "headache"
    },
    {
        id: "2",
        pet: "cachito",
        owner: "Paulina",
        date: new Date().toDateString(),
        time: "11:33",
        symptoms: "vomit"
    }
];

describe("Tests for ListAppointment", () => {
    it("renders component correctly", () => {
        render(<ListAppointments {...createProps()} />);
        const title = screen.getByRole("heading", { name: /no appointments yet/i });
        expect(title).toBeInTheDocument;
    });

    it("renders 2 appointments", () => {
        render(<ListAppointments {...createProps({ appointments })} />);
        const list = screen.getByRole("list");
        const appts = within(list).getAllByRole("listitem");
        expect(appts).toHaveLength(2);
    });
});