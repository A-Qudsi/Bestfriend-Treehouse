import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import filters from './filters_reducer';

export default combineReducers({ 
    modal: modalReducer,
    filters
    
});