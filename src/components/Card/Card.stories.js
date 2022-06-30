
import { Card } from './Card';
import { HeartIcon } from '../../assets/icons/Icons';

export default {
  title: 'Card',
  component: Card,

} 

const Template= (args) => <Card {...args} />

export const CTACard = Template.bind({});
CTACard.args = {
  title: 'Review your benefits',
  text: "Review your benefits with VSP network doctors",
  icon: <HeartIcon />,
  buttonType: "primary",
  buttonLabel: "View Benefits",
  disabled: false,
  


};
