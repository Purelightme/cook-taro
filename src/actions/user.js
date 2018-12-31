import {
    getUser,
    storeUser
} from '../constants/user'

export const getUserInfo = () => {
    return {
        type: getUser
    }
}
export const storeUserInfo = () => {
    return {
        type: storeUser
    }
}