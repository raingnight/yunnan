
var s = document.getElementById('s');
var time = 8; //时间,秒            　　　　　　　　
function Redirect() {
    window.location = "../index.html";
}
var i = 0;
function dis() {
    s.innerHTML = "还剩" + (time - i) + "秒跳转主页";
    i++;
}
timer = setInterval('dis()', 1000); //显示时间            　　　　　　　　
timer = setTimeout('Redirect()', time * 1000); //跳转
