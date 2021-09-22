import {combineReducers} from 'redux';
import documentReducer from './documentReducer';
import contactReducer from './contactReducer';
import educationReducer from './educationReducer';
import { firestoreReducer } from 'react-redux-firebase';
import { firebaseReducer } from 'react-redux-firebase';
const rootReducer = combineReducers({
    firestore : firestoreReducer,
    firebase : firebaseReducer,
    document:documentReducer,
    contact : contactReducer,
    education : educationReducer
})

export default rootReducer