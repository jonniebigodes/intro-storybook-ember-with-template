import { hbs } from "ember-cli-htmlbars";

export default {
  title: "Test Component",
  component: "dummy-component",
};

const Template = (args) => ({
  template: hbs`<DummyComponent @propertyA={{this.propertyA}}/>`,
  context: args,
});

export const Default = Template.bind({});
Default.args = {
  propertyA: "Oingo boingo",
};

export const OneOtherExample = Template.bind({});
OneOtherExample.args = {
  propertyA: "Something Else",
};
