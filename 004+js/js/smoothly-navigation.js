! function () {
  var view = document.querySelector('nav.menu')
  var controller = {
    view: null,
    aTags: null,
    initAnimation: function () {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    bindEvents: function () {
      let aTags = this.view.querySelectorAll('nav.menu>ul>li>a')
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick =  (x) => {
          x.preventDefault()
          console.log(window.scrollY)
          let a = x.currentTarget
          let href = a.getAttribute('href')
          console.log(href)
          let element = document.querySelector(href)
          this.scrollToElement(element)
        }
      }
    },
    scrollToElement: function (element) {
      let top = element.offsetTop
      //下面设置缓动--这里只能用js
      let n = 25 //一共动多少次
      let duration = 500 / n //计算多久动一次，500ms动25次
      let currentTop = window.scrollY //当前页面相对于页面顶端的y值
      let targetTop = top - 80 //目标点相对于页面顶端的y值
      //let distance = (targetTop - currentTop) / n //每次动的距离

      // let i = 0
      // let id = setInterval(() => {
      //   if (i === n) {
      //     window.clearInterval(id);
      //     return
      //   }
      //   i = i + 1
      //   window.scrollTo(0, currentTop + i * distance)
      // }, duration)
      let s = targetTop - currentTop
      var t = Math.abs(s / 100 * 500) //设置每走100px用时500ms，那么走完整个路程s用时为s/100*500,注意 s可能是负值，对于s没有影响，但是时间应该取绝对值。
      if (t > 500) {
        t = 500
      }
      var coords = {
        y: currentTop
      }; // Start at (0, 0)
      var tween = new TWEEN.Tween(coords).to({
          y: targetTop
        }, t)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onUpdate(function () {
          window.scrollTo(0, coords.y)
        })
        .start();
    },
    init: function (view) {
      this.view = view
      this.initAnimation()
      this.bindEvents()

    }
  }
  controller.init.call(controller, view)
}.call()