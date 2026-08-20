import { test, expect } from "vitest";

function romanNumerals(number) {
  let romanNumber = "";
  if(number === 4) return "IV";
  for (let i = 0; i < number; i++) {
    romanNumber += "I";
  }

  return romanNumber;
}

test("1 in roman numerals is I", () => {
  expect(romanNumerals(1)).toBe("I");
});
test("2 in roman numerals is II", () => {
  expect(romanNumerals(2)).toBe("II");
});
test("3 in roman numerals is III", () => {
  expect(romanNumerals(3)).toBe("III");
});
test("4 in roman numerals is IV", () => {
  expect(romanNumerals(4)).toBe("IV");
});
test("5 in roman numerals is V", () => {
  expect(romanNumerals(5)).toBe("V");
});
