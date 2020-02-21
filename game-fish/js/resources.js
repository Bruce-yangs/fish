function loadResource(path) {
  return new Promise((resolve, reject) => {
    $.ajax({
    type: "GET",
    url: './img/' + path,
    dataType: 'text',
    success: function (text) {
      let json = eval('(' + text + ')');
      let res = {};
      let count = 0;
      let total = 0;
      for (let name in json) {
        total++;
        let oImg = new Image();
        oImg.src = 'img/' + json[name].src;
        oImg.onload = function () {
          res[name] = {
            img: this,
            frame: json[name].frame
          }

          count++;
          if (count === total) {
            resolve(res);
          }
        }
      }
    },
    error: function (err) {
      reject(err);
    }
  })
})
}

async function loadResources() {
  //加载相关素材json
  let src = {
    bottom: 'bottom.json',
    bullet: 'bullet.json',
    cannon: 'cannon.json',
    number: 'number.json',
    coin: 'coin.json',
    fish: 'fish.json',
    web: 'web.json'
  };
  let imgs = {};
  try{
    for(let name in src) {
      imgs[name] = await loadResource(src[name]);
    }
    //少量的数据 设置全局
    window.__g_resource = imgs;
  } catch (e) {
    console.log(e+',加载失败，请刷新重试');
  }
}