import { someAreEmpty } from "../helpers";

describe("Tests for someAreEmpty function", function () {
    it(
        "should return false if one or more non empty strings are passed in",
        function () {
            const name: string = "John";
            const lastname: string = "Doe";

            const isNotEmpty: boolean = someAreEmpty(name);
            const areNotEmpty: boolean = someAreEmpty(name, lastname);

            expect(isNotEmpty).toBe(false);
            expect(areNotEmpty).toBe(false);
        }
    );

    it("should return true if no arguments are passed in", function () {
        const areEmpty: boolean = someAreEmpty();
        expect(areEmpty).toBe(true);
    });

    it("should return true if some or all strings passed in are empty", function () {
        const isEmpty: boolean = someAreEmpty("");
        const areEmpty: boolean = someAreEmpty("", "John", "");

        expect(isEmpty).toBe(true);
        expect(areEmpty).toBe(true);
    });
});
