export default class Pencil {
  constructor(durability = 50, length) {
    this.durability = durability;
    this.maxDurability = durability
    this.length = length;
  }

  getPencilDurability() {
    return this.durability;
  }

  getPencilLength() {
    return this.length;
  }

  updatePencilDurability(character) {
    if (character !== ' ') {
      character === character.toLowerCase() ? this.durability -= 1 : this.durability -= 2;
    }
  }

  updatePencilLength() {
    this.length -= 1;
  }

  writeOnPaper(paper, textToWrite) {
    for (let i = 0; i < textToWrite.length; i++) {
      this.updatePencilDurability(textToWrite.charAt(i));
      this.durability >= 0 ? paper += textToWrite.charAt(i) : paper += " ";
    }

    return paper;
  }

  sharpen() {
    this.updatePencilLength();
    this.durability = this.maxDurability;
  }
};
