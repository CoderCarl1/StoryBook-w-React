import React from 'react';
import ResizableCircle from '../components/ResizableCircle';

export default {
    title: 'Resizable Circle',
    component: ResizableCircle
};

const Template = (args) => <ResizableCircle {...args} />;

export const Square = Template.bind({});
Square.args = {
    width: 150,
    height: 150,
    radius: 0
};

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
