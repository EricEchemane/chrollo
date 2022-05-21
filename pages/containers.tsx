import React from 'react';
import { Box, Row, Column, Center, Position, ResponsiveContainer } from '../styled_components/index';

export default function Containers() {
    return (<>
        <ResponsiveContainer
            direction={{ sm: 'column' }}
            crossAxisAlignment={{ sm: 'center' }}
            gap='2rem' m={2} className='fancy' p={2}>
            <Box> item 1 </Box>
            <Box> item 2 </Box>
            <Box> item 3 </Box>
            <Box> item 4 </Box>
            <Box> item 5 </Box>
            <Box> item 6 </Box>
        </ResponsiveContainer>
    </>);
}
