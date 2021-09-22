import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';

const contactReducer = (state=initialState.contactSection,action) =>{
    switch(action.type){
        case actionTypes.ADD_CONTACT : 
            return {...action.payload.contactSection}
        case actionTypes.UPDATE_CONTACT : 
            return {...action.payload.contactSection}
        default : return state
    }
}

export default contactReducer;