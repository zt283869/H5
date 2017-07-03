function getId(ret){
	return document.getElementById(ret);
}
var _ul_one = getId("ul_one");
var oLi = _ul_one.getElementsByTagName("li");
var _triangle = getId("triangle");


//鼠标移动
for(i=0;i<oLi.length;i++){	
	oLi[i].onmousemove = function(){
		for(var j=0;oLi.length;j++){

			oLi[j].className="";
		}
		
		this.className = "active";
	}
}
