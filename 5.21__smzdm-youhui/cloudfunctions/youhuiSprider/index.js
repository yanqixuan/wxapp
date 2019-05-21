// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request')
const cheerio = require('cheerio')

cloud.init();

function spiderYouhui() {
  return new Promise((resolve, reject) => {
    request('https://www.smzdm.com/youhui/', (err, res) => {
      if (err) {
        reject(err)
      }
      if (!err) {
        // console.log(res.body);
        const $ = cheerio.load(res.body, {
          decodeEntities: false        //不解析html中的entitie元素 Entities &nbsp
        });

        let list = [];

        $('.list.list_preferential').each(function () {
          const price = $('.listTitle .red', this).text();
          const img = $('.picLeft img', this).attr('src');
          const desc = $('.lrInfo', this).text().trim();
          let title = $('.itemName a', this).html();
          title = title.replace(/<.*>/g, '');
          // console.log({
          //   title, price, img, desc
          // });
          list.push({
            title, price, img, desc
          });
        })
        resolve(list);

      }
    })

  })
}
// 云函数入口函数
exports.main = async () => {
  // await 后面接 promise 返回promise resolve时候的值
  // 执行爬虫
  try {
    const youhuiLists = await spiderYouhui();
    return {
      code: 200,
      youhuiLists
    }
  } catch (err) {
    return {
      code: 500
    }
  }
}