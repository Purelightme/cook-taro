import Taro, {Component} from '@tarojs/taro'
import {View, Text,ScrollView} from '@tarojs/components'
import {getUserInfo} from "../../../storage";
import {host} from "../../../utils/cook";
import './collect.css'
import { AtList, AtListItem } from "taro-ui"

export default class Collect extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cooks: [],
            page: 1,
            refresh: true,
            total: 0
        }
    }

    componentWillMount() {
        let user = getUserInfo()
        Taro.request({
            url: host + '/user/cook-collects',
            header: {
                'Authorization':'Bearer ' + user.access_token
            }
        }).then((res) => {
            if (res.data.errcode === 0) {
                this.setState({
                    cooks: res.data.data.data,
                    refresh: false,
                    total: res.data.data.total,
                })
            } else {
                Taro.showToast({
                    type: 'error',
                    title: res.data.errmsg
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    detail(id){
        Taro.navigateTo({
            url: '/pages/detail/detail?id=' + id
        })
    }

    onPullDownRefresh() {
        let nextPage = this.state.page + 1;
        Taro.request({
            url: host + '/user/cook-collects?page=' + nextPage
        })
            .then((res) => {
                this.setState({
                    cooks: [...this.state.cooks,...res.data.data.data],
                    total: res.data.data.total,
                    page: nextPage,
                })
            })
            .catch((err) => console.log(err))
    }

    render() {
        let {cooks, page, refresh, total} = this.state
        if (total === 0) {
            let content = '天啦噜，我竟然还没有收藏过菜谱'
        } else if (total < 10) {
            let content = '天啦噜，我竟然只收藏了' + total + '个菜谱'
        } else {
            let content = '天啦噜，我已经默默收藏了' + total + '个菜谱了'
        }
        const list = cooks.map(item => {
            return (
                <AtListItem
                    title={item.title}
                    arrow='right'
                    onClick={this.detail.bind(this,item.id)}
                />
            )
        })
        return (
            <View>
                <View className='header'>
                    <Text>{content}</Text>
                </View>
                <View className='list'>
                    <ScrollView
                        scrollY
                        // style='height: 50px;'
                        scrollWithAnimation
                        upperThreshold={5}
                        lowerThreshold={20}
                    >
                        <AtList>
                            {list}
                        </AtList>
                    </ScrollView>
                </View>
            </View>
        )
    }

}