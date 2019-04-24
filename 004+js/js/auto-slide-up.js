//添加 offset 类
!function() {
  let specialTags = document.querySelectorAll("[data-x]")
  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
  }

  setTimeout(function () {
    findClosestAndRemoveOffset()
  }, 0)

  window.addEventListener('scroll', function (xxx) {
    findClosestAndRemoveOffset()
  })


  function findClosestAndRemoveOffset() {
    //滑动到相应位置，导航亮起
    //console.log('window.scrollY')
    //console.log(window.scrollY)
    let specialTags = document.querySelectorAll("[data-x]")
    //console.log(specialTags)
    let minIndex = 0 //设离当前页面高度scrollY最近的标签是数组specialTags中的0
    for (let i = 1; i < specialTags.length; i = i + 1) {
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window
          .scrollY)) {
        minIndex = i
      }
    }

    //console.log('minIndex')
    //console.log(minIndex)
    for (var i = 0; i < specialTags.length; i++) {
      specialTags[i].classList.remove('active')
    }

    specialTags[minIndex].classList.add('active')

    specialTags[minIndex].classList.remove('offset')


    let id = specialTags[minIndex].id
    // console.log(id)
    let a = document.querySelector('a[href="#' + id + '"]')
    //console.log(a)
    let li = a.parentNode //找到a元素的父级
    //console.log(li)

    let brotherAndMe = li.parentNode.children
    //console.log(brotherAndMe)
    for (let i = 0; i < brotherAndMe.length; i++) {
      brotherAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }

  let liTags = document.querySelectorAll('nav.menu>ul>li')
  //console.log(liTags)
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
      x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
      x.currentTarget.classList.remove('active')
    }
  }
}.call()