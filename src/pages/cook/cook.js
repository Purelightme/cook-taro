import Taro, {Component} from '@tarojs/taro'
import {AtCard, AtAvatar} from 'taro-ui'
import {Text, View, ScrollView} from '@tarojs/components'
import {key} from "../../utils/cook";
import './cook.css'

export default class Cook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cooks: []
        }
    }

    componentWillMount() {

        Taro.request({
            url: 'https://apis.juhe.cn/cook/index?key=' + key + '&cid=' + this.$router.params.cid + '&rn=30'
        })
            .then((res) => {
                this.setState({
                    cooks: res.data.result.data
                })
            })
            .catch((err) => console.log(err))
    }

    showDetail(id) {
        Taro.navigateTo({
            url: '/pages/detail/detail?id=' + id
        })
    }

    refresh(){

    }

    loadMore(){
        Taro.showToast({
            title: '暂无更多',
            icon: 'success',
            duration: 2000
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
                        image={item.albums[0]}
                        size='normal'
                    />
                    {item.imtro}
                </AtCard>
            </View>
        });
        return (
            <View>
                <Text>{'所有' + this.$router.params.value + '...'}</Text>
                <ScrollView
                    scrollY
                    style='height: 100%;'
                    scrollWithAnimation
                    upperThreshold='0'
                    lowerThreshold='20'
                    onScrollToUpper={this.refresh.bind(this)}
                    onScrollToLower={this.loadMore.bind(this)}
                >
                    {cookCards}
                </ScrollView>
            </View>
        );
    }
}