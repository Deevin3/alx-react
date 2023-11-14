import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

Test("returns correct year", () => {
    expect(getFullYear()).toBe(2023);
});

test("correct footer", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("correct string", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
})