function a(num){
	if(num<=1){
		return 1;
	}else{
		return num*arguments.callee(num-1);
	}
}
console.log(a(10));
