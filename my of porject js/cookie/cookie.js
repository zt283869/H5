function getCookie(key){
	var data = decodeURIComponent(document.cookie).replace(/\s/g,"").split(";");
//				console.log(data);
	for(var i=0;i<data.length;i++){
		if(data[i].split("=")[0]==key){
			return data[i].split("=")[1];
		}
	}
}
//	存cookie
function changeDate(n){
	var d = new Date();
	d.setDate(d.getDate()+n);
	return d;
}
function saveCookie(key,value,n){
	document.cookie =  encodeURIComponent(key)+"="+encodeURIComponent(value)+";expires="+changeDate(n);
}
// 删除cookie
function deleteCookie(key){
	saveCookie(key,"",-1);
}