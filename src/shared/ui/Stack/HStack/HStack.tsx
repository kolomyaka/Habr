import { memo } from 'react';

import { Flex, FlexProps } from '@/shared/ui/Stack';

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = memo((props: HStackProps) => {

    return (
        <Flex direction={'row'} {...props} />
    );
});


