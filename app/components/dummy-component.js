import Component from "@glimmer/component";

export default class DummyComponent extends Component {
  get boopiefyPropA() {
      console.log(this.args.propertyA)
    if (this.args.propertyA.toLowerCase().startsWith('oingo')) {
      return `boop`;
    }
    return this.args.propertyA;
  }
}
