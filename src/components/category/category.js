import Taro, {Component} from '@tarojs/taro'

import {AtGrid, AtTabs, AtTabsPane} from 'taro-ui'
import {host} from "../../utils/cook";
import './category.css'

export default class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
            categories: [],
            current: 0
        }
    }

    componentWillMount() {
        let categories = JSON.parse('{"errcode":0,"errmsg":"ok","data":[{"id":3,"parent_id":0,"title":"\u5168\u90e8\u83dc\u8c31","children":[{"id":4,"parent_id":3,"title":"\u6309\u83dc\u54c1\u9009\u62e9\u83dc\u8c31","children":[{"id":5,"parent_id":4,"title":"\u8364\u83dc"},{"id":6,"parent_id":4,"title":"\u7d20\u83dc"},{"id":7,"parent_id":4,"title":"\u6c64\u7ca5"},{"id":8,"parent_id":4,"title":"\u897f\u70b9"},{"id":9,"parent_id":4,"title":"\u4e3b\u98df"},{"id":10,"parent_id":4,"title":"\u996e\u54c1"},{"id":11,"parent_id":4,"title":"\u4fbf\u5f53"},{"id":12,"parent_id":4,"title":"\u5c0f\u5403"}]},{"id":13,"parent_id":3,"title":"\u6309\u5de5\u827a\u9009\u62e9\u83dc\u8c31","children":[{"id":14,"parent_id":13,"title":"\u7ea2\u70e7"},{"id":15,"parent_id":13,"title":"\u7092"},{"id":16,"parent_id":13,"title":"\u714e"},{"id":17,"parent_id":13,"title":"\u70b8"},{"id":18,"parent_id":13,"title":"\u7116"},{"id":19,"parent_id":13,"title":"\u7096"},{"id":20,"parent_id":13,"title":"\u84b8"},{"id":21,"parent_id":13,"title":"\u70e9"},{"id":22,"parent_id":13,"title":"\u718f"},{"id":23,"parent_id":13,"title":"\u814c"},{"id":24,"parent_id":13,"title":"\u716e"},{"id":25,"parent_id":13,"title":"\u709d"},{"id":26,"parent_id":13,"title":"\u5364"},{"id":27,"parent_id":13,"title":"\u62cc"},{"id":28,"parent_id":13,"title":"\u70e4"}]},{"id":29,"parent_id":3,"title":"\u6309\u83dc\u7cfb\u9009\u62e9\u83dc\u8c31","children":[{"id":30,"parent_id":29,"title":"\u9c81\u83dc"},{"id":31,"parent_id":29,"title":"\u5ddd\u83dc"},{"id":32,"parent_id":29,"title":"\u7ca4\u83dc"},{"id":33,"parent_id":29,"title":"\u95fd\u83dc"},{"id":34,"parent_id":29,"title":"\u6d59\u83dc"},{"id":35,"parent_id":29,"title":"\u6e58\u83dc"},{"id":36,"parent_id":29,"title":"\u4e0a\u6d77\u83dc"},{"id":37,"parent_id":29,"title":"\u5fbd\u83dc"},{"id":38,"parent_id":29,"title":"\u4eac\u83dc"},{"id":39,"parent_id":29,"title":"\u4e1c\u5317\u83dc"},{"id":40,"parent_id":29,"title":"\u897f\u5317\u83dc"},{"id":41,"parent_id":29,"title":"\u5ba2\u5bb6\u83dc"},{"id":42,"parent_id":29,"title":"\u53f0\u6e7e\u7f8e\u98df"},{"id":43,"parent_id":29,"title":"\u6cf0\u56fd\u83dc"},{"id":44,"parent_id":29,"title":"\u65e5\u672c\u6599\u7406"},{"id":45,"parent_id":29,"title":"\u97e9\u56fd\u6599\u7406"},{"id":46,"parent_id":29,"title":"\u897f\u9910"},{"id":68,"parent_id":29,"title":"\u82cf\u83dc"},{"id":69,"parent_id":29,"title":"\u5929\u6d25\u83dc"},{"id":70,"parent_id":29,"title":"\u6e1d\u83dc"},{"id":71,"parent_id":29,"title":"\u6e05\u771f\u83dc"},{"id":72,"parent_id":29,"title":"\u8c6b\u83dc"},{"id":73,"parent_id":29,"title":"\u664b\u83dc"},{"id":74,"parent_id":29,"title":"\u8d63\u83dc"},{"id":75,"parent_id":29,"title":"\u6e56\u5317\u83dc"},{"id":76,"parent_id":29,"title":"\u4e91\u5357\u83dc"},{"id":77,"parent_id":29,"title":"\u8d35\u5dde\u83dc"},{"id":78,"parent_id":29,"title":"\u65b0\u7586\u83dc"},{"id":79,"parent_id":29,"title":"\u6dee\u626c\u83dc"},{"id":80,"parent_id":29,"title":"\u6f6e\u5dde\u83dc"},{"id":81,"parent_id":29,"title":"\u5e7f\u897f\u83dc"},{"id":82,"parent_id":29,"title":"\u9999\u6e2f\u7f8e\u98df"},{"id":83,"parent_id":29,"title":"\u53f0\u6e7e\u83dc"},{"id":84,"parent_id":29,"title":"\u6fb3\u95e8\u7f8e\u98df"},{"id":85,"parent_id":29,"title":"\u8d8a\u5357\u83dc"},{"id":86,"parent_id":29,"title":"\u610f\u5927\u5229\u83dc"},{"id":87,"parent_id":29,"title":"\u58a8\u897f\u54e5\u83dc"},{"id":88,"parent_id":29,"title":"\u897f\u73ed\u7259\u83dc"},{"id":89,"parent_id":29,"title":"\u6cd5\u56fd\u83dc"},{"id":90,"parent_id":29,"title":"\u7f8e\u56fd\u83dc"},{"id":91,"parent_id":29,"title":"\u5df4\u897f\u70e7\u70e4"},{"id":92,"parent_id":29,"title":"\u4e1c\u5357\u4e9a\u83dc"},{"id":93,"parent_id":29,"title":"\u5370\u5ea6\u83dc"},{"id":94,"parent_id":29,"title":"\u4f0a\u6717\u83dc"},{"id":95,"parent_id":29,"title":"\u571f\u8033\u5176\u83dc"},{"id":96,"parent_id":29,"title":"\u6fb3\u5927\u5229\u4e9a\u83dc"}]},{"id":47,"parent_id":3,"title":"\u6309\u4eba\u7fa4\u9009\u62e9\u83dc\u8c31","children":[{"id":48,"parent_id":47,"title":"\u5b55\u5987\u98df\u8c31"},{"id":49,"parent_id":47,"title":"\u5a74\u5e7c\u98df\u8c31"},{"id":50,"parent_id":47,"title":"\u513f\u7ae5\u98df\u8c31"},{"id":51,"parent_id":47,"title":"\u61d2\u4eba\u98df\u8c31"},{"id":52,"parent_id":47,"title":"\u5bb5\u591c"},{"id":53,"parent_id":47,"title":"\u7d20\u98df"},{"id":54,"parent_id":47,"title":"\u4ea7\u5987\u98df\u8c31"},{"id":55,"parent_id":47,"title":"\u4e8c\u4eba\u4e16\u754c"},{"id":56,"parent_id":47,"title":"\u4e0b\u5348\u8336"}]},{"id":57,"parent_id":3,"title":"\u6309\u529f\u80fd\u9009\u62e9\u83dc\u8c31","children":[{"id":58,"parent_id":57,"title":"\u51cf\u80a5"},{"id":59,"parent_id":57,"title":"\u4fbf\u79d8"},{"id":60,"parent_id":57,"title":"\u517b\u80c3"},{"id":61,"parent_id":57,"title":"\u6ecb\u9634"},{"id":62,"parent_id":57,"title":"\u8865\u9633"},{"id":63,"parent_id":57,"title":"\u6708\u7ecf\u4e0d\u8c03"},{"id":64,"parent_id":57,"title":"\u7f8e\u5bb9"},{"id":65,"parent_id":57,"title":"\u517b\u751f"},{"id":66,"parent_id":57,"title":"\u8d2b\u8840"},{"id":67,"parent_id":57,"title":"\u6da6\u80ba"}]},{"id":97,"parent_id":3,"title":"\u6309\u5c0f\u5403\u9009\u62e9\u83dc\u8c31","children":[{"id":98,"parent_id":97,"title":"\u5317\u4eac\u5c0f\u5403"},{"id":99,"parent_id":97,"title":"\u4e0a\u6d77\u5c0f\u5403"},{"id":100,"parent_id":97,"title":"\u5929\u6d25\u5c0f\u5403"},{"id":101,"parent_id":97,"title":"\u56db\u5ddd\u5c0f\u5403"},{"id":102,"parent_id":97,"title":"\u6210\u90fd\u5c0f\u5403"},{"id":103,"parent_id":97,"title":"\u5357\u4eac\u5c0f\u5403"},{"id":104,"parent_id":97,"title":"\u6d59\u6c5f\u5c0f\u5403"},{"id":105,"parent_id":97,"title":"\u82cf\u5dde\u5c0f\u5403"},{"id":106,"parent_id":97,"title":"\u957f\u6c99\u5c0f\u5403"},{"id":107,"parent_id":97,"title":"\u6e56\u5317\u5c0f\u5403"},{"id":108,"parent_id":97,"title":"\u6b66\u6c49\u5c0f\u5403"},{"id":109,"parent_id":97,"title":"\u5e7f\u4e1c\u5c0f\u5403"},{"id":110,"parent_id":97,"title":"\u5e7f\u5dde\u5c0f\u5403"},{"id":111,"parent_id":97,"title":"\u6f6e\u6c55\u5c0f\u5403"},{"id":112,"parent_id":97,"title":"\u5e7f\u897f\u5c0f\u5403"},{"id":113,"parent_id":97,"title":"\u9655\u897f\u5c0f\u5403"},{"id":114,"parent_id":97,"title":"\u897f\u5b89\u5c0f\u5403"},{"id":115,"parent_id":97,"title":"\u65b0\u7586\u5c0f\u5403"},{"id":116,"parent_id":97,"title":"\u5f00\u5c01\u5c0f\u5403"},{"id":117,"parent_id":97,"title":"\u4e91\u5357\u5c0f\u5403"},{"id":118,"parent_id":97,"title":"\u8d35\u5dde\u5c0f\u5403"},{"id":119,"parent_id":97,"title":"\u53f0\u6e7e\u5c0f\u5403"},{"id":120,"parent_id":97,"title":"\u9999\u6e2f\u5c0f\u5403"},{"id":121,"parent_id":97,"title":"\u6fb3\u95e8\u5c0f\u5403"},{"id":122,"parent_id":97,"title":"\u6cb3\u5357\u5c0f\u5403"},{"id":123,"parent_id":97,"title":"\u9752\u5c9b\u5c0f\u5403"},{"id":124,"parent_id":97,"title":"\u6c99\u53bf\u5c0f\u5403"},{"id":125,"parent_id":97,"title":"\u53a6\u95e8\u5c0f\u5403"},{"id":126,"parent_id":97,"title":"\u5c71\u897f\u5c0f\u5403"},{"id":127,"parent_id":97,"title":"\u91cd\u5e86\u5c0f\u5403"},{"id":128,"parent_id":97,"title":"\u6d77\u5357\u5c0f\u5403"}]},{"id":129,"parent_id":3,"title":"\u6309\u573a\u666f\u9009\u62e9\u83dc\u8c31","children":[{"id":130,"parent_id":129,"title":"\u65e9\u9910"},{"id":131,"parent_id":129,"title":"\u5348\u9910"},{"id":132,"parent_id":129,"title":"\u665a\u9910"},{"id":133,"parent_id":129,"title":"\u591c\u5bb5"},{"id":134,"parent_id":129,"title":"\u91ce\u9910"},{"id":135,"parent_id":129,"title":"\u805a\u4f1a"},{"id":136,"parent_id":129,"title":"\u8e0f\u9752"},{"id":137,"parent_id":129,"title":"\u5355\u8eab"},{"id":138,"parent_id":129,"title":"\u5bb4\u8bf7"},{"id":139,"parent_id":129,"title":"\u71ac\u591c"},{"id":140,"parent_id":129,"title":"\u6625\u8282"},{"id":141,"parent_id":129,"title":"\u60c5\u4eba\u8282"},{"id":142,"parent_id":129,"title":"\u5143\u5bb5\u8282"},{"id":143,"parent_id":129,"title":"\u4e8c\u6708\u4e8c"},{"id":144,"parent_id":129,"title":"\u590d\u6d3b\u8282"},{"id":145,"parent_id":129,"title":"\u611a\u4eba\u8282"},{"id":146,"parent_id":129,"title":"\u5bd2\u98df\u8282"},{"id":147,"parent_id":129,"title":"\u6e05\u660e\u8282"},{"id":148,"parent_id":129,"title":"\u4e09\u6708\u4e09"},{"id":149,"parent_id":129,"title":"\u6bcd\u4eb2\u8282"},{"id":150,"parent_id":129,"title":"\u513f\u7ae5\u8282"},{"id":151,"parent_id":129,"title":"\u7aef\u5348\u8282"},{"id":152,"parent_id":129,"title":"\u7236\u4eb2\u8282"},{"id":153,"parent_id":129,"title":"\u516d\u6708\u516d"},{"id":154,"parent_id":129,"title":"\u4e03\u5915\u8282"},{"id":155,"parent_id":129,"title":"\u4e2d\u5143\u8282"},{"id":156,"parent_id":129,"title":"\u4e2d\u79cb\u8282"},{"id":157,"parent_id":129,"title":"\u91cd\u9633\u8282"},{"id":158,"parent_id":129,"title":"\u4e07\u5723\u8282"},{"id":159,"parent_id":129,"title":"\u611f\u6069\u8282"},{"id":160,"parent_id":129,"title":"\u5723\u8bde\u8282"},{"id":161,"parent_id":129,"title":"\u814a\u516b\u8282"},{"id":162,"parent_id":129,"title":"\u5c0f\u5e74"},{"id":163,"parent_id":129,"title":"\u5e74\u591c\u996d"},{"id":164,"parent_id":129,"title":"\u6625\u5b63"},{"id":165,"parent_id":129,"title":"\u590f\u5b63"},{"id":166,"parent_id":129,"title":"\u79cb\u5b63"},{"id":167,"parent_id":129,"title":"\u51ac\u5b63"},{"id":168,"parent_id":129,"title":"\u7acb\u6625"},{"id":169,"parent_id":129,"title":"\u96e8\u6c34"},{"id":170,"parent_id":129,"title":"\u60ca\u86f0"},{"id":171,"parent_id":129,"title":"\u6625\u5206"},{"id":172,"parent_id":129,"title":"\u6e05\u660e"},{"id":173,"parent_id":129,"title":"\u8c37\u96e8"},{"id":174,"parent_id":129,"title":"\u7acb\u590f"},{"id":175,"parent_id":129,"title":"\u5c0f\u6ee1"},{"id":176,"parent_id":129,"title":"\u8292\u79cd"},{"id":177,"parent_id":129,"title":"\u590f\u81f3"},{"id":178,"parent_id":129,"title":"\u5c0f\u6691"},{"id":179,"parent_id":129,"title":"\u5927\u6691"},{"id":180,"parent_id":129,"title":"\u7acb\u79cb"},{"id":181,"parent_id":129,"title":"\u5904\u6691"},{"id":182,"parent_id":129,"title":"\u767d\u9732"},{"id":183,"parent_id":129,"title":"\u79cb\u5206"},{"id":184,"parent_id":129,"title":"\u5bd2\u9732"},{"id":185,"parent_id":129,"title":"\u971c\u964d"},{"id":186,"parent_id":129,"title":"\u7acb\u51ac"},{"id":187,"parent_id":129,"title":"\u5c0f\u96ea"},{"id":188,"parent_id":129,"title":"\u5927\u96ea"},{"id":189,"parent_id":129,"title":"\u51ac\u81f3"},{"id":190,"parent_id":129,"title":"\u5c0f\u5bd2"},{"id":191,"parent_id":129,"title":"\u5927\u5bd2"}]}]}]}')
        console.log('分类：',categories)
        this.setState({
            categories: categories.data[0].children
        })
        // Taro.request({
        //     url: host + '/common/category/tree'
        // })
        //     .then((res) => {
        //         if (res.data.errcode === 0) {
        //             this.setState({
        //                 categories: res.data.data[0].children
        //             },()=>{
        //                 console.log('分类：',this.state.categories)
        //             })
        //         } else {
        //             Taro.showToast({
        //                 title: res.data.errmsg
        //             })
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }

    changeCurrent(current) {
        this.setState({
            current
        })
    }

    jump(item) {
        Taro.navigateTo({
            url: '/pages/cook/cook?category_id=' + item.id + '&title=' + item.value
        })
    }

    render() {
        let categories = this.state.categories;
        let img = this.state.img;
        let tabList = [];
        categories.map((item) => {
            tabList.push({title: item.title.slice(1, -4)})
        });
        let tabPanels = categories.map((item, index) => {
            let gridData = item.children.map((category) => {
                return {
                    id: category.id,
                    value: category.title,
                    image: img
                }
            });
            return (
                <AtTabsPane current={this.state.current}
                            index={index}
                            scroll
                >
                    <AtGrid
                        hasBorder
                        onClick={this.jump.bind(this)
                        }
                        data={gridData}
                    />
                </AtTabsPane>
            )
        });
        return (
            <View>
                <AtTabs
                    current={this.state.current}
                    scroll
                    tabList={tabList}
                    onClick={this.changeCurrent.bind(this)}>
                    {tabPanels}
                </AtTabs>
                <View className='bottom'>

                </View>
            </View>
        )
    }
}