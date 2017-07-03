			var pro = document.getElementById("pro");
			var city = document.getElementById("city");
			var area = document.getElementById("area");
			ajax("city1.json",function(res){
				var oChina = JSON.parse(res);
				// 省份
					for(var i=0;i<oChina.length;i++){
						var oOption = document.createElement("option");
						oOption.value = i;
						oOption.innerHTML =  oChina[i].name;
						pro.appendChild(oOption);
					}
					//
					var x = pro.value;
						var data = oChina[x].city;
						for(var i=0;i<data.length;i++){
							var oOption = document.createElement("option");
							oOption.value = i;
							oOption.innerHTML =  data[i].name;
							city.appendChild(oOption);
						}
					
					//	城市的加载
					pro.onchange = function(){	
						city.innerHTML = "";
						var x = pro.value;
						var data = oChina[x].city;
						for(var i=0;i<data.length;i++){
							var oOption = document.createElement("option");
							oOption.value = i;
							oOption.innerHTML =  data[i].name;
							city.appendChild(oOption);
						}
					}
			});