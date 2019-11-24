//此页为index.html页面的js代码
//实现功能：轮播图，左侧标签颜色随轮播图改变
//作者：方祥
//修改时间：2019.11.15

var index=0;
var num=0;
//改变图片
function ChangeImg() {
    index++;
    num++;
    var a=document.getElementsByClassName("loop_pic");
    var b=document.getElementsByClassName("li");
    if(index>=a.length) index=0;
    if (num>=b.length)num=0;
    for(var i=0;i<a.length;i++){
        a[i].style.display='none';
    }
    for (var i=0;i<b.length;i++) {
        b[i].style.color="white";
    }
    a[index].style.display='block';
    b[num].style.color="red";
}
//设置定时器，每隔三秒切换一张图片
setInterval(ChangeImg,3000);

function man() {
    alert("组长：方祥\n组员：李春山、吴瑞、刘仕常");
}
function tips() {
    alert("功能暂未开放！\n\nThis function is not opening now")
}