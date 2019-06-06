
import React from 'react';
import Shows from './Shows';
// import ContextMovies from './ContextMovies';
// import MobxMovies from './MobxMovies';
// import AngularMovies from './AngularMovies';
// import VueMovies from './VueMovies';
// import ReduxMovies from './ReduxMovies';

const routes = [
    {
        path: '/shows',
        component: Shows,
        key: 'Shows'
    },
    {
        path: '/alina',
        component: () => {
            return (
                <div>aa</div>
            );
        },
        key: 'Whore'
    },
    {
        path: '/stam',
        component: function () {
            return (
                <div>
                    stam
                </div>
            );
        },
        key: 'Stam'
    }
    // {
    //     path: '/context',
    //     component: ContextMovies,
    //     key: 'ContextMovies'
    // },
    // {
    //     path: '/redux',
    //     component: ReduxMovies,
    //     key: 'redux'
    // },
    // {
    //     path: '/mobx',
    //     component: MobxMovies,
    //     key: 'MobxMovies'
    // },
    // {
    //     path: '/vue',
    //     component: VueMovies,
    //     key: 'vue'
    // },
    // {
    //     path: '/angular',
    //     component: AngularMovies,
    //     key: 'angular'
    // },
];

export default routes;
