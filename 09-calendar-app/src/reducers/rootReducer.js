import {combineReducers} from 'redux';
import { authRecuder } from './authReducer';
import { calendarReducer } from './calendarReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    auth: authRecuder
});
