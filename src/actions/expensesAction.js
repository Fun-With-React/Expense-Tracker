import {ADD_EXP} from '../constants'

export const addExpense = (amount) => {
    return {
        type: ADD_EXP,
        payload: amount
    }
}

