function ajax(url,succfun,failfun){
	//创建XMLHTTPRequest对象
	var XHR = null;
	if(window.XMLHttpRequest){
		XHR = new XMLHttpRequest();
	}else{
		XHR = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//定义连接属性
	XHR.open("GET",url,true);
	
	//发送请求
	XHR.send();
	
	//定义回调函数
	XHR.onreadystatechange = function(){
		if(XHR.readyState==4&&XHR.status==200){
			succfun(XHR.responseText);
		}else{
			if(failfun){
				failfun(XHR.responseText);
			}
		}
	}
}
