! function () {
  var view = document.querySelector('section.message')
  var model = {
    init: function () {
      var APP_ID = '2T7J6R1NA9Xst4HzIY9mEG0x-gzGzoHsz';
      var APP_KEY = 'aNAPXGXLkqwfzAeMiwov5VAq';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },

    // 获取数据
    fetch: function () {
      var query = new AV.Query('message');
      return query.find() //  Promise对象
    },
    // 创建数据
    save: function (name, content) {
      var Message = AV.Object.extend('message');
      var message = new Message();
      return message.save({
        'name': name,
        'content': content
      })
    }
  }
  var controller = {
    view: null,
    messageList: null,
    model: null,
    init: function (view, model) {
      this.view = view
      this.model = model
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('#postMessageForm')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },

    loadMessages: function () {
      this.model.fetch().then((messages) => {
        //console.log(messages)
        //console.log(messages[2].attributes.content)
        let array = messages.map((item) => item.attributes)
        //console.log(array)
        array.forEach((item) => {
          //console.log(item)
          let li = document.createElement('li')
          li.innerText = `${item.name} : ${item.content}`
          this.messageList.appendChild(li)
        })
      }).then(function () {
        //alert('成功')
        // 更新成功
      }, function (error) {
        // 异常处理
        console.log(error)
      });
    },

    bindEvents: function () {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(this)
        this.saveMessage()
      })
    },

    saveMessage: function () {
      let myForm = this.form
      let name = myForm.querySelector('input[name=name]').value
      let content = myForm.querySelector('input[name=content]').value
      if (name === '' || content === '') {
        return alert(`请输入${name === '' ? '姓名' : '内容'}`)
      }

      this.model.save(name, content).then(function (object) {
        console.log(object)
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name} : ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        console.log(content)
        myForm.querySelector('input[name=content]').value = ''
      })
    }
  }
  controller.init.call(controller, view, model)

}.call()