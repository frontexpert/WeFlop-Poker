import { all, fork } from 'redux-saga/effects';

import application from './application';

export default function* root() {
    yield all([fork(application)]);
}
