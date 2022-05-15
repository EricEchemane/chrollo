import React from 'react';
import { Column } from 'chrollo-ui';

export default function Test() {
    return (
        <Column gap='1rem' p={2} mainAxisAlignment='center' crossAxisAlignment='center'>
            <div>item</div>
            <div>item</div>
            <div>item</div>
        </Column>
    );
}
