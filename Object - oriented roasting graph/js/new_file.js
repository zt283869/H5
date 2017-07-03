function player(boxId, width, heigth, imgs, speed, btn,a1width,a1height,fontZisi,a1top) {
		this.boxId = boxId;
		this.width = width;
		this.heigth = heigth;
		this.imgs = imgs;
		this.speed = speed;
		this.btn = btn;
		this.timer = null;
		this.initUI();
		this.m = 0;
		this.oLen;
		this.time;
		this.a1width=a1width;
		this.a1height=a1height;
		this.fontZisi = fontZisi;
		this.a1top = a1top;
	}
	//
	player.prototype.getStyle = function(obj,arr){
			if(obj.currentStyle){
			return obj.cuurentStyle[arr];
		}else{
			return getComputedStyle(obj,null)[arr];
		}
	}
	//
	player.prototype.Tmove = function(obj,josn){
		var that = this;
		//that.playSelf = this;
		clearInterval(that.timer)//清除正在执行的定时器
		var iSpeed = 0;
		that.timer=setInterval(function(){
//			console.log(this);
			var Bover = true;//假设运动完成
			for(var attr in josn){//每个属性的遍历修改
				var iCur = 0;
				var iTager = 0;
				 iCur = parseFloat(this.getStyle(obj,attr));//拿到dom的left
				 
				iTager = parseInt(josn[attr]);//拿到json的left
				iSpeed = Math.floor((iTager-iCur)/5);
				if(iTager!=iCur){
					Bover = false;
					obj.style.left = iCur+iSpeed+"px";
				}
				
			}
			
			if(Bover){
				var that = this;
				clearInterval(that.timer)
				}
			}.bind(that),30)
		}
	
	
	
	player.prototype.initUI = function() {	
	var oBoX = document.getElementById(this.boxId);
		var that = this;
			oBoX.onmouseover = function(){
				  that.stopPlay();			
			}	
			oBoX.onmouseout = function(){
				
				 that.go();		
			}	
		//1,放图片
		var ulObj = document.createElement("ul");
		this.oLen = ulObj;
		//		console.log(this.oLen);
		ulObj.style.cssText = "width: 9999px;height: 310px; position: absolute;top: 11%;left: 0;";
		for (var i = 0; i < this.imgs.length; i++) {
			var liObj = document.createElement("li");
			liObj.style.cssText = "float: left;";
			var imgObj = document.createElement("img");
			imgObj.src = this.imgs[i];
			liObj.appendChild(imgObj);
			ulObj.appendChild(liObj);

		}
		//1UL
		document.getElementById(this.boxId).appendChild(ulObj);
		//创建ball
		UlObj = document.createElement("ul");
		UlObj.style.cssText = "position: absolute;bottom: 0;left: 20%;width:500px;"
		for (var i = 0; i < this.imgs.length-1; i++) {
			var liObj = document.createElement("li");
				liObj.innerHTML=i+1;
			liObj.style.cssText = "float: left;width: 40px;height:40px;border-radius: 50%;margin-left: 10px;border:1px solid blueviolet;text-align: center;line-height: 40px;";;
			liObj.ord = i;
			var that = this;		
			liObj.onmouseover = function() {
				that.goImg(this.ord);
			}
			UlObj.appendChild(liObj);
		}
		//2UL
		document.getElementById(this.boxId).appendChild(UlObj);
		UlObj.children[0].style.background = this.btn.highLightColor;
	}

	//自动轮播的方法
	player.prototype.goStep = function() {
		var oBox = document.getElementById(this.boxId);
		this.oBoX = oBox;
		var _oUi = oBox.getElementsByTagName("ul")[0];
		var _olio = _oUi.getElementsByTagName("li")
		this.m++;
		if (this.m == _olio.length) {

			this.oLen.style.left = "0";
			this.m = 1;
		}
		var that = this;
		var obj = {"left":-1 * that.m*that.width};
		that.Tmove(_oUi,obj);	
			//变换按钮你的颜色
		var oBox = document.getElementById(this.boxId);
		var _oUbtnObj = oBox.getElementsByTagName("ul")[1];
		for (var i = 0; i < _oUbtnObj.children.length; i++) {
			_oUbtnObj.children[i].style.background = this.btn.bgColor;
		}
		
		_oUbtnObj.children[this.m%(_olio.length-1)].style.background = this.btn.highLightColor;

	}

	//调用轮播
	player.prototype.go = function() {
		var that = this;
		that.time = setInterval(function() {
			that.goStep();
		}, this.speed)

	}
	player.prototype.stopPlay = function() {
		clearInterval(this.time);
	}
	//鼠标移动，显示图片
	player.prototype.goImg = function(ord) {
		var that = this;
		var boxObj = document.getElementById(this.boxId);
		var ulImgObj = boxObj.getElementsByTagName("ul")[0];
//		let obj = {"left":-1 * that.m*that.width};
//		that.Tmove(_oUi,obj);	
		this.m = ord;
		var obj = {"left":-1 * that.m*that.width};
			that.Tmove(ulImgObj,obj);	
			
//
		var ulbtnObj = boxObj.getElementsByTagName("ul")[1];
		for (var j = 0; j < ulbtnObj.children.length; j++) {
			ulbtnObj.children[j].style.background = this.btn.bgColor;
		}
		ulbtnObj.children[this.m].style.background = this.btn.highLightColor;
		
//		var that = this;
//		_oUi.style.left = -1 * this.m * this.width + "px"
//		var obj = {"left":-1 * that.m*that.width};
//		that.Tmove(ulImgObj,obj);	
	}
