export default class Pencil {
  constructor(durability = 50, length = 50) {
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
    if (this.length) {
      this.updatePencilLength();
      this.durability = this.maxDurability;
    }
  }

  erase(paper, text) {
    const charactersOnPaper = paper.split('');
    const indexOfWord = paper.lastIndexOf(text) + text.length - 1;

    for (let i = 0; i < text.length; i++) {
      charactersOnPaper[indexOfWord - i] = " ";
    }

    return charactersOnPaper.join('');
  }
};
