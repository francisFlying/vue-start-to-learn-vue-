//轮播图组件
var slideshow={
    template:`<div @click="hello" style="height:200px;background:pink;color:#fff">
            <h1>slideshow</h1>
            </div>`,
    methods:{
        hello:function(){
            alert("I am slideshow");
        }
    }
}