import Taro, {Component} from '@tarojs/taro'
import {AtAccordion, AtAvatar, AtTextarea, AtNavBar,AtList,AtListItem,} from 'taro-ui'
import {View,Textarea,} from '@tarojs/components'
import {authorAvatar, host} from "../../../utils/cook";
import {getUserInfo} from "../../../storage";

export default class SugList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            lastPage: 0,
            data: [],
        }
    }

    componentWillMount() {
        let user = getUserInfo()
        if (!user) {
            Taro.navigateTo({
                url: '/pages/index/index?index=2'
            })
        }
        Taro.request({
            url: host + '/user/suggests',
            method: 'GET',
            header: {
                'Authorization': 'Bearer ' + user.access_token
            }
        })
            .then((res) => {
                if (res.data.errcode === 0) {
                    this.setState({
                        currentPage: res.data.data.current_page,
                        lastPage: res.data.data.last_page,
                        data: res.data.data.data
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    toFillSuggest() {
        Taro.redirectTo({
            url: '/pages/my/suggest/suggest'
        })
    }

    goBack() {
        Taro.navigateBack()
    }

    onShow() {
        let user = getUserInfo()
        if (!user) {
            Taro.navigateTo({
                url: '/pages/index/index?index=2'
            })
        }
        Taro.request({
            url: host + '/user/suggests',
            method: 'GET',
            header: {
                'Authorization': 'Bearer ' + user.access_token
            }
        })
            .then((res) => {
                if (res.data.errcode === 0) {
                    this.setState({
                        currentPage: res.data.data.current_page,
                        lastPage: res.data.data.last_page,
                        data: res.data.data.data
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    showResponse(text){
        if (!text){
            return;
        }
        Taro.showModal({
            title: '作者回复',
            content: text,
            showCancel: false
        })
    }

    render() {
        console.log(this.state.data)
        const suggests = this.state.data.map((item) => {
            return (
                <AtAccordion
                    title={item.content}
                >
                    <AtList hasBorder={false}>
                        <AtListItem title={item.response ? item.response : '作者努力工作中...请耐心等待回复'}
                                    onClick={this.showResponse.bind(this,item.response)}
                            />
                    </AtList>
                </AtAccordion>
            )
        })
        return (
            <View>
                <AtNavBar
                    color='#157EFF'
                    title='我的留言'
                    leftText='返回'
                    rightFirstIconType='edit'
                    onClickRgIconSt={this.toFillSuggest.bind(this)}
                    onClickLeftIcon={this.goBack.bind(this)}
                />
                <View>
                    {suggests}
                </View>
            </View>
        )
    }
}