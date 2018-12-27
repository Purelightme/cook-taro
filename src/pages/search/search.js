import Taro, {Component} from '@tarojs/taro'
import {Text, View} from '@tarojs/components'
import {AtCard, AtAvatar} from 'taro-ui'

import {key} from "../../utils/cook";
import './search.css'


export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            empty: false
        }
    }

    componentWillMount() {
        Taro.request({
            url: 'https://apis.juhe.cn/cook/query.php?menu=' + this.$router.params.keyword + '&key=' + key
        })
            .then((res) => {
                if (res.data.error_code !== 0) {
                    this.setState({
                        empty: true
                    })
                } else {
                    this.setState({
                        list: res.data.result.data
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })

    }

    showDetail(id) {
        Taro.navigateTo({
            url: '/pages/detail/detail?id=' + id
        })
    }

    render() {
        const cookCards = this.state.list.map((item) => {
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
        if (this.state.empty) {
            return (
                <View>
                    <Text> 未找到</Text>
                    <Text className='red'>{this.$router.params.keyword}</Text>
                    <Text>相关的菜谱...</Text>
                </View>
            )
        }
        return (<View>{cookCards}</View>)
    }
}