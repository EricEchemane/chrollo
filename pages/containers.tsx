import React from 'react';
import { Box, Row, Column, Center } from '../styled_components/index';

export default function Containers() {
    return (
        <Box p={2}>
            {/* <Box p={3} my={1} border='1px solid hsla(0, 100%, 100%, .2)' radius='1rem'> Box component </Box>
            <Row p={3} my={1} gap='2rem' border='1px solid hsla(0, 100%, 100%, .2)' radius='1rem'>
                <div> Row item </div>
                <div> Row item </div>
                <div> Row item </div>
            </Row>
            <Column p={3} my={1} gap='2rem' border='1px solid hsla(0, 100%, 100%, .2)' radius='1rem'>
                <div> Column item </div>
                <div> Column item </div>
                <div> Column item </div>
            </Column> */}
            <Center p={3} my={1} border='1px solid hsla(0, 100%, 100%, .2)' radius='1rem' gap='1rem'>
                <div> Column item </div>
                <div> Column item </div>
                <div> Column item </div>
            </Center>
        </Box>
    );
}
