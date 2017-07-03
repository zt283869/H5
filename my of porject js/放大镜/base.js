function  getId(id){ //根据ID获取元素
	return document.getElementById(id);
}
function calcDate(n){ //计算n天后的时间
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+n);
	return oDate;
}
function getStyle(obj,attr){  //获取样式的兼容写法
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj,null)[attr];
	}
}
function getClass(str){  // 通过class获取元素的兼容写法
	var all = document.getElementsByTagName("*");
	var res = [];
	for(var i=0;i<all.length;i++){
		if(all[i].className.indexOf(str)!=-1){
			res.push(all[i]);
		}
	}
	return res;
}
function addClass(obj,str){   // 添加一个className
	if(obj.className.indexOf(str)==-1){
		obj.className +=" "+str;
	}
}
function removeClass(obj,str){   //删除一个className
	obj.className = obj.className.replace(str,"");
}