import * as actionTypes from './actionTypes';

export const add = (contactSection) => {
    return{
        type:actionTypes.ADD_CONTACT,
        payload:{
            contactSection:contactSection
        }
    }
}

export const update = (contactSection) => {
    return{
        type:actionTypes.UPDATE_CONTACT,
        payload:{
            contactSection:contactSection
        }
    }
}