import { expect } from "chai"
import Pencil from "../src/";

describe("Pencil Durability Kata Tests", () => {
  it("Writes Hello World! on a blank piece of paper", () => {
    const pencil = new Pencil();
    const result = pencil.writeOnPaper("", "Hello World!");

    expect(result).to.equal("Hello World!");
  });

  it("Writes Goodbye! on a blank piece of paper", () => {
    const pencil = new Pencil();
    const result = pencil.writeOnPaper("", "Goodbye!");

    expect(result).to.equal("Goodbye!");
  });
});
