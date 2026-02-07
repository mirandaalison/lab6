import { sum } from "./sum.js";

test("suma dos números correctamente", () => {
  expect(sum(2, 3)).toBe(5);
});
