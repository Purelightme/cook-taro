import Taro, {Component} from '@tarojs/taro'
import {AtButton, AtAvatar, AtList, AtListItem,} from 'taro-ui'
import {View, Text,} from '@tarojs/components'

import './my_index.css'

export default class MyIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: true
        }
    }

    login(e) {
        console.log(e)
    }

    toSuggest(){
        Taro.navigateTo({
            url:'/pages/my/suggest/suggest'
        })
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
                <View className='header'>
                    <AtAvatar
                        size='large'
                        image="https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqwFkeesElOQJIZGYLmLx3iaIHe396NqzM3txpWb5sgo2b85Emc9uxmCE0e2Rxj2ibibWGy3pzC1h3GQ/132"
                    />
                    <Text>{'Purelightme'}</Text>
                </View>
                <AtList>
                    <AtListItem
                        title='我的收藏'
                        arrow='right'
                        thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                    />
                    <AtListItem
                        title='我的上传'
                        note='我上传的菜谱'
                        arrow='right'
                        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
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
        )

    }

}