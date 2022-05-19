import React from 'react';
import { Box, Row, Column, Center, Position } from '../styled_components/index';

export default function Containers() {
    return (<>
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
            {/* <Center p={3} my={1} border='1px solid hsla(0, 100%, 100%, .2)' radius='1rem' gap='1rem'>
                <div> Column item </div>
                <div> Column item </div>
                <div> Column item </div>
            </Center> */}
            {/* <Box position='relative'>
                <Position> hello </Position>
                <Position right={0}> <Box> should be right </Box> </Position>
                <Position bottom={0}> hello </Position>
            </Box> */}
        </Box>

        <Box p={3} m={3} className='matte_glass_colored'>
            content matt glass colored
        </Box>
        <Box p={3} m={3} className='matte_glass'>
            content
        </Box>
    </>);
}
