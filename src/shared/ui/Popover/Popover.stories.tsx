import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { VStack } from '@/shared/ui';
import { Button } from '@/shared/ui';
import { Typography } from '@/shared/ui';

import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;


const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    trigger: <Button>Click me!</Button>,
    children: <VStack>
        <Typography>
            Text
        </Typography>
        <Typography>
            Text
        </Typography>
        <Typography>
            Text
        </Typography>
    </VStack>
};




