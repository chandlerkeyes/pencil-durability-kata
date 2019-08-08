export default class Pencil {
  constructor(pencilDurability = 50) {
    this.pencilDurability = pencilDurability;
  }

  getPencilDurability() {
    return this.pencilDurability;
  }

  updatePencilDurability(character) {
    if (character !== ' ') {
      if (character === character.toLowerCase()) {
        this.pencilDurability -= 1;
      } else {
        this.pencilDurability -= 2;
      }
    }
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
