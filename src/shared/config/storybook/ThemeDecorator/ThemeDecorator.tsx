import { Story } from '@storybook/react';

// eslint-disable-next-line boundaries/element-types
import { ThemeProvider } from '@/app/providers/ThemeProvider';

import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={'app'}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
