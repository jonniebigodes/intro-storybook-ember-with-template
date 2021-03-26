import { hbs } from "ember-cli-htmlbars";

export default {
  title: "Sample Component",
  component: "sample-component",
};

const Template = (args) => ({
  template: hbs`<SampleComponent @someProperty={{this.someProperty}}/>`,
  context: args,
});

export const Default = Template.bind({});
Default.args = {
  someProperty: "I want cookies",
};
