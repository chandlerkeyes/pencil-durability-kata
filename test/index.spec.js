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

  it("Writes text to paper that already has text written on it", () => {
    const pencil = new Pencil();
    const paper = "Hi, my name is Chandler ";
    const result = pencil.writeOnPaper(paper, "and I love to code!");

    expect(result).to.equal("Hi, my name is Chandler and I love to code!");
  });

  it(`Decreases pencil durability by 5 after writing hello with a durability of 50`, () => {
    const pencil = new Pencil(50);
    const paper = '';

    pencil.writeOnPaper(paper, "Hello")

    const result = pencil.getPencilDurability();

    expect(result).to.equal(45);
  });

  it('Decreases pencil durability by 10 after writing hello world with a durability of 50', () => {
    const pencil = new Pencil(50);
    const paper = '';

    pencil.writeOnPaper(paper, "hello world");

    const result = pencil.getPencilDurability();

    expect(result).to.equal(40);
  });
});
