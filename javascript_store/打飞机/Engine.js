/** 游戏引擎 */
var Engine = {
	bullets: {}, //所有的子弹
	enemies: {}, //所有的敌人
	ele: null,
	//初始化
	init: function() {
		Logo.show();
		//MyPlane.listening();
		return this;
	},
	//载入进度
	loading: function() {
		var imgs = ["images/loading1.png", "images/loading2.png", "images/loading3.png"]
		var index = 0;
		var oLoading = document.createElement("div");
		oLoading.className = "loading";
		document.body.appendChild(oLoading);
		var t = setInterval(function() { //初始化进度条
			oLoading.style.background = "url(" + imgs[(++index) % 3] + ")";
		}, 500);
		/** 进度读取4秒后开始游戏 */
		setTimeout(function() {
			clearInterval(t);
			Logo.hide();
			document.body.removeChild(oLoading);
			Engine.start();
		}, 4000);
		/** 背景的运动 */
		var bgY = 0;
		var bgtimer = setInterval(function(){
			Engine.ele.style.backgroundPosition = "0px "+ (bgY+=2) + "px";
		},30);
	},
	//游戏开始
	start: function() {
		MyPlane.show();
		Engine.createEnemy();
		var monitor = Engine.monitor();
	},
	//碰撞检测
	monitor: function(){
		return setInterval(function(){
			//console.log(Engine.enemies.length)
			//检测子弹与敌机的碰撞，同时检测MyPlane与敌机的碰撞
			for(var i in Engine.bullets){
				for(var j in Engine.enemies){
					//console.log(Engine.enemies)
					if( isImpact(Engine.bullets[i],Engine.enemies[j]) ){//如果碰撞发生
						//如何消除子弹以及飞机？
						Engine.bullets[i].destory();
						Engine.enemies[j].hurt();
					}
				}
			}
		},30);
	},
	//自动产生敌人
	createEnemy: function(){
		var small = setInterval(function(){
			Math.random() >= 0.5 ? new Enemy(Enemy.prototype.PLANE_TYPE_SMALL).init().move() : "";
		},800);
		var middle = setInterval(function(){
			Math.random() >= 0.5 ? new Enemy(Enemy.prototype.PLANE_TYPE_MIDDLE).init().move() : "";
		},2400);
		var large = setInterval(function(){
			Math.random() >= 0.5 ? new Enemy(Enemy.prototype.PLANE_TYPE_LARGE).init().move() : "";
		},6400);
	}
}