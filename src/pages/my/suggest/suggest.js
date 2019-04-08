import Taro, {Component} from '@tarojs/taro'
import {View, Text, Textarea} from '@tarojs/components'
import {AtButton,} from 'taro-ui'

import './suggest.css'
import {getUserInfo} from "../../../storage/index";
import {host} from "../../../utils/cook";

export default class Suggest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
    }

    onChange(e) {
        this.setState({
            content: e.detail.value
        })
    }

    submit() {
        let user = getUserInfo()
        console.log(user)
        if (!user) {
            Taro.showToast({
                title: '请先登录',
                icon:'none'
            })
        }
        if (!this.state.content){
            Taro.showToast({
                title:'请先填写内容',
                icon:'none'
            })
            return;
        }
        Taro.request({
            url: host + '/user/suggests',
            method: 'POST',
            header: {
                'Authorization': 'Bearer '+user.access_token
            },
            data:{
                content:this.state.content
            }
        })
            .then((res) => {
                if ((res.data.errcode === 0)){
                    this.setState({
                        content:''
                    })
                    Taro.showToast({
                        title:'留言成功'
                    })
                    setTimeout(function(){
                        Taro.navigateTo({
                            // url:'/pages/index/index?index=2'
                            url:'/pages/my/suglist/suglist'
                        })
                    },2000)
                }else {
                    Taro.showToast({
                        title:res.data.errmsg
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {


        return (
            <View>
                <Textarea
                    className='content'
                    value={this.state.content}
                    onInput={this.onChange.bind(this)}
                    placeholder={'发表你的想法...'}
                    maxlength={2000}
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