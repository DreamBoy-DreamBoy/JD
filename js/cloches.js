/*
 /!**
 * Created by 梦想小男孩 on 2016/6/20.
 *!/
 (function () {

 var name=document.getElementsByName("text")

 for(var i=0;i<name.length;i++){

 tab=name[i].querySelector(".tab")
 var aLis=tab.getElementsByTagName("li")
 var mc=name[i].querySelector(".mc")
 var pList=mc.getElementsByClassName("p-list")
 console.log(pList[0])
 pList[0].style.display="block"
 for (var k=0;k<aLis.length;k++){
 aLis[k].index=k
 aLis[k].onmouseover=function(){
 for(var s=0;s<pList.length;s++){
 pList[s].style.display="none"
 }
 pList[this.index].style.display="block"
 }

 }

 }

 })()
 */

/**
 * Created by 梦想小男孩 on 2016/6/20.
 */
/*(function () {

 var name = document.getElementsByName("text")
 var ary = ["a","b","c","d","e","f","g","h","j","l","m","n","o","q","r","t","u","v","w","x","z"]
 for (var i = 0; i < name.length; i++) {
 //for (var y = 0; y < ary.length; y++) {
 var tab, aLis, mc, pList;
 tab[ary[y]] = name[i].querySelector(".tab")
 aLis[ary[y]] = tab[ary[y]].getElementsByTagName("li")
 mc[ary[y]] = name[i].querySelector(".mc")
 pList[ary[y]] = mc[ary[y]].getElementsByClassName("p-list")
 console.log(pList[0])
 pList[i][0].style.display = "block"
 for (var k = 0; k < aLis[i].length; k++) {
 aLis[i][k].index = k
 aLis[i][k].onmouseover = function () {
 for (var s = 0; s < pList[i].length; s++) {
 pList[i][s].style.display = "none"
 }
 pList[i][this.index].style.display = "block"
 }

 }
 //}
 }

 })()*/

/**
 !* Created by 梦想小男孩 on 2016/6/20.
 !*/
(function () {
	var ary=[]
    var name = document.getElementsByName("text")
    //var ary = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "l", "m", "n", "o", "q", "r", "t", "u", "v", "w", "x", "z"]
    for (var i = 0; i < name.length; i++) {
        name[i].indexs=i
        name[i].onmouseover=function(){
        	var tab=name[this.indexs].querySelector(".tab")
        	 var mc=name[this.indexs].querySelector(".mc")
			var aLis = tab.getElementsByTagName("li")
var pList = mc.getElementsByClassName("p-list")
            for (var k = 0; k < aLis.length; k++) {
                //var a=name[i].indexs
                aLis[k].index = k
                
                aLis[k].onmouseover = function () {
                	
                    for(var s=0;s<pList.length;s++){
                        pList[s].style.display="none"
                    }
                    pList[this.index].style.display="block"
                }
            }
            
           }   
           
           
        }


})()
