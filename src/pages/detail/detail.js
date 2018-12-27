import Taro, {Component} from '@tarojs/taro'
import {AtButton, AtList, AtListItem,AtTag,AtCard} from 'taro-ui'
import {Image, View, Text} from '@tarojs/components'
import {key} from "../../utils/cook";


export default class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cook: ''
        }
    }

    componentWillMount() {
        Taro.request({
            url: 'https://apis.juhe.cn/cook/queryid?key=' + key + '&id=' + this.$router.params.id
        })
            .then((res) => {
                this.setState({
                    cook: res.data.result.data[0]
                }, () => {
                    console.log(this.state.cook);
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const burden = this.state.cook.burden.split(';').map((item) => {
            const values = item.split(',')
            return (
                <AtListItem title={values[0]} extraText={values[1]}/>
            )
        });
        const tags = this.state.cook.tags.split(';').map((item) => {
            return (
                <AtTag
                    active
                    name={item}
                    type='success'
                    circle
                    size='small'
                >{item}</AtTag>
            )
        });
        const steps = this.state.cook.steps.map((item,index) => {
            return (
                <View className='cook-item'>
                <AtCard title={'第'+(index+1)+'步'}>
                    <Image src={item.img}/>
                    <Text>{item.step}</Text>
                </AtCard>
                </View>
            )
        });
        return (
            <View>
                <Image
                    src={this.state.cook.albums[0]}
                    style={{width: '100%', height: '200px'}}
                />
                <Text>{this.state.cook.title}</Text>
                <View>
                    {tags}
                </View>
                <Text>用料：</Text>
                <AtList>
                    {burden}
                </AtList>
                <Text>做法：</Text>
                <AtList>
                    {steps}
                </AtList>
            </View>
        );
    }
}