/** 子弹 */
function Bullet() {
	this.ele = document.createElement("div");
	//初始化
	this.init = function() {
		//随机给定ID号，便于存储和删除
		this.id = (Math.random()*100000).toString(); //
		this.ele.className = "bullet";
		Engine.bullets[this.id] = this;//将完整的子弹对象加入队列
		document.body.appendChild(this.ele);
		this.ele.style.left = MyPlane.offset().x + MyPlane.ele.offsetWidth / 2 - this.ele.offsetWidth / 2 + "px";
		this.ele.style.top = MyPlane.offset().y - this.ele.offsetHeight + "px";
		return this;
	}
	this.movetimer = null;
	//发射
	this.shoot = function() {
		var that = this;
		this.movetimer = setInterval(function() {
			that.ele.style.top = that.ele.offsetTop - 15 + "px";
			if (that.ele.offsetTop <= -10) {
				that.destory();
			}
		}, 30);
	}
	//自我销毁
	this.destory = function(){
		clearInterval(this.movetimer);
		//如何从数组中快速移除元素？ 使用对象属性来作为索引存储
		delete Engine.bullets[this.id];
//		console.log(Engine.bullets); //经过验证，正确
		this.ele.style.left = this.ele.offsetLeft-18+"px";
		this.ele.style.top = this.ele.offsetTop-18+"px";
		this.ele.className = "bullet_die"; //爆炸
		var that = this;
		setTimeout(function(){
			document.body.removeChild(that.ele);
		},100);
	}
}