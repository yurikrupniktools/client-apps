module.exports = {
    parser: 'babel-eslint',
    rules: {
        'indent': [2, 4],
        'comma-dangle': 0,
        'no-underscore-dangle': 1,
        'react/jsx-indent': [2, 4], // personal
        'react/jsx-indent-props': 0, // personal
        'jsx-a11y/anchor-is-valid': ['error', {
            'components': ['Link'],
            'specialLink': ['to'],
            'aspects': ['noHref', 'invalidHref', 'preferButton']
        }]
    },
    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js
    extends: ['airbnb'],
    plugins: ['jsdoc'],
    env: {
        jest: true
    }
};
