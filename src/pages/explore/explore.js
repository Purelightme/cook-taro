import Taro,{Component} from '@tarojs/taro'
import {View,Image,Map,Button,} from '@tarojs/components'
import {Swiper,SwiperItem,} from 'taro-ui'

export default class Explore extends Component{

    constructor(props){
        super(props);
        this.state = {
            items:[]
        }
    }

    chooseImg(){
        Taro.chooseImage({
            success:function (e) {
                console.log(e)
            }
        })
    }

    render(){
        return (
            <View>
            <Swiper
                indicatorColor='#999'
                indicatorActiveColor='#333'
                circular
                indicatorDots
                autoplay>
                <SwiperItem>
                    <Image src={'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180'}/>
                </SwiperItem>
                <SwiperItem>
                    <Image src={'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180'}/>
                </SwiperItem>
                <SwiperItem>
                    <Image src={'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180'}/>
                </SwiperItem>
                <SwiperItem>
                    <Image src={'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180'}/>
                </SwiperItem>
                <SwiperItem>
                    <Image src={'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180'}/>
                </SwiperItem>
            </Swiper>
                <Button onClick={this.chooseImg.bind(this)}>上传图片</Button>
            </View>
        )
    }

}