player.prototype.left=function(){
		var that = this;
		var boxObj = document.getElementById(this.boxId);
		var A1left = document.createElement("a");
		var oBox = document.getElementById(this.boxId);
		var _oUbtnObj = oBox.getElementsByTagName("ul")[1];		
		var ulImgObj = boxObj.getElementsByTagName("ul")[0];
			A1left.innerHTML="&lt;";
			A1left.id="A1";
			A1left.style.cssText = "position: absolute;width: "+this.a1width+"px;height: "+this.a1height+"px;text-align: center;background: rgba(0,0,0,0.6);color: white;font-size: "+this.fontZisi+"px;left: 0;top: "+this.a1top+"%;z-index: 100;line-height: "+this.height+"px;";
			boxObj.appendChild(A1left);
			A1left.onclick = function(){
				that.m--;
			if (that.m==-1){
				that.m=_oUbtnObj.children.length-1;
				ulImgObj.style.left = -1*((ulImgObj.children.length-1)*that.width)+"px";
			}			
			for (var j = 0; j < _oUbtnObj.children.length; j++) {
			_oUbtnObj.children[j].style.background = that.btn.bgColor;
			}
			_oUbtnObj.children[that.m%_oUbtnObj.children.length].style.background = that.btn.highLightColor;
			var obj = {"left":-1 * that.m*that.width};
				that.Tmove(ulImgObj,obj);
			}	
		}
 player.prototype.right=function(){
		var that = this;
		var boxObj2 = document.getElementById(this.boxId);
		var A2left = document.createElement("a");
		var _oUbtnObj = boxObj2.getElementsByTagName("ul")[1];		
		var ulImgObj = boxObj2.getElementsByTagName("ul")[0];
			A2left.innerHTML="&gt;";
			A2left.style.cssText = "position: absolute;width: "+this.a1width+"px;height: "+this.a1height+"px;text-align: center;background: rgba(0,0,0,0.6);color: white;font-size: "+this.fontZisi+"px;right: 0;top: "+this.a1top+"%;z-index: 100;line-height: "+this.height+"px;";
			boxObj2.appendChild(A2left);	
			A2left.onclick= function(){
				that.m++;
			if (that.m == _oUbtnObj.children.length+1) {				
				that.m=1;
				ulImgObj.style.left ="0px";
			}			
			for (var j = 0; j < _oUbtnObj.children.length; j++) {
			_oUbtnObj.children[j].style.background = that.btn.bgColor;
			}
			_oUbtnObj.children[that.m%(ulImgObj.children.length-1)].style.background = that.btn.highLightColor;
				
			var obj = {"left":-1 * that.m*that.width};
				that.Tmove(ulImgObj,obj);
			}
	}
	window.onload = function() {
		var l = new player(
			"box",
			780,
			450, 
			["img/1a.jpg", "img/5e.jpg", "img/4d.jpg", "img/2b.jpg", "img/3c.jpg","img/12.jpeg","img/16.jpeg","img/17.jpeg","img/1a.jpg"],
			3000,
			{
				width: 20,
				height: 20,
				bgColor: "white",
				highLightColor: "red"
			},
			80,
			50,			
			40,
			50
		)
		l.go(); //对象调用函数
		l.left();
		l.right();
		
	}