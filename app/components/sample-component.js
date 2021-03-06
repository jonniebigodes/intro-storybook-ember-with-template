import Component from "@glimmer/component";

export default class SampleComponent extends Component {
  get randomizeEmoji() {
    const randomemojis = [
      "๐ณ ",
      "๐ง",
      "๐ธ",
      "๐น",
      "๐ฆ",
      "๐ ",
      "๐ท",
      "๐ฒ",
      "โ๏ธ",
      "โคต๏ธ",
    ];
    const random =
      randomemojis[
        Math.floor(Math.random() * (randomemojis.length - 1 - 0) + 1)
      ];
    return random;
  }
  get emojifyProp() {
    const emoji = this.randomizeEmoji;
    return `${emoji} ${this.args.someProperty} ${emoji}`;
  }
}
