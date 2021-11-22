import { createTheme } from '@mui/material/styles';

export const THEME = createTheme({ // Setting theme for slider and other UI tools
    palette: {
        primary: {
            light: '#8e99f3',
            main: '#5c6bc0',
            dark: '#26418f',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#8eacbb',
            main: '#607d8b',
            dark: '#34515e',
            contrastText: '#000000',
        },
    },
});

export const LEVELS = [ // Setting values for slider
    {
        value: 2,
        label: '2px',
    },
    {
        value: 4,
        label: '4px',
    },
    {
        value: 6,
        label: '6px',
    },
    {
        value: 8,
        label: '8px',
    },
    {
        value: 10,
        label: '10px',
    },
    {
        value: 12,
        label: '12px',
    },
    {
        value: 14,
        label: '14px',
    },
    {
        value: 16,
        label: '16px',
    },
];
