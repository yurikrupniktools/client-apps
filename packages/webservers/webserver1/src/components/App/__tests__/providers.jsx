import { render, cleanup } from '@testing-library/react';
import React from 'react';
import Providers from '../providers';
// import providers from '../../../api/providers';
import { Provider } from '../../contexts/themes';

const {
    describe,
    it,
    afterEach
} = global;

afterEach(cleanup);

describe('providers', () => {
    it('renders three <Providers /> components', () => {
        render(
            <Providers providers={[Provider]}>
                <div>
                    asd
                </div>
            </Providers>
        );
    });
});
