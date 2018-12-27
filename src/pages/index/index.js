import Taro, {Component} from '@tarojs/taro'
import {View, Text, Image, Button, Input} from '@tarojs/components'
import {AtSearchBar,} from 'taro-ui'
import Category from '../../components/category/category'

export default class Index extends Component {

    constructor(props){
        super(props);
        this.state = {
            keyword:''
        }
    }

    onChange(keyword){
        this.setState({
            keyword
        })
    }

    search(){
        Taro.navigateTo({
            url:'/pages/search/search?keyword='+this.state.keyword
        })
    }

    render() {
        return (
            <View>
                <AtSearchBar
                    value={this.state.keyword}
                    onChange={this.onChange.bind(this)}
                    onConfirm={this.search.bind(this)}
                />
                <Category/>
            </View>
        );
    }
}