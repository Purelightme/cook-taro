import Taro, {Component} from '@tarojs/taro'
import {AtButton, AtList, AtListItem, AtTag, AtCard, AtIcon,} from 'taro-ui'
import {Image, View, Text} from '@tarojs/components'
import {host, key} from "../../utils/cook";
import './detail.css'
import {getUserInfo} from "../../storage";


export default class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cook: {
                category_titles:''
            },
            collected: false
        }
    }

    componentWillMount() {
        let user = getUserInfo()
        Taro.request({
            url: host + '/common/cooks/' + this.$router.params.id,
            header: {
                'Authorization': 'Bearer ' + user.access_token
            }
        })
            .then((res) => {
                this.setState({
                    cook: res.data.data,
                    collected: res.data.data.collected
                }, () => {
                    console.log(this.state.cook);
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    collect(){
        let user = getUserInfo()
        Taro.request({
            url: host + '/user/cook-collects',
            method: 'POST',
            header: {
                'Authorization': 'Bearer ' + user.access_token
            },
            data: {
                cook_id: this.$router.params.id
            }
        }).then((res) => {
            if (res.data.errcode === 0){
                this.setState({
                    collected: true
                })
            } else {
                Taro.showToast({
                    type: 'error',
                    title: res.data.errmsg
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    unCollect(){
        let user = getUserInfo()
        Taro.request({
            url: host + '/user/cook-collects',
            method: 'DELETE',
            header: {
                'Authorization': 'Bearer ' + user.access_token
            },
            data: {
                cook_id: this.$router.params.id
            }
        }).then((res) => {
            if (res.data.errcode === 0){
                this.setState({
                    collected: false
                })
            } else {
                Taro.showToast({
                    type: 'error',
                    title: res.data.errmsg
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        const {category_titles, method, title, img} = this.state.cook;
        // const burden = this.state.cook.burden.split(';').map((item) => {
        //     const values = item.split(',')
        //     return (
        //         <AtListItem title={values[0]} extraText={values[1]}/>
        //     )
        // });
        const tags = category_titles.split(',').map((item) => {
            return (
                <AtTag
                    active
                    name={item}
                    type='success'
                    circle
                    size='small'
                    className='tags'
                >{item}</AtTag>
            )
        });
        const steps = method.map((item, index) => {
            return (
                <View className='cook-item'>
                    <AtCard title={'第' + (index + 1) + '步'}>
                        {item.img ? <Image src={item.img} className='step_img'/> : ''}
                        <View><Text>{item.step}</Text></View>
                    </AtCard>
                </View>
            )
        });
        return (
            <View>
                <Image
                    src={img}
                    style={{width: '100%', height: '200px'}}
                />
                <View className='header'>
                    <Text className='title'>{title}</Text>
                </View>
                {this.collected ? (
                    <View onClick={this.unCollect.bind(this)} className='header'>
                        <AtIcon value='star-2' size='30' color='#FFC82C'></AtIcon>
                    </View>
                ) : (
                    <View onClick={this.collect.bind(this)} className='header'>
                        <AtIcon value='star' size='30' color='#E5E5E5'></AtIcon>
                    </View>
                )}
                <View>
                    {tags}
                </View>
                {/*<Text>用料：</Text>*/}
                {/*<AtList>*/}
                {/*{burden}*/}
                {/*</AtList>*/}
                <Text className='title'>做法：</Text>
                <AtList>
                    {steps}
                </AtList>
            </View>
        );
    }
}