import Taro,{Component} from '@tarojs/taro'
import {AtSearchBar} from 'taro-ui'
import {View,Text} from '@tarojs/components'
import PropTypes from 'prop-types';


export default class CookList extends Component {

    constructor(props){
        super(props);
        this.state = {
            keyword:''
        }
    }

    render(){
        return (
            <View>
                <Text>cook-list</Text>
            </View>
        )
    }
}