function randomJump(){
	var arrayRandom = new Array();
	arrayRandom[0] = "有种心情叫鬼火";
	arrayRandom[1] = "有种主动叫孔雀";
	arrayRandom[2] = "有种恶心叫侧耐";
	arrayRandom[3] = "有种感觉叫如麻";
	arrayRandom[4] = "有种低能叫日浓";
	arrayRandom[5] = "有种智商叫憨包";
	arrayRandom[6] = "有种神武叫喷缸";
	arrayRandom[7] = "有种猥琐叫务俗";
	arrayRandom[8] = "有种混乱叫乱比麻麻";
	arrayRandom[9] = "有种体型叫块";
	arrayRandom[10] = "有种倔强叫日股";
	arrayRandom[11] = "这就是我们亲爱的大云南";

	var j = parseInt(Math.random()*arrayRandom.length);
	document.getElementById("ldy").innerHTML=arrayRandom[j];

}
setInterval("randomJump();",3000);