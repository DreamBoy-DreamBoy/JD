var banner = document.getElementById("banner")
var BannerImg = banner.querySelector(".bigImg")
var oLis = BannerImg.getElementsByTagName("li")
var tip=banner.getElementsByClassName("tip")[0]
var tips=tip.getElementsByTagName("li")

oLis[0].style.opacity = "1"
var step = 0
function liner(t, d, c, b) {
    return t / d * c + b
}
function Animate(curEle, target, duration, callback) {
    var time = null;
    var begin = {}
    var change = {}
    clearInterval(curEle.timer);
    for (var key in target) {
        begin[key] = utils.css(curEle, key)
        change[key] = target[key] - begin[key]

    }
    curEle.timer = setInterval(function () {
        if (time >= duration) {

            utils.css(curEle, target);
            //停止定时器，并且后面语句不再执行；
            clearInterval(curEle.timer);
            callback && callback.call(curEle);

            return;
        }
        time += 10
        var cur = liner(time, duration, change[key], begin[key])

        utils.css(curEle, key, cur)
    }, 10)

}
automove = setInterval(autoMove, 3000)
function autoMove() {
    if (step == oLis.length - 1) {
        step = -1
    }
    step++
    autoBanner()
}

function autoBanner() {
    for (var i = 0; i < oLis.length; i++) {
        if (step == i) {
            oLis[i].style.zIndex = "1";
            Animate(oLis[i], {'opacity': 1}, 500, function () {
                var sibling = utils.siblings(this)
                for (var k = 0; k < sibling.length; k++) {
                    sibling[k].style.opacity = 0
                }
            })
            continue;
        }
        oLis[i].style.zIndex = "0"
    }
    bannerTip()
}
function bannerTip(){
    for(var i=0;i<tips.length;i++){
        if(step==i){
            tips[i].className="bg"
        }else {
            tips[i].className=""
        }
    }
}
for (var i=0;i<tips.length;i++){
    tips[i].index=i
    tips[i].onclick= function () {
        this.className="bg"
        step=this.index
        autoBanner()
    }
}



function toTop(target, duration, callback) {
    var time = null;
    var begin =(document.documentElement.scrollTop || document.body.scrollTop)
    var change = target-begin
    clearInterval(timer);
   
    var timer = setInterval(function () {
        if (time >= duration) {
				utils.win(target)
            clearInterval(timer);
            callback && callback.call(curEle);

            return;
        }
        time += 10
        var cur = liner(time, duration, change, begin)

utils.win("scrollTop",cur)
    }, 10)
    }
window.toTop=toTop
window.Animate=Animate