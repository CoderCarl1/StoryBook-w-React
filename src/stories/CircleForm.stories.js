import React from 'react';
import CircleForm from '../components/CircleForm';

export default {
    title: 'Circle Form',
    component: CircleForm
};

const Template = (args) => <CircleForm {...args} />;

export const Square = Template.bind({});

export const Big = Template.bind({});
Big.args = {
    width: 500,
    height: 500,
    radius: 50
};

export const Small = Template.bind({});
Small.args = {
    width: 50,
    height: 50,
    radius: 50
};
