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

//拖拽
function dragDiv(obj1,obj2){
	var flag = 0;
	var _left,_top;
	//鼠标按下
	obj1.onmousedown = function(evt){
		var e = evt||event;
		if(e.preventDefault){  //阻止默认事件
			e.preventDefault();
		}else{
			e.returnValue = false;
		}
		flag = 1;   //记录鼠标按下状态
		_left = e.clientX - obj2.offsetLeft; //相对位置的计算
		_top = e.clientY - obj2.offsetTop;
		//鼠标移动
		document.onmousemove = function(evt){
			var e = evt||event;
			if(flag){   // 在鼠标按下的前提下移动鼠标的时候div跟随
				obj2.style.left = e.clientX-_left+"px"; //将相对位置去掉，保持鼠标在div内的相对位置不变
				obj2.style.top = e.clientY-_top+"px";
			}
			
		}
	}
	
	//鼠标松开
	obj1.onmouseup = function(){
		flag = 0;   //鼠标松开恢复flag
	}
}