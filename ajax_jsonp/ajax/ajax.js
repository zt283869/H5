function ajax(url,fn){
//	创建xhr对象  异步的javascript和xml(json)   ajax
	var xhr = new XMLHttpRequest();
//	创建连接属性
	xhr.open("GET",url);
//	发送
	xhr.send();
//	设置响应返回结果处理
	xhr.onreadystatechange  = function(){
//		console.log(xhr.readyState);
//		响应完成并且数据找到的时候进行返回数据的处理		
		if(xhr.readyState==4&&xhr.status==200){
//			console.log(xhr.responseText);
			fn(xhr.responseText);//回调函数
		}
	}
}