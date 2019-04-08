import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image, Button, Input} from '@tarojs/components'
import {AtSearchBar, AtTabBar} from 'taro-ui'
import Category from '../../components/category/category'
import SearchBar from '../../components/search-bar/search-bar'
import MyIndex from '../my/index/my_index'
import Explore from '../explore/explore'
import './index.css'

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
    }

    componentWillMount(){
        if (this.$router.params.index){
            this.setState({
                current:this.$router.params.index
            })
        }
    }

    handleClick(current) {
        console.log(current);
        this.setState({
            current
        })
    }

    search(keyword) {
        Taro.navigateTo({
            url: '/pages/search/search?keyword=' + keyword
        })
    }


    render() {
        let content;
        if (this.state.current === 0) {
            content = (
                <View className='content'>
                    <SearchBar
                        onConfirm={this.search}
                    />
                    <Category/>
                </View>
            )
        } else if (this.state.current === 1) {
            content = (
                <Explore/>
            )
        } else {
            content = (
                <MyIndex/>
            )
        }
        return (
            <View>
                {content}
                <AtTabBar
                    fixed
                    tabList={[
                        {title: '菜谱', iconType: 'bullet-list'},
                        {title: '发现', iconType: 'search'},
                        {title: '我的', iconType: 'user'}
                    ]}
                    onClick={this.handleClick.bind(this)}
                    current={this.state.current}
                />
            </View>
        );
    }
}