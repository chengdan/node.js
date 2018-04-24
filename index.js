//引入依赖包
let request = require('request'); //发送请求
let cheerio = require('cheerio'); //类似jQuery
let iconv = require('iconv-lite'); //解决乱码问题

let url = 'https://zhidao.baidu.com'; //需要爬取数据的网址
let getNavs = function (done) {
    request({
        url:url,
        encoding: null //必须要否则乱码（关键代码）
    },function (err,res,body) {
        if (err) return console.error(err);//如果报错，打印错误代码

        let navs = [];//新建一个空数组用来存数据
        let html = iconv.decode(body, 'gb2312'); //解决乱码问题
        let $ = cheerio.load(html, {decodeEntities: false}); //使用$符合操作，类似jQuery

        //dom操作，根据页面结构循环或者直接获取数据，并将获取的内容添加到之前创建的新数组当中
        $('body').find('.qustion-item').each(function (i,el) {
          let $el = $('.qustion-item').eq(i).find('.question-body-content a');
            let title = $el.text();
            let url = $el.attr('href');
            navs.push({
                'title':title,
                'url':url
            });
        });
        console.log(navs);
  })
};
getNavs();
