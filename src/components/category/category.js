import Taro, {Component} from '@tarojs/taro'

import {AtGrid} from 'taro-ui'


export default class Category extends Component {

    constructor(props) {
        super(props);
        this.states = {
            data: [
                {
                    'id': 1,
                    'value': '家常菜',
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    'id': 2,
                    'value': '快手菜',
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'

                },
                {
                    'id': 3,
                    'value': '创意菜',
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'

                },
                {
                    'id': 4,
                    'value': '素菜',
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'

                },
                {
                    'id': 5,
                    'value': '凉菜',
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'

                },
                {
                    'id': 6,
                    'value': '烘焙',
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'

                },
                {
                    'id': 7,
                    'value': '面食',
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'

                },
                {
                    'id': 8,
                    'value': '汤',
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'

                },
                {
                    'id': 9,
                    'value': '自制调味料',
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "10",
                    "value": "川菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "11",
                    "value": "粤菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "12",
                    "value": "湘菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "13",
                    "value": "鲁菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "14",
                    "value": "京菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "15",
                    "value": "东北菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "16",
                    "value": "西餐",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "17",
                    "value": "日本料理",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "18",
                    "value": "韩国料理",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "101",
                    "value": "闽菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "102",
                    "value": "浙菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "104",
                    "value": "苏菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "105",
                    "value": "徽菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "107",
                    "value": "豫菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "108",
                    "value": "晋菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "109",
                    "value": "赣菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "110",
                    "value": "湖北菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "111",
                    "value": "清真菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "112",
                    "value": "云南菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "113",
                    "value": "贵州菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "114",
                    "value": "新疆菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "115",
                    "value": "淮扬菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "116",
                    "value": "潮州菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "117",
                    "value": "客家菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "118",
                    "value": "香港美食",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "119",
                    "value": "台湾菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "123",
                    "value": "泰国菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "124",
                    "value": "意大利菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "125",
                    "value": "法国菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "126",
                    "value": "东南亚菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                },
                {
                    "id": "127",
                    "value": "印度菜",
                    'image': 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png'
                }
            ]
        }
    }


    render() {
        return (
            <AtGrid
                hasBorder
                onClick={this.jump.bind(this)}
                data={this.states.data}/>
        );
    }

    jump(item, index) {
        console.log(item, index)
        Taro.navigateTo({
            url: '/pages/cook/cook?cid=' + item.id + '&value=' + item.value
        })
    }
}