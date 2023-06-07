import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Skeleton } from '../Skeleton/Skeleton';

import { AppImage } from './AppImage';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>;


const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    width: 'auto',
    height: 250,
    src: 'https://i.ytimg.com/vi/tXPUueXzmG8/maxresdefault.jpg',
    fallback: <Skeleton width={150} height={150} />,
    errorFallback: <Skeleton width={150} height={150} />
};




