// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function() {
    var list = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    list.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = list.length
    return list
  },
  save: function(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  }
}
new Vue({
  el: "#app",
  data: {
    list: [],
    comment: "",
    showState: "すべて",
  },
  created() {
    // インスタンス作成時に自動的に fetch() する
    this.list = todoStorage.fetch()
  },
  watch: {
    // オプションを使う場合はオブジェクト形式にする
    list: {
      // 引数はウォッチしているプロパティの変更後の値
      handler: function(list) {
        todoStorage.save(list)
      },
      // deep オプションでネストしているデータも監視できる
      deep: true
    }
  },
  methods: {
    addList: function() {
      var max = this.list.reduce(function(a, b) {
        return a.id > b.id ? a.id : b.id
      }, 0)

      this.list.push({
        // id: todoStorage.uid++,
        id:max+1,
        comment: this.comment,
        done: false
      })

      this.comment = ""
    },

    removeList: function(index) {
      this.list.splice(index, 1)
    },

    changeState: function(index) {
      if (this.list[index].done == true) {
        this.list[index].done = false
      } else {
        this.list[index].done = true
      }
    },
    named: function(index) {
      if (this.list[index].done == true) {
        return "完了"
      } else {
        return "作業中"
      }
    },
  },

  // 表示リストの絞り込みを考える。テキストP１２４あたり参考

  computed: {
    matched: function() {
      if (this.showState == "すべて") {
        return this.list
      } else if (this.showState == "完了") {
        return this.list.filter(function(el) {
          return el.done == true
        }, this)
      } else {
        return this.list.filter(function(el) {
          return el.done == false
        }, this)
      }
    },
  },

})
