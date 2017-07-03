function ajax1701(method,url,str,isAsy,func,dataType){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	//2、准备工作（设置请求方式，请求地址，同步异步），回调函数
	let urlAndParam=url;
	if(method.toLowerCase()=="get"){
		urlAndParam = urlAndParam+"?"+str;
	}
	xhr.open(method,urlAndParam,isAsy);
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(dataType=="json"){
				let data = eval("("+xhr.responseText+")");
				func(data);
			}else{
				func(xhr.responseText);
			}
		}
	}
	
	//3、发送
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(str);
	}else{
		xhr.send();		
	}
}