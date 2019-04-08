import Taro, {Component} from '@tarojs/taro'
import {Text, View,RichText} from '@tarojs/components'
import {AtCard, AtAvatar} from 'taro-ui'
import {host} from "../../utils/cook";
import DescRichText from '../../components/taroWxParse-master/DescRichText'

export default class Detail extends Component{

    constructor(props){
        super(props)
        this.state = {
            story:'',
        }
    }

    componentDidMount(){
        Taro.request({
            url: host + '/common/stories/' + this.$router.params.id
        })
            .then((res) => {
                this.setState({
                    story: res.data.data,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render(){
        return (
            <View>
                <Text>{this.state.content}</Text>
                <Text>{this.state.updated_at}</Text>
                <DescRichText desc={this.state.story.content}></DescRichText>
            </View>
        )
    }
}