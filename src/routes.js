import React from 'react';
import Home from './components/Pages/Home/Home';
import TranslatePage from './components/Pages/Translate/TranslatePage';
import About from './components/Pages/About/About';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path:'/translate',
        exact : false,
        main: () => <TranslatePage />
    },
    {
        path:'',
        exact : false,
        main: () => <About />
    }
];

export default routes;