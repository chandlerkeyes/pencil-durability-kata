export default class Pencil {
  constructor(durability = 50) {
    this.durability = durability;
    this.maxDurability = durability
  }

  getPencilDurability() {
    return this.durability;
  }

  getPencilLength() {
    return 49;
  }

  updatePencilDurability(character) {
    if (character !== ' ') {
      character === character.toLowerCase() ? this.durability -= 1 : this.durability -= 2;
    }
  }

  writeOnPaper(paper, textToWrite) {
    for (let i = 0; i < textToWrite.length; i++) {
      this.updatePencilDurability(textToWrite.charAt(i));
      this.durability >= 0 ? paper += textToWrite.charAt(i) : paper += " ";
    }

    return paper;
  }

  sharpen() {
    this.durability = this.maxDurability;
  }
};
