import CardContainer from '.';

export default {
  title: 'Containers',
  component: CardContainer,

} 

const Template= (args) => <CardContainer {...args} />

export const Primary = Template.bind({});
Primary.args = {
    title: "VSP Benefits are easy to use",
    children: "tetsts"
}