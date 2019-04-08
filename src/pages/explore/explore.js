import Taro, {Component} from '@tarojs/taro'
import {View, Image, Map, Button, Textarea, Text, ScrollView} from '@tarojs/components'
import {Swiper, SwiperItem, AtCard, AtButton, AtInput, AtAvatar, AtList, AtListItem,} from 'taro-ui'
import {host, websocketHost, websocketPort} from "../../utils/cook";
import {getUserInfo} from "../../storage";

export default class Explore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            banners: [],
            stories: [],
            page: 1,
            total: 0,
            refresh: true,
        };
    }

    jump(path) {
        Taro.navigateTo({
            url: path
        })
    }

    componentWillMount() {
        Taro.request({
            url: host + '/common/banners'
        }).then((res) => {
            this.setState({
                banners: res.data.data
            })
        }).catch((err) => {
            console.log(err)
        });
        //请求故事
        Taro.request({
            url: host + '/common/stories?page=' + this.state.page
        })
            .then((res) => {
                let old = this.state.stories;
                this.setState({
                    stories: [...old, ...res.data.data.data],
                    total: res.data.data.total,
                    refresh: false,
                }, (state) => {
                    console.log(this.state.stories)
                })
            })
            .catch((err) => console.log(err))
        //初始化websocket
        // Taro.connectSocket({
        //     url: websocketHost + ':' + websocketPort,
        //     success(){
        //         console.log('连接成功')
        //     }
        // }).then(sock => {
        //     sock.onMessage(msg => {
        //         console.log('onMessage:',msg);
        //         console.log(JSON.parse(msg.data));
        //         this.setState({
        //             messages: [...this.state.messages, JSON.parse(msg.data)]
        //         },(state) => {
        //             console.log(this.state.messages)
        //         })
        //     });
        //     this.setState({
        //         socket:sock
        //     },()=>{
        //         let user = getUserInfo();
        //         if (user){
        //             sock.send({
        //                 data:JSON.stringify({
        //                     action: 'login',
        //                     params: {
        //                         access_token: user.access_token
        //                     }
        //                 })
        //             })
        //         }
        //     })
        // })
    }

    send() {
        this.state.socket.send({
            data: JSON.stringify({
                action: 'msg',
                params: {
                    msg: this.state.content
                }
            })
        });
        this.setState({
            content: ''
        })
    }

    handleChange(content) {
        this.setState({
            content
        })
    }

    onReachBottom() {
        if (this.state.total === this.state.stories.length) {
            return;
        }
        let currentPage = this.state.page;
        Taro.request({
            url: host + '/common/stories?page=' + (currentPage + 1)
        })
            .then((res) => {
                let old = this.state.stories;
                this.setState({
                    stories: [...old, ...res.data.data.data],
                    total: res.data.data.total,
                    page: currentPage + 1
                })
            })
            .catch((err) => console.log(err))
    }

    showDetail(id) {
        Taro.navigateTo({
            url: '/pages/story/detail?id=' + id
        })
    }

    render() {
        const swiperItem = this.state.banners.map((item) => {
            return item.path ?
                (
                    <SwiperItem>
                        <Image src={item.img} onClick={this.jump.bind(this, item.path)}/>
                    </SwiperItem>
                )
                :
                (
                    <SwiperItem>
                        <Image src={item.img}/>
                    </SwiperItem>
                )
        });
        // const messagesList = this.state.messages.map(item => {
        //     switch (item.action) {
        //         case 'come': {
        //             return
        //             (
        //                 <View>
        //                 {
        //                     item.params.user_info ?
        //                         (
        //                             <View>
        //                             <AtAvtar image={item.params.user_info.avatar}/>
        //                             <Text>{item.params.user_info.nickname + ' 进入聊天室'}</Text>
        //                             </View>
        //                         )
        //                         :
        //                         (<Text>{'游客进入'}</Text>)
        //                 }
        //                  </View>
        //             )
        //         }
        //             break;
        //         case 'msg': {
        //             return (
        //                 <View className='at-row at-row--wrap'>
        //                     <View className='at-col-2'>
        //                     {item.params.user_info ? <Image
        //                         className='avatar'
        //                         src={item.params.user_info.avatar}/> : ''}
        //                     </View>
        //                     <View className='at-col-8 at-col--wrap msg'>
        //                         <Text>{item.params.msg.params.msg}</Text>
        //                     </View>
        //                 </View>
        //             )
        //         }
        //             break;
        //         case 'leave': {
        //             return
        //             (<View>
        //                 <Text>{item.params.user_info.nickname + ' 离开了聊天室'}</Text>
        //             </View>)
        //         }
        //             break;
        //     }
        // });
        return (
            <View>
                <Swiper
                indicatorColor='#999'
                indicatorActiveColor='#333'
                circular
                indicatorDots
                autoplay>
                {swiperItem}
                </Swiper>
                <View>
                    <Text>{'饮食轶事'}</Text>
                    <ScrollView
                        scrollY
                        // style='height: 50px;'
                        scrollWithAnimation
                        upperThreshold={5}
                        lowerThreshold={20}
                    >
                        <AtList>
                            {this.state.stories.map((item) => {
                                return (
                                    <AtListItem
                                        title={item.title}
                                        extraText={item.updated_at}
                                        onClick={this.showDetail.bind(this, item.id)}
                                    />
                                )
                            })}
                        </AtList>
                    </ScrollView>
                </View>
                {/*<View className='messages'>*/}
                {/*{messagesList}*/}
                {/*</View>*/}
                {/*<View>*/}
                {/*<AtInput*/}
                {/*name='content'*/}
                {/*type='text'*/}
                {/*placeholder='...'*/}
                {/*value={this.state.content}*/}
                {/*onChange={this.handleChange.bind(this)}*/}
                {/*/>*/}
                {/*<AtButton type='primary' className='send' onClick={this.send.bind(this)}>发送</AtButton>*/}
                {/*</View>*/}
            </View>
        )
    }

}