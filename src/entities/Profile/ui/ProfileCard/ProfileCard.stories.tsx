import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile';

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
        country: Country.Russia,
        currency: Currency.RUB,
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



