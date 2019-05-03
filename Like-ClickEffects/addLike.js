/*
* B站：@VincentTV
* Share with you
* 主页：https://space.bilibili.com/402141442 
* 本视频：https://www.bilibili.com/video/av51351273/
* */
(function(w, d) {
  d.querySelector('body').addEventListener('click', function(e) {
    addLike(e);
  });
  d.querySelector('.like-wrap').addEventListener('click', function(e) {
    this.classList.toggle('like-active');
    addLike(e);
  });
  d.querySelector('.content-wrap').addEventListener('click', function(e) {
    addLike(e);
  });

  var likeArr = [];   //like队列
  function addLike(e) {
    var likeDiv = d.createElement('div');   //创建div
    likeDiv.classList.add('like');          //添加样式like
    likeDiv.innerHTML = '<i class="fas fa-heart"></i><span>+1</span>';   //添加like内容
    d.body.appendChild(likeDiv);            //往body添加该div
    // 每点击一次往队列添加一个like的对象
    likeArr.push({
      el: likeDiv,            //div源
      top: e.clientY - 20,    //e为传入的点击事件，client取得点击位置像素
      left: e.clientX - 10,
      opacity: 1,             //透明度
      scale: 1,               //放大倍数
      color: `rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()})`
      //随机颜色，``反单引号为ES6写法，${}插入变量，也可用使用字符串拼接
    });
    moveLike();
  };

  function moveLike() {
    for(var i = 0; i < likeArr.length; i++) {
      if(likeArr[i].opacity <=0) {          //透明小于0时
        d.body.removeChild(likeArr[i].el);  //body去除like
        likeArr.splice(i, 1);               //队列删减
        return;                             //跳出moveLike函数
      }
      likeArr[i].top--;                     //刷新一次top-1
      likeArr[i].opacity -= 0.01;           //透明度操作,根据喜好自定义
      likeArr[i].scale += 0.01;             //放大倍数操作，根据喜好自定义
      // 往div源添加style样式，``同样是ES6写法
      likeArr[i].el.style.cssText = `
      top: ${likeArr[i].top}px;
      left: ${likeArr[i].left}px;
      color: ${likeArr[i].color};
      opacity: ${likeArr[i].opacity};
      transform: scale(${likeArr[i].scale});`
    }
    //请求动画帧，以屏幕刷新为准，一般是每秒60帧，每刷新调用一次moveLike
    w.requestAnimationFrame(moveLike);      
  }

})(window, document);