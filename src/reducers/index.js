import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import notificationsReducer from './notificationReducer';

const rootReducer = combineReducers({
  account: accountReducer,
  notifications: notificationsReducer,
});

export default rootReducer;
