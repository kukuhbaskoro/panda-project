import * as React from 'react';
import Button from '@mui/material/Button';

export default function Buttons(props) {
    return (
        <Button
            variant={props.variant}
            onClick={props.onClick}
        >
            {props.label}
        </Button>
    );
}
