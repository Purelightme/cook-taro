import {getUser} from '../constants/user.js'
import {getUserInfo,} from '../storage/index'

const INITIAL_STATE = {
    user: null
}

export default function user (state = INITIAL_STATE, action) {
    switch (action.type) {
        case getUser:
            let user = getUserInfo()
            return {
                ...state,
                user: user
            }
        default:
            return state
    }
}