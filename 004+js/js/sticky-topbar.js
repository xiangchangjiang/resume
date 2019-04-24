! function () {
  var view = document.querySelector('#topNavBar')
  var controller = {
    view: null,
    init: function () {
      //console.log(this)  //此时this是controller这个对象
      this.view = view
      this.bindEvents()
      //相当于  this.bindEvents.call(this)
    },
    bindEvents: function () {
      //console.log(this)
      var view = this.view
      window.addEventListener('scroll', (xxx) => {
        //console.log(this)  //这里监听滚动元素，如果不用箭头函数(利用了箭头函数内外this不变)，则需要绑定this   function(xxx){}.bind(this)
        if (window.scrollY > 0) {
          this.active()
        } else {
          this.deactive()
        }
      })
    },
    active: function () {
      view.classList.add('sticky')
    },
    deactive: function () {
      view.classList.remove('sticky')
    }
  }
  controller.init(view)
  //相当于  controller.init.call(controller,view)
}.call()