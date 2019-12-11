import Mock from 'mockjs'
// const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
// const domain = 'http://mockjs.com/api' // 定义默认域名，随便写
// // 定义请求链接，类型，还有返回数据
// let data = Mock.mock('/meun', /get/, {
let data = Mock.mock({
    // /post|get/i 匹配post和get模式 也可以用'post'或'get'
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'code': 200,
    'msg': '成功',
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        // 随机数字1-100
        'number|2-10': 100,
        // 返回city数组，每次里面有三个
        'name|1': ['iphone', 'HuaWei', '荣耀9', '小米手机'],
        'price|5000-9000': 0
    }]
})
Mock.mock(`/products`, 'get', function(op) {
    console.log(op);
    return data
})