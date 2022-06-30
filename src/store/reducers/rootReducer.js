import { combineReducers } from 'redux';

import eventsReducer from './event';
import popupReducer from './popup';

export default combineReducers({
  events: eventsReducer,
  popup: popupReducer,
});
