import React from 'react';
import { Box, Row } from '../styled_components/index';

export default function Containers() {
    return (
        <Box p={2}>
            <Box p={3}> hello </Box>
            <Row p={3} gap='2rem' mainAxisAlignment='center' crossAxisAlignment='center' border='1px solid white'>
                <div> 1 </div>
                <div> 2 </div>
                <div> 3 </div>
            </Row>
        </Box>
    );
}
