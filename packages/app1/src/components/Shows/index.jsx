import React from 'react';
// import PillButton from '@krupnik/pill-button'; // good
import { PillButton } from '@krupnik/components';
// import { PillButton as Pill } from 'custom-react';
// import Header from '../Example/Header';
// import { BaseButton } from 'custom-react/dist/index';
// import { PillButton } from 'custom-react/dist/cmj/index';
// import BaseButton from 'custom-react/dist/BaseButton';
// import PillButton from 'custom-react/dist/PillButton';
// import ButtonGroup from 'custom-react/dist/ButtonGroup';
// import DataGraph from 'custom-react/dist/DataGraph';
// import Pill from 'pill-button';
// import { PillButton } from 'custom-react';
// import PillButton from 'custom-react/dist/PillButton';
// import ButtonGroup from 'custom-react/dist/ButtonGroup';
// import D from 'custom-react/dist/BaseButton';
// import DataGraph from 'custom-react/dist/DataGraph';
// import { BaseButton, PillButton, ButtonGroup, DataGraph } from 'custom-react/dist/cjs/main';
// import { BaseButton, PillButton } from 'custom-react'; // 2.23 kb main.esm.js
// import { BaseButton, PillButton,  } from 'custom-react/dist/main.cjs'; // 2.23 kb main.esm.js
// import {BaseButton, PillButton} from 'custom-react/dist/main.cjs'; // 2.23 kb main.esm.js
// import { BaseButton, PillButton } from 'custom-react/dist/main.umd'; // 3.44 kb
// import Base from 'custom-react/dist/main.esm'; // 2.23 kb

// combined 12.94 kb - to big - fails webpack
// import BaseButton from 'custom-react/dist/BaseButton'; // 5.62 kb
// import PillButton from 'custom-react/dist/PillButton'; // 7.32 kb

// 1.73kb
// import PillButton from 'custom-react/dist/PillButton.esm'; // 990 b
// import BaseButton from 'custom-react/dist/BaseButton.esm'; // 408 b

// 1

const Shows = () => (
    <div>
        app1
        <PillButton onClick={() => {}}>pill</PillButton>
    </div>
);

export default Shows;
