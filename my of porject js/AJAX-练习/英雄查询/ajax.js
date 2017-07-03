function ajax(url,fnSucc,fnFaild){
	var oAjax;
	
	if(XMLHttpRequest){
		oAjax = new XMLHttpRequest();
	}else{
		oAjax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	oAjax.open("GET",url);
	oAjax.send();
	oAjax.onreadystatechange = function(){
		if(oAjax.readyState==4){
			if(oAjax.status==200){
				fnSucc(oAjax.responseText);
			}
			else{
				if(fnFaild){
					fnFaild(oAjax.status);
				}
			}
		}
	}
	
	
	
	
	
}
