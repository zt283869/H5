/** 我方灰机 */
var MyPlane = {
	frequency: 300,
	ele: document.createElement("div"),
	controller: null,
	initPosition: function() {
		this.ele.style.left = Engine.ele.offsetLeft + Engine.ele.offsetWidth / 2 - this.ele.offsetWidth / 2 + "px";
		this.ele.style.top = document.documentElement.offsetHeight - this.ele.offsetHeight + "px";
	},
	/*listening: function() { //监听键盘控制
		this.contoller = setInterval(function() {}, 30);
	},*/
	offset: function() {
		return {
			x: this.ele.offsetLeft,
			y: this.ele.offsetTop
		};
	},
	show: function() {
		this.init();
		this.fire();
	},
	init: function() {
		this.ele.className = "my-warplain";
		document.body.appendChild(this.ele);
		this.initPosition();
		var leftSide = Engine.ele.offsetLeft;
		var rightSide = Engine.ele.offsetLeft + Engine.ele.offsetWidth - MyPlane.ele.offsetWidth;
		document.onmousemove = function(evt) {
			var _left = evt.clientX - MyPlane.ele.offsetWidth / 2;
			_left = _left < leftSide ? leftSide : _left;
			_left = _left > rightSide ? rightSide : _left;
			MyPlane.ele.style.left = _left + "px";
		};
		return this;
	},
	fire: function() {
		setInterval(function() {
			new Bullet().init().shoot();
		}, this.frequency);
	}
}