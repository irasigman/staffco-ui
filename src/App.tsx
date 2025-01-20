import '@mantine/core/styles.css';
import { Router } from './Router';

import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
    '#f1f4ff',
    '#e3e5ee',
    '#c6cad5',
    '#a8acbc',
    '#8e93a6',
    '#7d8399',
    '#747b94',
    '#626981',
    '#565d75',
    '#48506a'
  ];

const theme = createTheme({
  colors: {
    myColor,
  }
});

export default function App() {
    return (
      <div className="h-screen">
        <MantineProvider theme={theme}>
          <Router />
        </MantineProvider>
      </div>
    );
  }
