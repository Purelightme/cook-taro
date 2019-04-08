import Taro, {Component} from '@tarojs/taro'
import {Text, View} from '@tarojs/components'
import {AtCard, AtAvatar} from 'taro-ui'

import {host, key} from "../../utils/cook";
import './search.css'


export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cooks: [],
            total: 0,
            page: 0,
            refresh: true,
        }
    }

    componentWillMount() {
        Taro.request({
            url: host + '/common/cook/search?search' + this.$router.params.keyword
        })
            .then((res) => {
                if (res.data.errcode !== 0) {
                    Taro.showToast({
                        title: res.data.errmsg,
                        type: 'error'
                    })
                } else {
                    let old = this.state.cooks;
                    this.setState({
                        cooks: [...old, ...res.data.data.data],
                        total: res.data.data.total,
                        refresh: false,
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })

    }

    onReachBottom() {
        if (this.state.total === this.state.cooks.length) {
            return;
        }
        let currentPage = this.state.page;
        Taro.request({
            url: host + '/common/cook/search?search=' + this.$router.params.keyword + '&page=' + (currentPage + 1)
        })
            .then((res) => {
                let old = this.state.cooks;
                this.setState({
                    cooks: [...old, ...res.data.data.data],
                    total: res.data.data.total,
                    page: currentPage + 1
                })
            })
            .catch((err) => console.log(err))
    }


    showDetail(id) {
        Taro.navigateTo({
            url: '/pages/detail/detail?id=' + id
        })
    }

    render() {
        const cookCards = this.state.cooks.map((item) => {
            return <View
                className="cook-item"
                onClick={this.showDetail.bind(this, item.id)}
            >
                <AtCard
                    title={item.title}
                >
                    <AtAvatar
                        image={item.img}
                        size='normal'
                    />
                    {item.introduction}
                </AtCard>
            </View>
        });
        if (this.state.refresh === true) {
            return (
                <AtActivityIndicator
                    color='#13CE66'
                    content='努力加载中...'
                    className='refresh'
                />
            )
        } else if (this.state.total === 0) {
            return (
                <View>
                    <Text>{'我暂时没有收集到有关'}</Text>
                    <Text className='title'>{this.$router.params.keyword}</Text>
                    <Text>{'的菜谱...但是你可以上传一个😆'}</Text>
                </View>
            )
        }
        return (
            <View>
                <Text>{'所有'}</Text>
                <Text className='title'>{this.$router.params.keyword}</Text>
                <Text>{'...共计：'}</Text>
                <Text>{this.state.total + '个'}</Text>
                <ScrollView
                    scrollY
                    // style='height: 50px;'
                    scrollWithAnimation
                    upperThreshold={5}
                    lowerThreshold={20}
                    onScrollToUpper={this.refresh.bind(this)}
                    onScrollToLower={this.loadMore.bind(this)}
                >
                    {cookCards}
                </ScrollView>
                <Text>{this.state.total !== 0 && this.state.total === this.state.cooks.length ? '我们是有底线的' : ''}</Text>
            </View>
        )
    }
}