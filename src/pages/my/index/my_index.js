import Taro, {Component} from '@tarojs/taro'
import {AtButton, AtAvatar, AtList, AtListItem,} from 'taro-ui'
import {View, Text,} from '@tarojs/components'
import {storeUserInfo, getUserInfo} from '../../../storage/index'

import './my_index.css'
import {host} from "../../../utils/cook";

if (process.env.TARO_ENV === "weapp") {
    require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
    require("taro-ui/dist/h5/css/index.css")
}

export default class MyIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            user: null,
        }
    }

    login(e) {
        Taro.login({
            success: (res) => {
                let code = res.code
                // Taro.request({
                //     url: host + '/user/auth/login',
                //     method: 'POST',
                //     data: {
                //         code: code,
                //         iv: e.detail.iv,
                //         rowData: e.detail.encryptedData
                //     },
                //     header:{
                //         'X-Requested-With':'XMLHttpRequest'
                //     }
                // })
                let url = host + '/user/auth/login';
                Taro.request({
                    url: url,
                    method: 'POST',
                    data: {
                        code: code,
                        iv: e.detail.iv,
                        rowData: e.detail.encryptedData
                    },
                })
                    .then((res) => {
                        if (res.data.errcode === 0) {
                            storeUserInfo(res.data.data)
                            Taro.showToast({
                                title: '登录成功'
                            })
                            this.setState({
                                isLogin: true,
                                user: res.data.data
                            })
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        })
    }


    toSuggest() {
        Taro.navigateTo({
            url: '/pages/my/suglist/suglist'
        })
    }

    toCollect(){
        Taro.navigateTo({
            url: '/pages/my/collect/collect'
        })
    }

    todo() {
        Taro.showToast({
            title: '敬请期待',
            icon: 'none'
        })
    }

    componentWillMount() {
        let user = getUserInfo()
        if (user) {
            this.setState({
                isLogin: true,
                user: user
            })
        }
    }

    render() {
        if (this.state.isLogin === false) {
            return (
                <AtButton
                    type='primary'
                    full
                    openType='getUserInfo'
                    onGetUserInfo={this.login.bind(this)}
                >{'登录'}</AtButton>
            )
        }
        return (
            <View>
                <View className='at-row header'>
                    <View className='avatar'>
                        <AtAvatar
                            size='large'
                            circle
                            image={this.state.user.user.avatar}
                            className='avatar-img'
                        />
                    </View>
                    <View className='nickname'>
                        <Text>{this.state.user.user.nickname}</Text>
                    </View>
                </View>
                <View
                    className='list'
                >
                    <AtList>
                        <AtListItem
                            title='我的收藏'
                            arrow='right'
                            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                            onClick={this.toCollect.bind(this)}
                        />
                        <AtListItem
                            title='我的上传'
                            note='我上传的菜谱'
                            arrow='right'
                            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                            onClick={this.todo.bind(this)}
                        />
                        <AtListItem
                            title='建议反馈'
                            note='发表意见'
                            extraText='建议功能'
                            arrow='right'
                            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                            onClick={this.toSuggest.bind(this)}
                        />
                    </AtList>
                </View>
            </View>
        )

    }

}