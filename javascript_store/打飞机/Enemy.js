/** 敌人 */
function Enemy(type) {
	this.ele = document.createElement("div");
	this.type = type;
	this.speed = 0;
	this.hp = 0;
	this.movetimer = null;
	this.dieimgs = null,
	//初始化
	this.init = function() {
		//随机给定ID号，便于存储和删除
		this.id = (Math.random()*100000).toString(); //
		switch (this.type) {
			case this.PLANE_TYPE_SMALL:
				this.hp = 1;
				this.ele.className = "enemy-small";
				this.speed = this.PLANE_SPEED_SMALL;
				this.dieimgs = ["plane1_die1.png","plane1_die2.png","plane1_die3.png"];
				break;
			case this.PLANE_TYPE_MIDDLE:
				this.hp = 5;
				this.ele.className = "enemy-middle";
				this.speed = this.PLANE_SPEED_MIDDLE;
				this.dieimgs = ["plane2_die1.png","plane2_die2.png","plane2_die3.png","plane2_die4.png"];
				break;
			case this.PLANE_TYPE_LARGE:
				this.hp = 12;
				this.ele.className = "enemy-large";
				this.speed = this.PLANE_SPEED_LARGE;
				this.dieimgs = ["plane3_die1.png","plane3_die2.png","plane3_die3.png","plane3_die4.png","plane3_die5.png","plane3_die6.png"];
				break;
		}
		this.initPosition();
		//加入页面之前，将敌人放入队列
		Engine.enemies[this.id] = this;
		document.body.appendChild(this.ele);
		return this;
	}
	//设定位置
	this.initPosition = function() {
		this.ele.style.left = randomInt(Engine.ele.offsetLeft, Engine.ele.offsetLeft+Engine.ele.offsetWidth-parseInt(getStyle(this.ele).width)) + "px";
		this.ele.style.top = -parseInt(getStyle(this.ele).height) + "px";
	}
	//移动
	this.move = function() {
		var that = this;
		this.movetimer = setInterval(function(){
			that.ele.style.top = that.ele.offsetTop+that.speed+"px";
			if(that.ele.offsetTop >= document.documentElement.offsetHeight){
				//从队列中删除
				delete Engine.enemies[this.id];
				clearInterval(this.movetimer);
				that.destory();
			}
		},30);
	}
	this.hurt = function(){
		--this.hp <= 0 ? this.explode() : "";
	}
	//爆炸
	this.explode = function(){
		var that = this;
		//从队列中删除
		delete Engine.enemies[this.id];
		clearInterval(this.movetimer);
		var index = 0;
		(function(){
			if(index == that.dieimgs.length) {
				that.destory();
				return;
			}
			console.log(index)
			that.ele.style.background = "url(images/" + that.dieimgs[(index++) % that.dieimgs.length] + ")";
			setTimeout(arguments.callee, 100);
		})();
	}
	//自我销毁
	this.destory = function(){
		document.body.removeChild(this.ele);
	}
}

Enemy.prototype = {
	PLANE_TYPE_SMALL: 0, //小型飞机
	PLANE_TYPE_MIDDLE: 1, //中型飞机
	PLANE_TYPE_LARGE: 2, //大型飞机
	PLANE_SPEED_SMALL: 7, //小型机速度
	PLANE_SPEED_MIDDLE: 5, //中型机速度
	PLANE_SPEED_LARGE: 3 //大型机速度
}