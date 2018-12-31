import Taro from '@tarojs/taro'


export function storeUserInfo(user) {
    Taro.setStorageSync('user', user)
}

export function getUserInfo() {
    return Taro.getStorageSync('user')
}