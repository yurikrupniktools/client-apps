import React from 'react';

import PillButton from '@krupnik/pill-button'; // good
// import List from '@krupnik/list'; // eslint-disable-line
// import { PillButton } from 'custom-react';
// import PillButton from 'custom-react/dist/PillButton';

// import { PillButton } from '@krupnik/components';
// import PillButton from '@krupnik/components/dist/PillButton';

// import request from '../../api/request';
import axios from 'axios';
// import { PillButton as Pill, ButtonGroup } from 'custom-react'; // needs d3
import { host, port, usersEndpoint } from '../../config';
import styles from './styles.scss';

const api = {
    getData(params, cb) {
        return axios.get(`${host}:${port}/api/users`, { params })
            .then((res) => {
                // console.log('res', res);
                cb(res.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    },
    getDataNoHost(params, cb) {
        return axios.get('/api/users', { params })
            .then((res) => {
                // console.log('res', res);
                cb(res.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    },
    getDataDestHost(params, cd) {
        return axios.get(`${usersEndpoint}/api/users`, { params })
            .then((res) => {
                // console.log('res', res);
                cd(res.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    }
};

class Shows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        this.getData = this.getData.bind(this);
        this.setData = this.setData.bind(this);
        this.getDataNoHost = this.getDataNoHost.bind(this);
        this.getDataDestHost = this.getDataDestHost.bind(this);
    }

    setData(data) {
        this.setState({ data });
    }

    getData() {
        return api.getData({}, this.setData);
    }

    getDataNoHost() {
        return api.getDataNoHost({}, this.setData);
    }

    getDataDestHost() {
        return api.getDataDestHost({}, this.setData);
    }


    render() {
        const { data } = this.state;
        console.log('this.data', data); // eslint-disable-line

        return (
            <div>
                <h2 className={styles.root}>
                    app1
                </h2>
                <button type="button" onClick={this.getData}>getData</button>
                <button type="button" onClick={this.getDataNoHost}>getData getDataNoHost</button>
                <button type="button" onClick={this.getDataDestHost}>getData getDataDestHost</button>
                <PillButton type="button" onClick={this.getData}>getData with Pillar button</PillButton>
                <div>
                    <h2>new List should be here</h2>
                </div>
                <h2>old list</h2>
                {Array.isArray(data) && data.map(user => (
                    <div key={user._id}>{user.name}</div> // eslint-disable-line
                ))}
            </div>
        );
    }
}

export default Shows;
