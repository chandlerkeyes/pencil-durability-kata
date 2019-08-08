export default class Pencil {
  constructor(pencilDurability = 50) {
    this.pencilDurability = pencilDurability;
  }

  getPencilDurability() {
    return this.pencilDurability;
  }

  updatePencilDurability(character) {
    character !== " " ? this.pencilDurability -= 1 : this.pencilDurability;
  }

  writeOnPaper(paper, textToWrite) {
    for (let i = 0; i < textToWrite.length; i++) {
      this.updatePencilDurability(textToWrite.charAt(i));

      if (this.pencilDurability >= 0) {
        paper = paper + textToWrite.charAt(i);
      }
    }

    return paper;
  }
};
