import Taro, {Component} from '@tarojs/taro'
import {AtSearchBar} from 'taro-ui'
import PropTypes from 'prop-types';


export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onChange(keyword) {
        this.setState({
            keyword
        })
    }

    render() {
        return (
            <AtSearchBar
                value={this.state.keyword}
                onChange={this.onChange.bind(this)}
                onConfirm={this.props.onConfirm.bind(this, this.state.keyword)}
            />
        )
    }
}