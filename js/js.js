/**
 * Created by 梦想小男孩 on 2016/6/18.
 */
(function() {
	list()

	function list() {
		var banner = document.getElementById("banner")
		var dd = banner.getElementsByClassName("dd")[0]
		var oLis = dd.getElementsByTagName("li")
		var list1hover = document.getElementsByClassName("list1hover")
			/*var topt=utils.offset(list1hover[0]).top
			 console.log(list1hover)
			 window.onscroll=function (){
			 var st=(document.documentElement.scrollTop||document.body.scrollTop)
			 if(st>topt){
			 list1hover[0].style.top=st-topt+"px"
			 }else{
			 list1hover[0].style.top=0
			 }
			 }*/
		for (var i = 0; i < oLis.length; i++) {
			var Li = oLis[i]
			Li.index = i
			Li.onmouseover = function() {
				for (var k = 0; k < list1hover.length; k++) {
					list1hover[k].style.display = "none"
				}

				list1hover[this.index].style.display = "block"
			}
			Li.onmouseout = function() {

				list1hover[this.index].style.display = "none"
			}
		}
		for (var k = 0; k < list1hover.length; k++) {
			list1hover[k].onmouseover = function() {
				this.style.display = "block"
			}
			list1hover[k].onmouseout = function() {
				this.style.display = "none"
			}

		}
	}
	rfixed()

	function rfixed() {
		var rFixed = document.getElementById("rFixed")
		var a = utils.getCss(rFixed, "height")
		var oLis = rFixed.getElementsByTagName("li")
		var qq = rFixed.getElementsByClassName("q")
		client = ((document.documentElement.clientHeight || document.body.clientHeight) - a) / 2
		utils.setCss(rFixed, "top", client)

		window.onresize = function() {
			client = ((document.documentElement.clientHeight || document.body.clientHeight) - a) / 2
			utils.setCss(rFixed, "top", client)

		}

		for (var i = 0; i < oLis.length; i++) {
			oLis[i].index = i
			oLis[6].onclick = function() {
				document.documentElement.scrollTop = document.body.scrollTop = 0
			}
			oLis[i].onmouseover = function() {
				this.style.backgroundColor = "red"
				Animate(qq[this.index], {
					right: 34
				}, 200)
			}
			oLis[i].onmouseout = function() {
				Animate(qq[this.index], {
					right: -100
				}, 200)
				this.style.backgroundColor = "#7A6E6E"
			}

		}

	}
	lFixed()
	var oTop = null

	function lFixed() {
		var lFixed = document.getElementById("lFixed")
		var oLis = lFixed.getElementsByTagName("li")
		var oDiv = lFixed.getElementsByClassName("fl")
		var oSpan=lFixed.getElementsByTagName("span")
		var a = utils.getCss(rFixed, "height")
		client = ((document.documentElement.clientHeight || document.body.clientHeight) - a) / 2
		utils.setCss(lFixed, "top", client)
		for (var i = 0; i < oLis.length; i++) {
			oLis[i].index = i
			
			oLis[i].onmouseover = function() {
				oDiv[this.index].style.display = "block"
			}
			oLis[i].onmouseout = function() {
				oDiv[this.index].style.display = "none"
			}
		}
		var ary = [];
		var ary1 = ["1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F", "11F", "12F"];
		var ary2 = ["服饰", "美妆", "手机", "家电", "数码", "运动", "居家", "母婴", "食品", "图书", "车品", "服务"];
		var ary3 = []
		var name = document.getElementsByName("text")
		
		
		for(var c=0;c<oLis.length;c++){
			oLis[c].index=c
	oLis[c].onclick=function(){
		/*oTop = (document.documentElement.scrollTop || document.body.scrollTop)*/
		toTop(ary[this.index],400)
	}
}
		window.onscroll = function() {
			oTop = (document.documentElement.scrollTop || document.body.scrollTop)+550
			for (var k = 0; k < name.length; k++) {
				name[k].indexs = k
				if (ary.length == 12) {
					break;
				}
				ary.push(name[k].offsetTop)
				ary3.push(name[k].offsetTop + name[k].offsetHeight)
			}
			for (var b = 0; b < ary.length; b++) {
				if (oTop >= ary[0]) {
					lFixed.style.display = "block"
				}
				if (oTop <= ary[0]) {
					lFixed.style.display = "none"
				}
				if (oTop >= ary[b]) {
					oSpan[b].innerHTML = ary2[b]
				}
				if (oTop >= ary3[b]) {
					oSpan[b].innerHTML = ary1[b]
				}
				if (oTop <= ary[b]) {
					oSpan[b].innerHTML = ary1[b]
				}
			}

		}

	}

})()