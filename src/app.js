import Taro, {Component} from '@tarojs/taro'
import Index from './pages/index'
// import { Provider } from '@tarojs/redux'

// import configStore from './store'


import './app.css'

// const store = configStore()


// 如果需要在 h5 环境中开启 React Devtools
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
if (process.env.TARO_ENV === "weapp") {
    require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
    require("taro-ui/dist/h5/css/index.css")
}


class App extends Component {

    config = {
        pages: [
            'pages/index/index',
            'pages/login/login',
            'pages/cook/cook',
            'pages/detail/detail',
            'pages/search/search',
            'pages/my/suggest/suggest',
            'pages/my/suglist/suglist',
            'pages/my/collect/collect',
            'pages/flag/flag',
            'pages/story/detail',
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '点外卖不如做菜',
            navigationBarTextStyle: 'black',
            // enablePullDownRefresh: true
        }
    }

    componentDidMount() {
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    componentDidCatchError() {
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Index/>
        )
    }
}

Taro.render(<App/>, document.getElementById('app'))
