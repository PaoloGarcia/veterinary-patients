import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {vi, expect, describe, it } from "vitest";
import NewAppointment from "./NewAppointment";

function createProps(extraProps?: object) {
    return {
        onCreateAppointment: vi.fn(),
        ...extraProps
    };
}

describe("Tests for NewAppointment component", () => {
    it("renders component correctly initial stage, fields empty", () => {
        render(<NewAppointment {...createProps()} />);
        const pet = screen.getByLabelText(/pet name/i, { selector: "input" });
        const owner = screen.getByLabelText(/pet owner name/i, { selector: "input" });
        const date = screen.getByLabelText(/date/i, { selector: "input" });
        const time = screen.getByLabelText(/time/i, { selector: "input" });
        const symptoms = screen.getByLabelText(/symptoms/i, { selector: "textarea" });

        expect(pet).toBeEmpty();
        expect(owner).toBeEmpty();
        expect(date).toBeEmpty();
        expect(time).toBeEmpty();
        expect(symptoms).toBeEmpty();
    });

    it("shows error message when one or more of the inputs are empty and try to submit", () => {
        render(<NewAppointment {...createProps()} />); // initial stage
        const submitBtn = screen.getByRole("button", { name: "Create Appointment" });
        act(() => {
            userEvent.click(submitBtn);
        });
        const errorMessage = screen.getByText("All fields are required", { selector: "p" });
        expect(errorMessage).toBeInTheDocument;
    });
});
