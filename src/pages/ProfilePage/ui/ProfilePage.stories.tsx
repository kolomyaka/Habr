import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/avatar.png';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;


const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'Kolomyaka',
            first_name: 'Nikita',
            last_name: 'Kolomoycev',
            age: 22,
            country: Country.Russia,
            currency: Currency.RUB,
            city: 'Saint-Petersburg',
            avatar: AvatarImg
        }
    }
})];

