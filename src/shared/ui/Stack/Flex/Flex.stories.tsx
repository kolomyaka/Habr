import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Flex } from './Flex';


export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: (
            <>
                <div>flex</div>
                <div>flex</div>
                <div>flex</div>
                <div>flex</div>
                <div>flex</div>
            </>
        )
    }
} as ComponentMeta<typeof Flex>;


const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};

export const FlexColumn = Template.bind({});
FlexColumn.args = {
    direction: 'column',
};



