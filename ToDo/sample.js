var app = new Vue({
  el: '#app',

  data: {
    message:"Vue.js",
    message2:"Hello <strong>vue</strong>",

    // name : "キマイラ",
    //
    // list: [{
    //     id: 1,
    //     name: "スライム",
    //     hp: 100
    //   },
    //   {
    //     id: 2,
    //     name: "ゴブリン",
    //     hp: 200
    //   },
    //   {
    //     id: 3,
    //     name: "ドラゴン",
    //     hp: 500
    //   }
    // ],
    // list:["スライム","ゴブリン","ドラゴン"]
    // message: {
    //   value: "Hello Ve.js!"
    // },
    // list: ["apple", "banana", "tomato"],
    // count:0,
    // isChild:true,
    // isActive:true,
    // textColor:"red",
    // bgColor:"lightgray",
    // ok:true ,
    // classObject:{
    //   child:true,
    //   'is-active':false,
    // },
    // styleObject:{
    //   color:"red",
    //   backgroundColor:"lightblue"
    // },
    // item:{
    //   id=12,
    //   width=500,
    //   height=300,
    // }
  },
  // created:function(){
  //   // this.list.forEach(function(item){
  //   //   this.$set(item,"active",false)
  //   // },this)
  //   axios.get("list.json").then(function(response){
  //     this.list=response.data
  //   }.bind(this)).catch(function(e){
  //    console.error(e);
  //   })
  // },
  //
 methods: {
  //   doAdd: function() {
  //     var max = this.list.reduce(function(a, b) {
  //       return a.id > b.id ? a.id : b.id
  //     }, 0)
  //
  //     this.list.push({
  //       id:max+1,
  //       name:this.name,
  //       hp:500
  //     })
  //
  //     //this.$set(this.list,0,{id:1,name:"キングスライム",hp:600})
  //     this.list=this.list.filter(function(el){
  //       return el.hp>=100
  //     })
  //   },
  //   doRemove:function(index){
  //     this.list.splice(index,1)
  //   },
  //   doAttack:function(index){
  //     this.list[index].hp-=10
  //   },
    // doRecover:function(index){
    //   this.list[index].hp+=10
    // },
    //   increment:function(){
    //     this.count++
    //   }
    handleClick(){
      var count = this.$refs.count
      if(count){
        count.innerText=parseInt(count.innerText,10)+1
      }
    },
    changeMessage:function(){
      this.message="-changed"
    }
  }

})
