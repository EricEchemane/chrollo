import React from 'react';
import { Box, Position } from 'chrollo-ui';

export default function Test() {
    return (
        <Box p={2} position='relative'>
            <Position> hello </Position>
            <Position right={0}> should be on the right </Position>
            <Position bottom={0}> bottom </Position>
        </Box>
    );
}
