import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image, Button, Input} from '@tarojs/components'
import {AtInput, AtForm, AtButton, AtDivider,} from 'taro-ui'
import './login.css'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            password: ''
        }
    }

    defaultProps = {
        phone: '',
        password: ''
    }


    config = {
        navigationBarTitleText: '首页'
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    render() {
        return (
            <View>
                <AtForm onSubmit={this.submit.bind(this)}>
                    <AtInput
                        title={"手机号"}
                        name={"phone"}
                        type={"phone"}
                        value={this.state.phone}
                        placeholder={"手机号"}
                        border
                        clear
                        onChange={this.changePhone.bind(this)}/>

                    <AtInput
                        border
                        error
                        title={"密码"}
                        name={"password"}
                        type={"password"}
                        value={this.state.password}
                        placeholder={"密码"}
                        onChange={this.changePassword.bind(this)}/>
                    <AtButton formType={"submit"}>确认</AtButton>
                </AtForm>
                <AtButton onClick={this.goBack.bind(this)}>返回首页</AtButton>
            </View>
        )
    }

    goBack() {
        Taro.redirectTo({
            url: '/pages/index/index'
        })
    }

    submit() {
        Taro.showModal({
            content: '手机号：' + this.state.phone + '密码：' + this.state.password,
            title: '登陆成功',
        })
    }

    test() {
        Taro.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
        })
    }

    getPhone(e) {
        console.log(e)
        Taro.showToast({
            title: e.detail,
            icon: 'success',
            duration: 2000
        })
    }

    getUserInfo(e) {
        console.log(e)
    }

    changePhone(phone) {
        this.setState({
            phone
        })
    }

    changePassword(password) {
        this.setState({
            password
        })
    }


}

