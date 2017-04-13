//底部tab栏组件
var tab={
    template:`<div @click="hello" style="height:100px;width:100%;background:blue;position:fixed;bottom:0">
            <h1>footer-tab</h1>
            </div>`,
    methods:{
        hello:function(){
            alert("I am footer-tab");
        }
    }
}