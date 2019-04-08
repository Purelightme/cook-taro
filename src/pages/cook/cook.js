import Taro, {Component} from '@tarojs/taro'
import {AtCard, AtAvatar, AtActivityIndicator} from 'taro-ui'
import {Text, View, ScrollView} from '@tarojs/components'
import {host, key} from "../../utils/cook";
import './cook.css'

export default class Cook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cooks: [],
            page: 1,
            total: 0,
            refresh: true,
        }
    }

    componentWillMount() {

        Taro.request({
            url: host + '/common/categories/' + this.$router.params.category_id + '/cooks?page=' + this.state.page
        })
            .then((res) => {
                let old = this.state.cooks;
                this.setState({
                    cooks: [...old, ...res.data.data.data],
                    total: res.data.data.total,
                    refresh: false,
                })
            })
            .catch((err) => console.log(err))
    }

    showDetail(id) {
        Taro.navigateTo({
            url: '/pages/detail/detail?id=' + id
        })
    }

    onPullDownRefresh() {
        this.setState({
            cooks: [],
            total: 0,
            refresh: true
        });
        Taro.request({
            url: host + '/common/categories/' + this.$router.params.category_id + '/cooks?page=1'
        })
            .then((res) => {
                this.setState({
                    cooks: [...res.data.data.data],
                    total: res.data.data.total,
                }, () => {
                    this.setState({refresh: false})
                    Taro.stopPullDownRefresh()
                })
            })
            .catch((err) => console.log(err))
    }

    onReachBottom() {
        if (this.state.total === this.state.cooks.length) {
            return;
        }
        let currentPage = this.state.page;
        Taro.request({
            url: host + '/common/categories/' + this.$router.params.category_id + '/cooks?page=' + (currentPage + 1)
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


    render() {
        const cookCards = this.state.cooks.map((item) => {
            return (
                <View
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
            )
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
                    <Text>{'我暂时没有收集到'}</Text>
                    <Text className='title'>{this.$router.params.title}</Text>
                    <Text>{'分类下的菜谱...但是你可以上传一个😆'}</Text>
                </View>
            )
        }
        return (
            <View>
                <Text>{'所有'}</Text>
                <Text className='title'>{this.$router.params.title}</Text>
                <Text>{'的菜谱...共计：'}</Text>
                <Text>{this.state.total + '个'}</Text>
                <ScrollView
                    scrollY
                    // style='height: 50px;'
                    scrollWithAnimation
                    upperThreshold={5}
                    lowerThreshold={20}
                    // onScrollToUpper={this.refresh.bind(this)}
                    // onScrollToLower={this.loadMore.bind(this)}
                >
                    {cookCards}
                </ScrollView>
                <Text>{this.state.total !== 0 && this.state.total === this.state.cooks.length ? '我们是有底线的' : ''}</Text>
            </View>
        )

    }
}