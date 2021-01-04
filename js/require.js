require.config({
    baseUrl:'js/',  // 配置所有被引用的库默认位于 js/ 目录下
    paths:{
        'jquery':'http://cdn.com/jquery.min',
        'other':'other-lib' 
    }
});  
require(['jquery','other'],function($,other){
$('#info').text('该字段不能为空！');
other("this is from other-lib"); // 等同于执行console.log()
});  
  