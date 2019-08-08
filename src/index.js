export default class Pencil {
  getCurrentDurability() {
    return 45;
  }

  writeOnPaper(paper, textToWrite) {
    return paper + textToWrite;
  }
};