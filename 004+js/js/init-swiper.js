! function () {
  var view = document.querySelector('#mySlides')
  var controller = {
    view: null,
    Swiper: null,
    swiperOptions: {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    },
    init: function (view) {
      console.log(this)
      this.view = view
      this.initSwiper()
    },
    initSwiper: function () {
      this.Swiper = new Swiper(this.view.querySelector('.swiper-container'), 
        this.swiperOptions
      )
    }
  }
  controller.init(view)
  //controller.init.call(controller, view)
}.call()