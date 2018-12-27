import Taro, {Component} from '@tarojs/taro'
import {View, Text, Textarea} from '@tarojs/components'
import {AtTextarea, AtButton,} from 'taro-ui'

import './suggest.css'

export default class Suggest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '',
            suggests: [
                {
                    'content': '可以添加搜索菜谱的功能吗？',
                    'response': '谢谢反馈，明天发布新版本，新增菜谱搜索'
                },
                {
                    'content': '作者是做什么的？感觉666啊',
                    'response': '哈哈，程序员一枚，业余时间做这个玩玩'
                },
            ]
        }
    }

    onChange(content) {
        this.setState({
            content
        })
    }

    submit() {
        console.log(this.state.content)
    }

    render() {

        const conversation = this.state.suggests.map((item) => {
            return (
                <View>
                    <View className='right'><Text >{item.content}</Text></View>
                    <View className='left'><Text>{item.response}</Text></View>
                </View>
            )
        });

        return (
            <View>
                <View className={'conversation'}>
                    {conversation}
                </View>
                <AtTextarea
                    value={this.state.content}
                    onChange={this.onChange.bind(this)}
                    placeholder={'发表你的想法...'}
                    maxLength={300}
                />
                <AtButton
                    className={'submit'}
                    type={'primary'}
                    full
                    circle
                    onClick={this.submit.bind(this)}
                >提交</AtButton>
            </View>
        )
    }

}