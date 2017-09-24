var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
    'content': 'from Nodejs!!!~~~~',
    'cid': 348
})

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'POST': '/course/docomment HTTP/1.1',
        'Host': 'www.imooc.com',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Origin': 'http://www.imooc.com',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Referer': 'http://www.imooc.com/comment/348',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
        'Cookie': 'PHPSESSID=7gsi5op9fii6k8mq2oi862tgu3; imooc_uuid=1bda02eb-a7de-4c03-ba30-513f3b085958; imooc_isnew_ct=1506079867; cninfo=syb9-58fc4a3eef797bb53e2a572b4492e1cb; mc_channel=syb7; mc_marking=60e5294c605a87b2af7257d06f70505e; loginstate=1; apsid=QxMzFhODQwN2U1MDg0YzU4ODc3M2M0YzAyMThlZDUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTE5Mzg1MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMDIxMDk0NjczQHFxLmNvbQAAAAAAAAAAAAAAAAAAADU4NDExMjZmMDY1MTYyMzNiOWU1NGQ3NDAwYjJlZWMzfgrGWX4Kxlk%3DMj; last_login_username=1021094673%40qq.com; IMCDNS=0;Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1506080674; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1506223153; imooc_isnew=2; cvde=59c4f47b85d4f-136'
    }
}

var request = http.request(options, function (response) {
    console.log('status: ' + response.statusCode)
    console.log('headers: ' + JSON.stringify(response.headers))

    response.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })

    response.on('end', function () {
        console.log(' comment done!!!')
    })
})

request.on('error', function (e) {
    console.log('Error ' + e.message)
})

request.write(postData)
request.end()