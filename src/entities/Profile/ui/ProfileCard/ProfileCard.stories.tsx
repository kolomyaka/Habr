import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ValidateProfileError } from '@/features/EditableProfileCard';

import type { Country } from '@/entities/Country';
import type { Currency } from '@/entities/Currency';

import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;


const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        id: '1',
        username: 'Kolomyaka',
        first_name: 'Nikita',
        last_name: 'Kolomoycev',
        age: 22,
        country: 'Russia' as Country.Russia,
        currency: 'RUB' as Currency.RUB,
        city: 'Saint-Petersburg',
        avatar: 'https://gravatar.com/avatar/d79a01fc6611be42996b4f3a6994?s=400&d=monsterid&r=x'
    }
};

export const withErrors = Template.bind({});
withErrors.args = {
    error: ValidateProfileError.SERVER_ERROR
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true
};



