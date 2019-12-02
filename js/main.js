//关于我们弹窗提示
function about() {
    alert("成员：李春山，方祥，吴瑞，刘仕常");
}
//轮播图
var index=0;
var num=0;
function LoopPic(){
	index++;
	num++;
	var a = document.getElementsByClassName('pic');
	var b =document.getElementsByClassName('place')
	if(index>=a.length) index=0;
	if (num>=b.length) num=0;
	for(var i=0;i<a.length;i++){
		a[i].style.display="none";
		b[i].style.color='white';
	}
	a[index].style.display='block';
	b[num].style.color='black';
}

setInterval(LoopPic,3000);
//意见反馈
var i=0;
function feedback() {
	i++;
	if (i%2==0){
		document.getElementById('feedback').style.display='none';
	}
	else
        document.getElementById('feedback').style.display='block';
}

//右侧导航栏
var j=1;
function menu() {
	j++;
	var c = document.getElementsByClassName('me');
	if (j%2==0){
		document.getElementById('tip').textContent='展开';
        for (var i=0;i<c.length;i++){
			c[i].style.display='none';
        }
	}
	else {
        document.getElementById('tip').textContent='折叠';
        for (var i=0;i<c.length;i++){
            c[i].style.display='block';
        }
	}
}